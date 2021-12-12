import glob, os, sys
from collections import OrderedDict

hadError = False

# _escape and _error_workflow_command taken from https://github.com/utgwkk/pytest-github-actions-annotate-failures/blob/main/pytest_github_actions_annotate_failures/plugin.py
def _escape(s):
    return s.replace("%", "%25").replace("\r", "%0D").replace("\n", "%0A")

def _error_workflow_command(filesystempath, lineno, longrepr):
    # Build collection of arguments. Ordering is strict for easy testing
    details_dict = OrderedDict()
    details_dict["file"] = filesystempath
    if lineno is not None:
        details_dict["line"] = lineno

    details = ",".join("{}={}".format(k, v) for k, v in details_dict.items())

    if longrepr is None:
        return "\n::error {}".format(details)
    else:
        longrepr = _escape(longrepr)
        return "\n::error {}::{}".format(details, longrepr)


# Load toc but all stripped
toc = open('./_data/toc.yml', 'r', encoding='utf-8')
tocLines = toc.readlines()
toc.close()
tocContents = ''
for tocLine in tocLines:
	tocContents += tocLine.replace('- ', '').strip() + '\n'

# Check the permalinks
directory = './_docs/'
files = glob.glob(os.path.join(directory, '**/*.md'), recursive=True)
for file in files:
	contents = open(file, 'r', encoding='utf-8')
	lines = contents.readlines()
	contents.close()

	lineNo = 0
	for line in lines:
		lineNo += 1

		# End of header?
		if (line == '---' and lineNo != 1):
			break
		
		if (line.startswith('permalink:')):
			url = line.replace('permalink:', '').strip()
			wantedUrl = '/' + file.replace(os.path.sep, '/').replace(directory, '').replace('.md', '/')

			# Special file cleanup
			wantedUrl = wantedUrl.replace('index/', '')
			wantedUrl = wantedUrl.replace('root/', '')

			errorFileName = file

       		# try to convert to absolute path in GitHub Actions
			# from https://github.com/utgwkk/pytest-github-actions-annotate-failures/blob/main/pytest_github_actions_annotate_failures/plugin.py#L38-L50
			workspace = os.environ.get("GITHUB_WORKSPACE")
			if workspace:
				full_path = os.path.abspath(file)
				try:
					rel_path = os.path.relpath(full_path, workspace)
				except ValueError:
					# os.path.relpath() will raise ValueError on Windows
					# when full_path and workspace have different mount points.
					# https://github.com/utgwkk/pytest-github-actions-annotate-failures/issues/20
					rel_path = errorFileName
				if not rel_path.startswith(".."):
					errorFileName = rel_path

			# Check if the perma link it correct
			if (url != wantedUrl):
				hadError = True
				print(_error_workflow_command(errorFileName, lineNo, "Permalink does not match filename! Should be " + wantedUrl), file=sys.stderr)

			# Check toc
			if (wantedUrl != '/' and not (f"url: \"" + url[1:] + "\"" in tocContents)):
				hadError = True
				print(_error_workflow_command(errorFileName, lineNo, "Permalink not in toc.yml!"), file=sys.stderr)

sys.exit(1 if hadError else 0)
