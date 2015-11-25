---
layout: post
title: MathJax v2.3 now available
date: 2013-11-18 08:01:34.000000000 +01:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _cws_is_markdown: '2'
  _cws_is_markdown_gmt: '2013-11-18 16:01:34'
  _edit_last: '13'
  _rawhtml_settings: '0,0,0,0'
  dsq_thread_id: '1976620290'
author:
  login: pkra
  email: peter.krautzberger@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

After a successful [beta run](http://www.mathjax.org/mathjax-v2-3-beta-now-available/), we're happy to officially release MathJax v2.3.

MathJax v2.3 is available on the CDN, and for download from GitHub or via the download page at [docs.mathjax.org/](http://docs.mathjax.org/en/latest/installation.html).

Version 2.3 is available on the CDN at

> [http://cdn.mathjax.org/mathjax/2.3-latest/MathJax.js](http://cdn.mathjax.org/mathjax/2.3-latest/MathJax.js)

and **starting today** the files at the

> [http://cdn.mathjax.org/mathjax/latest/MathJax.js](http://cdn.mathjax.org/mathjax/latest/MathJax.js)

address will be switched over the v2.3; it will take 24h-48h for the changes to propagate out to the distributed cloud servers.

During the time that the files are making their way out to the CDN's servers, there may be a mixture of files in a browser cache, and so users may need to clear their cache and restart their browser in order to get a consistent version of the files.

If you are a page author and concerned about this, you can change (temporarily) to the `mathjax/2.3-latest` URL instead of `mathjax/latest` since that is a new address that will not have any cached older versions to worry about. You can switch back to `mathjax/latest` in a few days when the new version has migrated to all the locations in the cloud.

See [http://docs.mathjax.org/en/latest/whats-new-2.3.html](http://docs.mathjax.org/en/latest/whats-new-2.3.html) for details about the changes in v2.3, and some caveats about the effect of these changes on existing sites. We anticipate a smooth upgrade from v2.2 to v2.3, but as always, let us know on the [bug tracker](http://github.com/mathjax/mathjax/issues) if you experience problems with this new version of MathJax.

Thank you for your continued support.

The MathJax Team.

* * *

## What's New in MathJax v2.3

MathJax v2.3 includes a number of new features, as well a more than 40

important bug fixes.

## Features:

*   New webfonts. MathJax v2.3 adds new webfonts for `STIX`,

    `Asana  Math`, `Neo Euler`, `Gyre Pagella`, `Gyre Termes`, and

    `Latin Modern`.

*   Localization improvements. MathJax has been accepted into

    TranslateWiki.net. Thanks to the TWN community we could add 12

    complete and over 20 partial translations.

*   MathML improvements. MathJax’s “Show Math as” menu will now expose

    the MathML annotation features. There are also two new preview

    options for the MathML input mode: `mathml` (now the default) and

    `altimage` which will show the original MathML and an alternative

    image respectively.

*   Miscellaneous improvements. A new extension `MatchWebFonts` improves

    the interaction with the surrounding content. A new configuration

    method allows configurations by using a regular JavaScript variable

    `window.MathJax`.

*   MathJax is now available as a Bower package thanks to community

    contributions.

## TeX input:

*   Prevent the TeX pre-processor from rendering TeX in MathML

    annotation-xml. ([Issue &#35;484](https://github.com/mathjax/MathJax/issues/484))
*   Fix sizing issue in `cases` environment ([Issue &#35;485](https://github.com/mathjax/MathJax/issues/485))

## Fonts:

*   Fix block-letter capital I (U+2111) appearing as J in MathJax font

    ([Issue &#35;555](https://github.com/mathjax/MathJax/issues/555))
*   Fix issue with script mathvariant characters in IE ([Issue &#35;621](https://github.com/mathjax/MathJax/issues/621))

## MathML:

*   Improved workarounds for MathML output on WebKit ([Issue &#35;482](https://github.com/mathjax/MathJax/issues/482))
*   Handle empty `multiscript` nodes in Native MathML output ([Issue &#35;486](https://github.com/mathjax/MathJax/issues/486)
*   Replace non-standard MJX-arrow class by new menclose notation ([Issue &#35;481](https://github.com/mathjax/MathJax/issues/481))
*   Fix incorrect widths in Firefox MathML output ([Issue &#35;558](https://github.com/mathjax/MathJax/issues/558))
*   Fix display math not being centered in XHTML ([Issue &#35;650](https://github.com/mathjax/MathJax/issues/650))

## HTML-CSS/SVG output

*   Fix MathJax not rendering in Chrome when sessionStorage is disabled ([Issue &#35;584](https://github.com/mathjax/MathJax/issues/584))
*   Fix `\mathchoice` error with linebreaking in SVG output ([Issue &#35;604](https://github.com/mathjax/MathJax/issues/604))

## Interface:

*   Fix Double-Click zoom trigger ([Issue &#35;590](https://github.com/mathjax/MathJax/issues/590))

## Miscellaneous:

*   Localization: improved fallbacks for IETF tags ([Issue &#35;492](https://github.com/mathjax/MathJax/issues/492))
*   Localization: support RTL in messages ([Issue &#35;627](https://github.com/mathjax/MathJax/issues/627))
*   Improve PNG compression ([Issue &#35;44](https://github.com/mathjax/MathJax/issues/44))
*   Fix poor linebreaking of "flat" MathML ([Issue &#35;523](https://github.com/mathjax/MathJax/issues/523))
