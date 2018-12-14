# Lektor-Icon Theme

*Copyright © 2016-2018 Lektor-Icon Contributors and others (see AUTHORS.txt)*

This a version of the [FreeHTML5](https://freehtml5.co/) ["Icon" theme](https://freehtml5.co/](https://freehtml5.co/icon-free-website-template-using-bootstrap/) for Lektor by [Daniel Althviz](https://dalthviz.github.io/) and the [Spyder](https://www.spyder-ide.org/) organization, originally based on the [Hugo port](https://github.com/SteveLane/hugo-icon) by Steve Lane.
The core template is a single-page, responsive layout, with sections for describing your organization and its mission, services, a gallery, your team and how visitors can download your software or donate to your cause.
Also features additions including a built-in blog, generic page template, custom error page, common navbar, Gitter, Disqus, RSS/Atom and OpenCollective integration, heavy customizability, numerous fixes and improvements, and re-written for speed, extensibility, responsiveness and conformance.
The theme is designed to be more desktop and mobile-friendly, and designed and tested to smoothly adapt to a wide variety of viewport sizes from well below 480px all the way to 4K, and closely follows modern web standards while still offering compatibility with a wide range of modern and legacy browsers.



## Installation

See the [Lektor theme docs](https://www.getlektor.com/docs/themes/).
We recommend installing Lektor-Icon as a Git submodule, as we often update and improve it from time to time.
The theme should support Lektor versions 3.1.0 and later like any other, but we recommend Lektor 3.1.2 for the best results since it has been most extensively tested with that version, and we plan to update it with the responsive image improvements in the next version of Lektor when those become available.

No plugins are required with the default settings, but enabling support for Disqus comments and a RSS/Atom feed for the blog naturally demands the inclusion of those appropriate package names in the ``[packages]`` section of your ``.lektorproject`` file.
The theme doesn't depend on any ``.lektorproject`` settings aside from its own ``[theme_settings]`` configuration to function properly, and rather uses its own where needed, so you are free to keep its configuration variables fully separate from any you may make use of.



## Optional Feature Configuration

Lektor-Icon includes a number of features and integrations that can be optionally enabled if you so desire, that each require a bit of minimal configuration:


### Gitter Chat Sidebar

[Gitter](https://gitter.im/) provides free public and private chatrooms for open-source projects hosted on public repositories, and the Lektor-Icon theme includes an optional button that activates a slide-open chat panel that users of your site can use to ask questions, give feedback, and otherwise interact with you and your organization.
Configuration on this one is simple: All you need to do is enter the name/path of your Gitter room (i.e. the part that appears after ``https://gitter.im/`` in its URL) in the ``.lektorproject [theme_settings]`` and you should see the chat button appear throughout your site.


### RSS/Atom Feed for Blog Posts

RSS/Atom feeds, while less common then they used to be, are still sometimes desired by website owners and blog aggregators (e.g. the various *Planet sites) for reading and collating content. Accordingly, Lektor-Icon has support for it as part of its blog template.
To enable it, you'll want to set ``atom_enable`` to ``true``/``yes`` in the ``[theme_settings]``, add ``lektor-atom = 0.3`` under ``[packages]`` there, and set ``url_style = absolute`` and ``url = https://www.example.com`` under the ``[project]`` section so the feed URL works.
You'll also need to set up a ``configs/atom.ini`` configuration file, with the content

```ini
[main]
name = Name Your Feed
source_path = /blog
```

where ``/blog`` is the path to your blog, and set the ``--no-prune`` flag for ``lektor build`` so your ``feed.xml`` file is not removed.


### Disqus Blog Comments

[Disqus](https://disqus.com/) is a user-interaction platform that can be embedded in websites to allow users to comment on articles and blog posts, and its a built-in option for Lektor-Icon's blog.
To enable it, you need to first create your free (gratis) Disqus community at [Disqus Engage](https://publishers.disqus.com/engage), and register your community name.
Then, you'll need to create a new file under ``configs/disqus-comments.ini`` with ``shortname = YOUR_DISQUS_SHORTNAME`` as the content, include the shortname under ``disqus_name`` in the ``[theme_settings]`` in your ``.lektorproject`` (to enable it in the theme and allow Disqus through CSP), and add ``lektor-disqus-comments = 0.2`` under ``[packages]`` there as well.
Finally, you can either enable comments by default for all posts posts for the blog by setting the ``allow_comments_default`` field to ``yes`` in the Blog configuration page, or you can enable/disable comments for individual blogs with the ``allow_comments`` field on each one.
Check out the [Disqus Comments](https://www.getlektor.com/docs/guides/disqus/) tutorial in the Lektor docs to learn more.



## Link Organization and Navigation

The main navbar contains three distinct categories of links, two of which are present on every page, and each of which are controlled and ordered through different methods.
All of these, when present, are found both stickied at the top of the screen with the standard desktop/widescreen layout, and listed in the sidebar under the "hamburger" menu in the mobile/portrait layout.


### Page Content Links

First, from the left, on the single-page layout only, are the section links automatically generated for any top-level flowblock included on the page, in the order present on the page with a user-customizable display title and section identifier allowing for copying and pasting; when clicked, they smoothly scroll the browser to the named section.
You can control the link text, as well as whether it appears it all, on a per-section/flowblock basis using the ``nav_link`` field.
Optionally, a link back to the hero image ("Home") can also be included.
Obviously, these are not present on non-single-page layouts, such as the blog or individual pages.
However, if enabled (see above), the RSS link appears here on the blog pages.


### Subpage Links

Second, present on every page, are the links automatically generated to top-level subpages of the index page meeting certain criteria.
Specifically, for this section the template searches the root of the content directory of the site for any top-level directories with content that is both discoverable (i.e. it has the ``_discoverable`` field set to ``yes``, or is discoverable by default), and has a ``sort_key`` set, and sorts them from left to right by ascending ``sort_key``.
Currently, models with these fields include the blog, as well as any based off the individual page model, except for ``404.html`` (for obvious reasons).
The displayed link title for each is the ``short_title`` field of the page (also used for the page tab title) if present, and otherwise a "prettified" version of the page's filename (converted to title case, with path characters removed and underscores/hyphens replaced with spaces) is employed.


### Custom Links

Finally, you can add your own custom internal or external links (e.g. to a subdomain with your project's documentation, generated by a different CMS, or to a site hosted on another platform like Github, ReadTheDocs and the like) to the theme options, which will be displayed in the order you list them in, and with the link titles you choose; see the Theme Settings section for more on configuring them.
These will wrap with the automatically subpage links, and be included on every page. At present, due to the relatively "flat" nature of sites typically built with this theme, there are not currently built-in facilities for automatically including the links of child pages in a context-dependent manner, but that would be relatively straightforward to add if sufficient interest exists.



## Technical Notes

### Responsive Image Handling

Most images, except for static assets like the site's logo and favicon, are automatically resized in HTML or CSS for optimal display and efficiency on a variety of platforms.
Browsers that don't support responsive images will gracefully degrade to a reasonable default image (generally sized for 1080p desktops and larger non-Retina mobile devices).
Therefore, there is no harm in providing the highest reasonable resolution available for each image (nominally ~3840 px width for full-page backgrounds, ~1280px for other images) and the theme will automatically resize the images and, in many cases, send a version specifically optimized for the reader's screen size.


### Accent Color Theming

You can also configure the "pipe" color, which is used on the pipe separators as well as the RSS button (if enabled) and is suggested to be a lighter variation of the primary accent color (since it will be heavily used in the footer, with a relatively dark background).
By default, the former is set to "Spyder Red" (``#EE1C24``), and the latter is the lighter red ``#FF4C52``, but you can set them to anything you want.

**Important Note:** Since Internet Explorer 11 (along with Edge <15, Safari <9.1, iOS <9.3 and Android browser <= 4.4, plus pre-2014 Firefox and pre-2016 Chrome and Opera) do not support CSS variables, which is how this feature is implemented, it will fall back to the default color for each.
Therefore, users of your site running legacy browsers will see the various themed accent elements in that default color rather than your custom one, if you've set one up.
As there is no straightforward way to implement this without CSS variables, modifying the theme for each color or tons of unmaintainable inline styles, you have a few choices to work around this:

* Use the default accent color (great if it fits your site, but obviously limits your creative flexibility).
* Accept that your users remaining on IE11 and other legacy browsers will see your site with the default accent color, and advise they upgrade to a modern browser (IE market share is now <3% globally and continues to drop, so this will eventually become the preferred approach).
* Do a find and replace in ``style.css`` for the above two colors, and commit your changes to a modified branch of this theme (relatively quick and straightforward, but must be re-applied if you update to a newer version of this theme).
* Include rules in your custom stylesheet (which you can set in ``[theme_settings]``) to replace each color on our stylesheet with your hardcoded preferred one (potentially a lot of work and could cause style bugs if not done correctly, but doesn't require modifying the theme itself and thus re-applying your changes on pulling a fresh version).


### Browser Compatibility

This theme has been tested for full functionality and consistent layout across late-2018 official releases of the "big four" modern desktop browsers, Firefox, Chrome, and Edge, as well as the legacy Internet Explorer 11 (with the aforementioned custom accent color exception).
Aside from a modest number of progressive enhancements (and the custom accent color), the layout, styles and functionality should render identically or near-identically in desktop and mobile versions of Chrome, Opera, and Firefox from at least 2015-onwards, as well as Safari 9+, any version of Edge, iOS 9.3+, Android browser >4.4, and the aforementioned IE11.
It should degrade relatively gracefully (if at all) with all core functionality and layout intact on 2013+ releases of Firefox, Chrome and Opera, along with iOS 9.x and Android browser 4.4 (amounting to over >95-98% of all users), although without real-world testing this is by no means guaranteed, and users should be encouraged to upgrade to a modern version of one of the aforementioned browsers.
The primary blocker for browsers older than this is flexbox support, which several elements rely upon for fully correct layout.


### Library Versions and Security

Lektor-Icon has been updated with the latest (as of December 2018) releases of jQuery (3.3.1) and all other included libraries/plugins, with some additional manual patches applied to fix deprecations and other Javascript warnings and errors.
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

A [changelog](https://github.com/spyder-ide/lektor-icon/blob/master/changelog.md) for this theme lists the major modifications and improvements since the initial port to Hugo by @SteveLane; if you fork this theme and make changes, please list them.
