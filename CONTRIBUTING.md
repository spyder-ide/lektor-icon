# Contributing Guide

This is the website for the Spyder scientific Python development environment, and is developed with standard GitHub flow.
If you're not comfortable with at least the basics of ``git`` and GitHub, we recommend seeking out a beginner tutorial; if you are already are experienced with it, most of this guide will already be familiar to you.
However, the guide should fill you in on pretty much all the parts you need to know, so read on.
Thanks!



<!-- markdownlint-disable -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Contents**

- [Reporting Issues](#reporting-issues)
- [Setting Up a Development Environment](#setting-up-a-development-environment)
  - [Fork and clone the repo](#fork-and-clone-the-repo)
  - [Create and activate a fresh venv](#create-and-activate-a-fresh-venv)
  - [Install the development dependencies](#install-the-development-dependencies)
  - [Install the required Pre-Commit hooks](#install-the-required-pre-commit-hooks)
- [Running the server](#running-the-server)
- [Making Your Changes](#making-your-changes)
- [Pushing your Changes and Submitting a Pull Request](#pushing-your-changes-and-submitting-a-pull-request)
- [Standards and Conventions](#standards-and-conventions)
  - [All Files](#all-files)
  - [All Lektor files (INI and ``contents.lr``)](#all-lektor-files-ini-and-contentslr)
  - [Lektor ``contents.lr``](#lektor-contentslr)
  - [INI Files (Models, Flowblocks, Lektorproject, etc)](#ini-files-models-flowblocks-lektorproject-etc)
  - [Models and Flowblocks](#models-and-flowblocks)
  - [Jinja2 HTML Templates](#jinja2-html-templates)
  - [HTML](#html)
  - [CSS](#css)
  - [Javascript](#javascript)
  - [Python](#python)
  - [Images](#images)
  - [Fonts](#fonts)
  - [Documentation](#documentation)
- [Roadmap](#roadmap)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- markdownlint-restore -->

For guidance on the basics of using ``git`` and Github to contribute to Lektor-Icon and other projects, check out the tutorial in the [Spyder Development Documentation](https://github.com/spyder-ide/spyder/wiki/Contributing-to-Spyder) for detailed instructions, and be sure to see the [Spyder Contributing Guide](https://github.com/spyder-ide/spyder/blob/master/CONTRIBUTING.md) for [guidelines on adding third party content to Lektor-Icon](https://github.com/spyder-ide/spyder/blob/master/CONTRIBUTING.md#adding-third-party-content) (like images, fonts, CSS stylesheets and Javascript libraries, as well as Jinja2 templates from other projects).
As always, feel free to contact us via one of the platforms listed at the bottom of this document if you have any questions or concerns, and we look forward to reviewing your contribution to Lektor-Icon!



## Reporting Issues

Discover a bug?
Want a new feature?
[Open](https://github.com/spyder-ide/lektor-icon/issues/new/choose) an [issue](https://github.com/spyder-ide/lektor-icon/issues)!
Make sure to describe the bug or feature in detail, with reproducible examples and references if possible, what you are looking to have fixed/added.
While we can't promise we'll fix everything you might find, we'll certainly take it into consideration, and typically welcome pull requests to resolve accepted issues.
Thanks!



## Setting Up a Development Environment

**Note**: You may need to substitute ``python3`` for ``python`` in the commands below on some Linux distros where ``python`` isn't mapped to ``python3`` (yet).

### Fork and clone the repo

First, navigate to the [project repository](https://github.com/spyder-ide/lektor-icon) in your web browser and press the ``Fork`` button to make a personal copy of the repository on your own Github account.
Then, click the ``Clone or Download`` button on your repository, copy the link and run the following on the command line to clone the repo with submodules:

```bash
git clone --recursive <LINK-TO-YOUR-REPO>
```

Finally, set the upstream remote to the official website repo with:

```bash
git remote add upstream https://github.com/spyder-ide/lektor-icon.git
```


### Create and activate a fresh venv

Particularly for development installs, we highly recommend you create and activate a virtual environment to avoid any conflicts with other packages on your system or causing any other issues.
To do so with Conda (recommended), simply execute the following:

```bash
conda create -c conda-forge -n lektor-icon-env python=3
```

And activate it with

```bash
conda activate lektor-icon-env
```

With pip/venv, you can create a virtual environment with

```bash
python -m venv lektor-icon-env
```

And activate it with the following on Linux and macOS,

```bash
source lektor-icon-env/bin/activate
```

or on Windows (cmd),

```cmd
.\lektor-icon-env\Scripts\activate.bat
```

Regardless of the tool you use, make sure to remember to always activate your environment before using it.


### Install the development dependencies

To get the consistent pinned versions of the development dependencies, install the deps from the requirements file.
If using conda, run:

```bash
conda install -c conda-forge --file requirements.txt
```

Or, using pip,

```bash
python -m pip install -r requirements.txt
```


### Install the required Pre-Commit hooks

You'll need to install the pre-commit hooks before committing any changes, as they both auto-generate/update specific files and run a comprehensive series of checks to help you find likely errors and enforce the project's code quality guidelines and style guide; they are also run in CI, and will fail the build if any don't pass or modify any files.
This repository uses [Pre-Commit](https://pre-commit.com/) to install, configure and update a suite of pre-commit hooks that check for common problems and issues, and fix many of them automatically.
Pre-commit itself is installed with the above command, and the hooks should be enabled by running the following from the root of this repo:

```bash
pre-commit install --hook-type pre-commit --hook-type commit-msg
```

The hooks will be automatically run against any new/changed files every time you commit.
It may take a few minutes to install the needed packages the first time you commit, but subsequent runs should only take a few seconds.
If you made one or more commits before installing the hooks (not recommended), you can run them manually on all the files in the repo with:

```bash
pre-commit run --all-files
```

**Note**: Many of the hooks fix the problems they detect automatically (the hook output will say ``Files were modified by this hook``, but no errors/warnings will be listed), but they will still abort the commit so you can double-check everything first.
Once you're satisfied, ``git add .`` and commit again.



## Running the server

In the ``example-site`` directory of this repository, run a continuously updating local webserver:

```bash
cd example-site
lektor server
```

The resulting website can be viewed in your browser at ``http://localhost:5000``.



## Making Your Changes

To start working on a new PR, you need to execute these commands, filling in the branch names where appropriate (``<FEATURE-BRANCH>`` is the branch you'll be creating to store your changes, e.g. ``fix-startup-bug`` or ``add-widget-support``):

```bash
git checkout master
git pull upstream master
git checkout -b <FEATURE-BRANCH>
```

Once you've made and tested your changes, commit them with a descriptive message of 74 characters or less written in the imperative tense, with a capitalized first letter and no period at the end (our pre-commit hooks will check that for you, so make sure to install them).
For example:

```bash
git commit -am "Fix style issues on mobile browsers"
```

After making your changes, make sure to test them with ``lektor server``.



## Pushing your Changes and Submitting a Pull Request

Now that your changes are ready to go, you'll need to push them to your fork.

```bash
git push -u origin <FEATURE-BRANCH>
```

Finally, create a pull request to the [spyder-ide/lektor-icon repository](https://github.com/spyder-ide/lektor-icon/) on Github.

Thanks, and we look forward to your generous contributions!


## Standards and Conventions

Make sure you follow these to ensure clarity, consistency and correctness throughout our codebase.

### All Files

* **UTF-8** for character encoding
* **LF** for newlines (our ``.gitattributes`` enforces this on commit)
* **ISO 8601** (YYYY-MM-DD HH:MM:SS) for dates/times
* **SI/metric** for units
* **HTTPS** for all links where available (try adding it if the site is HTTP by default)
* **Decimal point**, rather than decimal comma
* **Forward slashes** (``/``) for path delimiters on all platforms (Windows accepts them equally to backslashes)
* **Strip trailing spaces** on save
* **Newline-terminate** all files
* **Spaces, not tabs** except where e.g. JS files are unmodified or nearly so
* **Lowercase filenames and extensions**, not all upper
* **Dash-deliminate filenames** (``test-file.txt``), not underscore (``test_file.txt``)
* **.txt** extension for all plain text files


### All Lektor files (INI and ``contents.lr``)

* **No hard wrap** after a fixed character value
* **No indents/leading spaces** should be used
* **Use ``true``/``false``, not ``yes``/``no``** for boolean values
* **Include all keys**, even if values left blank
* **Adhere to the Lektor theme spec** as published in the docs


### Lektor ``contents.lr``

* **Use a hierarchy of line breaks** between flowblock levels; respect existing convention
* **Line breaks after ``---``** where needed, never before
* **One blank line before multiline content**, i.e. blocks that span multiple lines
* **Line break after sentences** (like this document)


### INI Files (Models, Flowblocks, Lektorproject, etc)

* **No quoting of values** should be employed
* **One space around equals** on both sides
* **One blank line between groups** of property values
* **All lowercase names** for groups and keys unless required


### Models and Flowblocks

* **Name each model** clearly and appropriately
* **Always include a label** for each item
* **Include a short description** of each item for the admin UI; at least one sentence, but may extend to multiple if needed.
* **Make titles size = large** unless in a multi-level nested flowblock
* **Always include a checkbox label** for checkboxes
* **Adhere to group and property order** as listed in the Lektor documentation


### Jinja2 HTML Templates

* **Ensure correct indent levels in output**; i.e. don't add indent levels solely for Jinja statements
* **Indent jinja statements equally** to surrounding HTML
* **One space after ``(%``, ``{{``, and ``|``/before ``%}``, ``}}`` and ``|``**
* **Use ``'`` in Jinja, ``"`` in HTML** for quotes
* **Follow spirit of PEP 8** for code style in Jinja expressions
* **Use ``asseturl`` for anything in the ``assets/`` directory


### HTML

* **Validate with W3C HTML5 checker** against latest HTML standards
* **Two space indent** for all files
* **Don't use deprecated elements** in HTML5
* **Avoid inline styles** if at all possible
* **Don't close single tags** e.g. XHTML-style ``<br/>``
* **Explicitly declare MIME types** to avoid content-sniffing
* **Explicitly specify UTF-8 encoding** on elements where possible


### CSS

* **Validate with W3C CSS3 checker** against latest CSS standards
* **No vendor prefixes** unless absolutely necessary; ensure parity between vendors
* **Two space indent** for all CSS stylesheets
* **One blank line between blocks** unless very closely linked
* **One selector per line** unless extremely short
* **Always terminate properties with ``;``** even if the last in the block
* **Use six-digit hex for colors** unless transparency needed
* **One space after ``:`` and before ``{``** except in pseudo-classes
* **K&R style brackets** for each block
* **Prefer ``em``/``rem`` to ``px``** where practicable


### Javascript

* **Follow existing code style** when it doubt
* **Conform to modern ES6 best practices** where possible
* **Four space indent** for new files
* **Spaces after commas** except between linebreaks
* **Spaces around binary operators** like PEP8
* **K&R style brackets** for each block
* **Use ``'`` for quotes**, except for HTML snippits
* **Include descriptive comments**, at least one per function
* **Maintain existing blank line hierarchy** between blocks
* **Use minified version** of external libraries


### Python

* **Python 2/3 "universal" code** until the Python 2 EOL date
* **PEP 8** style for Python code, with all recommendations treated as requirements unless noted
* **PEP 257** for all docstrings
* **79 characters** for line length
* **Check code with ``pylint``** (or another linter) before submitting to catch potential errors and bad practices


### Images

* **SVG, PNG or JPEG for all images**; no exotic or proprietary formats
* **SVG > PNG** when available for graphics and other vectorizable images
* **PNG > JPEG, except for photos** whenever possible
* **Size images appropriately** for the intended use; make use of responsive images when available
* **Run ``optipng -o7``** on all PNGs; use moderate quality for JPEGs
* **Alt text** should be always be provided describing the content of each image


### Fonts

* **Include TTF, WOFF and WOFF2** format files for each font as available
* **Deploy only WOFF2 > WOFF** if present
* **Subset fonts** if only a few characters are used


### Documentation

* **Github-Flavored Markdown** (GFM) for documentation like this one
* **Universal Markdown/reStructured Text syntax** where practicable, e.g. double backtick instead of single for code, ``*`` for bullets instead of ``-``, and ``*``/``**`` for italic/bold instead of ``_``/``__``.
* **No hard wrap** after a certain character value
* **Line break after sentences** (like this document)
* **3/2/1 lines before L2/3/4+ headings**, except for the first heading



## Roadmap

Nothing concrete at the moment, but a few ideas:

* Refactor large ``style.css`` into separate stylesheets for blog/pages, mainpage and both
* Refactor Javascript to use native ES6 instead of jQuery
* Add polyfill/better fallback for theme coloring

* Include per-services, team etc card to make the whole card a clickable link
* Implement specific functionality around blog categories and tags
* Make generic pages more sophisticated, and/or introduce additional page types



Thanks so much!
