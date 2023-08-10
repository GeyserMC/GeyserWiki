# Contributing

If you would like to contribute to the wiki, please [open a pull request](https://github.com/GeyserMC/GeyserWiki/pulls).

### Creating a new page

Most documentation is in the docs folder where you can add new pages or edit the current ones.
If a new page is being added make sure you add its page properties at the beginning of the file.
Make sure that the file extension is .md - in this case `pagetitle.md`.

### Example page layout

```md
---
title: Page title
page_sidebar: false "optional"
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

### GeyserWiki development - Local deployment on Windows.

* Download and install Ruby using the Ruby+Devkit from https://rubyinstaller.org/downloads/.

* Once installed, run 'ridk install' in console to open the RubyInstaller.
For this usecase, it is recommended to choose the third option, "MSYS and MINGW". After that, the Ruby installation is completed.

* Open the GeyserWiki folder in VScode, in terminal you will have to install the bundle first 'bundle install' command.
installing for the first time can take a while.

* Once installed, you can start the webserver locally with the 'bundle exec jekyll serve' command in the VSC terminal. 
