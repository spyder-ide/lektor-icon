# Lektor-Icon Theme

*Copyright © 2016-2018 Lektor-Icon Contributors and others (see AUTHORS.txt)*

This a version of the [FreeHTML5](https://freehtml5.co/) ["Icon" theme](https://freehtml5.co/](https://freehtml5.co/icon-free-website-template-using-bootstrap/) for Lektor by [Daniel Althviz](https://dalthviz.github.io/) and the [Spyder](https://www.spyder-ide.org/) organization, originally based on the [Hugo port](https://github.com/SteveLane/hugo-icon) by Steve Lane.
The core template is a single-page, responsive layout, with sections for describing your organization and its mission, services, a gallery, your team and how visitors can download your software or donate to your cause.
Also features additions including a built-in blog, generic page template, custom error page, common navbar, Gitter, Disqus and OpenCollective integration, heavy customizability, numerous fixes and improvements, and re-written for speed, extensibility, responsiveness and standards conformance.


## Installation

See the [Lektor theme docs](https://www.getlektor.com/docs/themes/).
We recommend installing Lektor-Icon as a Git submodule, as we often update and improve it from time to time.


## Browser Support

This theme has been tested for full functionality and consistent layout across late-2018 of the "big three" modern desktop browsers, Firefox, Chrome and Edge, as well as the legacy Internet Explorer 11.
Aside from a modest number of progressive enhancements, it should render fully correctly in desktop and mobile versions of Chrome (and Blink-based Opera versions) Firefox, Edge and Safari from at least 2015-onwards, Android browser >4.4 and onwards as well as Internet Explorer 11.
It should degrade relatively gracefully with all core functionality and layout intact on Internet Explorer 10, Android browser 4.4, earlier versions of Edge and 2012-2013+ releases of Firefox, Chrome and Safari.


## Technical Notes

Most images, except for static assets like the site's logo and favicon, are automatically resized in HTML or CSS for optimal display and efficiency on a variety of platforms.
Browsers that don't support responsive images will gracefully degrade to a reasonable default image (generally sized for 1080p desktops and larger non-Retina mobile devices).
Therefore, there is no harm in providing the highest reasonable resolution available for each image (nominally ~3840 px width for full-page backgrounds, ~1280px for other images) and the theme will automatically resize the images and, in many cases, send a version specifically optimized for the reader's screen size.

Lektor-Icon has been updated with the latest (as of November 2018) releases of jQuery (3.3.1) and all other included libraries/plugins, with some additional manual patches applied to fix deprecations and other Javascript warnings and errors.
The theme originally relied on Bootstrap 3.3.5 along with a number of other major third party stylesheets, JavaScript libraries and fonts but that is no longer the case, the JS is no longer used and the relatively few CSS styles utilized were inlined into the main stylesheet.
Although destined for relatively low-risk static site applications, the remaining libraries have been checked for unpatched vulnerabilities and considerable security hardening of the headers, links and elements have been done.
Potentially burdensome restrictions have been been avoided by default, while allowing further user configuration of the CSP and other headers through the theme options.


## Credits

The original [plain HTML5 template](https://freehtml5.co/](https://freehtml5.co/icon-free-website-template-using-bootstrap/) which was the basis for Hugo-Icon, and in turn Lektor-Icon was created by [FreeHTML5.co](https://freehtml5.co/) and released under the [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) license.
Attribution is built into the rendered theme's common footer, so please retain it, as well as this credits section in a visible place in the source code (like here in the README) and the proper legal notices in the LICENSE.txt and NOTICE.txt files.

The [Hugo port](https://github.com/SteveLane/hugo-icon) of the theme, the source for this Lektor version, was created by [Steve Lane](https://gtown-ds.netlify.com/), with the modifications released under the [MIT (Expat) License](https://github.com/SteveLane/hugo-icon/blob/master/LICENSE.md).

This Lektor port was created by [Daniel Althviz](https://dalthviz.github.io/), and maintained and further developed by the [Spyder organization](https://github.com/spyder-ide/), and also distributed under the [MIT license](https://github.com/spyder-ide/lektor-icon/blob/master/LICENSE.txt).
It is used for the [official website](https://www.spyder-ide.org/) of Spyder, the Scientific Python Development Environment.

## Changelog

A changelog for this theme since the initial port to Hugo by @SteveLane is [here](https://github.com/spyder-ide/lektor-icon/blob/master/changelog.md); if you fork this theme and make changes, please list them.
