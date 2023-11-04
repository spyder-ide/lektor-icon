# Lektor-Icon Demo Website

*Copyright © 2016- Lektor-Icon Contributors and others (see [AUTHORS.txt](https://github.com/spyder-ide/lektor-icon/blob/master/AUTHORS.txt))*

![Screenshot of Lektor-Icon screenshot section](../images/mainpage-screenshots.png)

This is the demo site for Lektor-Icon, a [Lektor](https://www.getlektor.com) theme from the [Spyder](https:///www.spyder-ide.org) development team which includes a single-page, responsive layout with many flexible flowblock sections, a full-featured blog, customizable page, author and error templates and more.
Aside from demonstrating the theme's features and capabilities, the site itself is more than just an empty placeholder; also serves as documentation and a tutorial on using the theme, with a large amount of (hopefully) helpful information included.
We encourage you to use it as a starting point for your own project, as a quicker alternative to creating the basic ``content`` directory structure from scratch, though do mind the license if you re-use any of the stock text/images (see below).

**See the [main README](https://github.com/spyder-ide/lektor-icon/blob/master/README.md) for more details about using the theme itself.**



## Usage

You can view it live on the web, built by Travis CI in real-time from the latest version of the theme, at the link in the repo description, or build it locally by cloning the repo ``lektor-icon`` repo and running ``lektor server`` in the ``example-site`` directory (ensure you're using a version of Lektor >=3.1 for theme support).
The demo site is designed to work without the need for any plugins by default, although it includes built-in support for ``lektor-atom`` for RSS feeds and ``lektor-disqus-comments`` for blog comments if you enable them.
The inclusion of the theme itself is done via a symlink back to the root of the repo; Git should handle this in a platform-agnostic manner so the build should work even on Windows systems that have symlinks disabled (unless the recursive nature of the symlink causes problems on your machine), but the theme will be implemented as a copy rather than a symlink so changes you make in the main theme will not sync to the page, and vice versa.
If problems do arise trying to copy the symlink, either enable symlinks on your machine (with a recent version of Git for Windows), or just copy the repo root to the ``themes`` directory temporarily.



## License

The theme (code) as a whole is distributed under the [MIT (Expat) license](https://opensource.org/licenses/MIT), and certain portions are also originally licensed [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) (CC-BY-3.0), along with certain other third-party external assets included under other permissive licenses.
You're covered and don't need to do anything else so long as the fine print in the footer is displayed, and a copy of the ``LICENSE.txt`` is preserved in the theme repo; if you don't modify the theme itself both conditions will always be true.
For all the gory legal details, see the [LICENSE.txt](https://github.com/spyder-ide/lektor-icon/blob/master/LICENSE.txt) and [NOTICE.txt](https://github.com/spyder-ide/lektor-icon/blob/master/NOTICE.txt) in the root of the theme repository.

The contents of this directory (i.e. the example site) is released under the [Creative Commons Attribution Share-Alike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/)  (CC-BY-SA 4.0) license, meaning any re-use of the images or significant portions of the text (a few words here and there, or stock idioms/phrases commonly found on such sites are fine) in the final published product must comply with the provisions of that license as well.
Namely, this would require you to release the full content of your site under the provisions of the CC-BY-SA 4.0 license as well (along with providing us proper credit, which again the theme itself already does).
To be clear, we expressly consider using this example site as a template to build your own, replacing any images and (non-structural/required) text with your own before release, to *not* qualify as a derivative work, and thus *not* invoke any of the terms of that license (the theme's license(s) still apply, of course, but you're already covered automatically just by using the theme).
