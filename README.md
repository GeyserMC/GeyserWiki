# GeyserMC Wiki

This is the repository that contains the wiki for all of GeyserMCs projects.

The wiki can be accessed using [this link](https://wiki.geysermc.org).

## Contributing

If you would like to contribute to the wiki, please [open a pull request](https://github.com/GeyserMC/GeyserWiki/pulls).

### Creating a new page

Most documentation is in the docs folder where you can add new page's or edit the current ones.
If a new page is being added make sure you add its page properties at the beginning of the file.
Make sure that the file extension is .md in this case pagetitle.md

### Example page layout

```md
---
layout: page
title: Page title
permalink: /page/pagetitle/
---

# Page title
This is an example page
```

### Adding page to sidebar 

Once you have added the file you can add an sidebar link, All sidebar links + sub links are in the _data/toc.yml file

### Example sidebar structure 

```
- title: Page Title Documentation
  url: "page/"
  links:
    - title: "Pagetitle sub link"
      url: "page/pagetitle/"
      children:
        - title: PageChild sub link
          url: "page/pagetitle/#headerLink"
```

### GeyserWiki  development setup locally

* Download Ruby and Take the Ruby+Devkit from this page; https://rubyinstaller.org/downloads/

* Once installed you will have to Run 'ridk install', this will open the RubyInstaller console.
Recommend choosing option 3; MSYS and MINGW after that ruby has been installed.

* Open the GeyserWiki folder in VScode, in terminal you will have to install the bundle first 'bundle install' command.
installing for the first time can take a while.

* Once installed you can now start the server locally with command 'bundle exec jekyll serve'
