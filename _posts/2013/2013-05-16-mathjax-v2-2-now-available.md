---
layout: post
title: MathJax v2.2 now available
date: 2013-05-16 22:25:15.000000000 +02:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '12'
  _rawhtml_settings: '0,0,0,0'
  _cws_is_markdown_gmt: '2013-05-17 05:23:08'
  _cws_is_markdown: '2'
  dsq_thread_id: '1293664402'
  _oembed_d699dbd1fe8470a562eacc36e785d3ea: "{{unknown}}"
author:
  login: PeterK
  email: info@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

After a successful [beta run](http://www.mathjax.org/mathjax-v2-2-beta-now-available/), we're happy to officially release MathJax v2.2.

MathJax v2.2 is available on the CDN, and for download from GitHub or via the download page at [docs.mathjax.org](http://docs.mathjax.org/en/latest/installation.html).

Version 2.2 is available on the CDN at

> [http://cdn.mathjax.org/mathjax/2.2-latest/MathJax.js](http://cdn.mathjax.org/mathjax/2.2-latest/MathJax.js)

and **starting today** the files at the

> [http://cdn.mathjax.org/mathjax/latest/MathJax.js](http://cdn.mathjax.org/mathjax/latest/MathJax.js)

address will be switched over the v2.2; it may take some time for them to propagate out to the distributed cloud servers.

During the time that the files are making their way out to the CDN's servers, there may be a mixture of files in a browser cache, and so users may need to clear their cache and restart their browser in order to get a consistent version of the files.

If you are a page author and concerned about this, you can change (temporarily) to the `mathjax/2.2-latest` URL instead of `mathjax/latest` since that is a new address that will not have any cached older versions to worry about. You can switch back to `mathjax/latest` after a day or two when the new version has migrated to all the locations in the cloud.

See [http://docs.mathjax.org/en/latest/whats-new-2.2.html](http://docs.mathjax.org/en/latest/whats-new-2.2.html) for details about the changes in v2.2, and some caveats about the effect of these changes on existing sites.

We anticipate a smooth upgrade from v2.1 to v2.2, but as always, let us know on the [bug tracker](http://github.com/mathjax/mathjax/issues) if you experience problems with this new version of MathJax.  Thank you for your continued support.

The MathJax Team.

* * *

## What's New in MathJax v2.2

MathJax v2.2 includes a number of new features, as well a more than 40

important bug fixes.

### Features:

*   Localization of MathJax user interface.  (German and French

    translations currently available in addition to English.)

*   Commutative diagrams via the `AMScd` extension.

*   New Safe-mode extension that allows you to restrict potentially

    dangerous features of MathJax when it is used in a shared

    environment (e.g., href to javascript, styles and classes, etc.)

*   Improve MathML rendering for `mfenced` and `mlabeldtr` elements in

    browsers that don't support them well.

*   Experimental Content MathML support.

### TeX input:

*   Avoid potential infinite loops in `\mathchoice` constructs.

    (Issue #373 https://github.com/mathjax/MathJax/issues/373)

*   Add error message when an evironment closes with unbalanced braces.

    (Issue #454 https://github.com/mathjax/MathJax/issues/454)

*   Allow spaces in the RGB, rgb, and greyscale color specifications.

    (Issue #446 &lt;https://github.com/mathjax/MathJax/issues/446)

*   Process `\$` in `\text` arguments.  (Issue #349)

*   Preserve spaces within `\verb` arguments.  (Issue #381 https://github.com/mathjax/MathJax/issues/381)

*   Make `\smallfrown` and `\smallsmile` come from the variant font so

    they have the correct size.  (Issue #436 https://github.com/mathjax/MathJax/issues/436)

*   Make the input TeX jax generate mrow plus mo elements rather than

    mfenced elements (for better compatibility with native MathML

    implementations).

*   Make `\big` and its relatives use script or scriptscript fonts

    (although size is still absolute, as it is in TeX) so that it

    balances the text weight in scripts.  (Issue #350 https://github.com/mathjax/MathJax/issues/350)

*   Convert true and false attributes to booleans in `\mmlToken`.

    (Issue #451 https://github.com/mathjax/MathJax/issues/451)

### AsciiMath:

*   Rename AsciiMath config option from `decimal` to `decimalsign`.

    (Issue #384 https://github.com/mathjax/MathJax/issues/384)

### Fonts:

*   Add Greek Delta to SVG fonts. (Issue #347 https://github.com/mathjax/MathJax/issues/347)

*   Fix monospace space character to be the same width as the other

    monospace characters.  (Issue #380 https://github.com/mathjax/MathJax/issues/380)

*   Better handling of unknown or invalid values for mathvariant or

    values not supported by generic fonts.

### MathML:

*   Handle empty child nodes better.

*   Improved MathML rendering for `mfenced` and `mlabeldtr` elements.

*   Ignore `linebreak` attribute on `mspace` when dimensional attributes are

    set. (Issue #388 https://github.com/mathjax/MathJax/issues/388)

*   Implement `rowspacing`/`columnspacing` for `mtable` in native MathML

    output in Firefox using cell padding.

### HTML-CSS/SVG output

*   Allow `\color` to override link color in SVG output.  (Issue #427

    https://github.com/mathjax/MathJax/issues/427)

*   Add min-width to displayed equations with labels so that they cause

    their containers to have non-zero width (like when they are in a

    table cell or an absolutlye positioned element).  (Issue #428 https://github.com/mathjax/MathJax/issues/428)

*   Fix a processing error with elements that contain hyperlinks.

    (Issue #364 https://github.com/mathjax/MathJax/issues/364)

*   Try to isolate MathJax from CSS transitions.  (Issue #449 https://github.com/mathjax/MathJax/issues/449)

*   Go back to using em's (rounded to nearest pixel) for Chrome.

    Rounding makes the placement work more reliably, while still being

    in relative units.  (Issue #443 https://github.com/mathjax/MathJax/issues/443)

*   Prevent error when math contains characters outside of the MathJax

    fonts.  (Issue #441 https://github.com/mathjax/MathJax/issues/441)

*   Make final math size be in relative units so that it prints even if

    print media has a different font size.  (Issue #386 https://github.com/mathjax/MathJax/issues/386)

*   Don't scale line thickness for `menclose` elements (so lines won't

    disapear in scripts).  (Issue #414 https://github.com/mathjax/MathJax/issues/414)

*   Fix `fontdata.js` to allow it to be included in combined configuration

    files.  (Issue #413 &lt;https://github.com/mathjax/MathJax/issues/413)

*   Makes math-based tooltips be spaced properly when rendered.  (Issue  #412 https://github.com/mathjax/MathJax/issues/412)

*   Fix Math Processing Error when `&ApplyFunction`; is used without preceding content.  (Issue #410 https://github.com/mathjax/MathJax/issues/410)

*   Fix a problem using an empty table as a super- or subscript. (Issue #392 https://github.com/mathjax/MathJax/issues/392)

*   Handle the case where selection in maction is invalid or out of

    range.  (Issue #365 https://github.com/mathjax/MathJax/issues/365)

*   Add a pixel extra around the SVG output to accommodate antialiasing

    pixels.  (Issue #383 https://github.com/mathjax/MathJax/issues/383)

*   Fix Math Processing Error for `msubsup`/`msub`/`msup` elements.

*   Limit the number of repetition to build stretchy chars in HTML-CSS.

    (Issue #366 https://github.com/mathjax/MathJax/issues/366)

*   Fix Math Processing Error in `mmultiscripts`/`menclose`. (Issue

    362 https://github.com/mathjax/MathJax/issues/62 )

### Interface:

*   Make zoom work properly with expressions that have full width (e.g.,

    tagged equations).

*   Handle zooming when it is inside a scrollable element when it is not

    the main body element.  (Issue #435 https://github.com/mathjax/MathJax/issues/435)

*   Update math processing errors to include original format and actual

    error message in the "Show Math As" menu.  (Issue #450 &lt;https://github.com/mathjax/MathJax/issues/450)

*   Add a Help dialog box (rather than link to mathjax.org).

*   Remove the v1.0 configuration warning.  (Issue #445 https://github.com/mathjax/MathJax/issues/445)

*   Trap errors while saving cookies (and go on silently).  (Issue #374 https://github.com/mathjax/MathJax/issues/374)

*   Fix typo in IE warning message.  (Issue #397 https://github.com/mathjax/MathJax/issues/397)

*   Use UA string sniffing for identifying Firefox and handle detecting

    mobile versions better.

*   Make MathML source show non-BMP characters properly.  (Issue #361 https://github.com/mathjax/MathJax/issues/361)

*   Make tool tips appear above zoom boxes.  (Issue #351 https://github.com/mathjax/MathJax/issues/351)

### Miscellaneous:

*   Allow preview for preprocessors to be just a plain string (rather

    than requiring `[string]`).

*   Remap back-tick to back-quote.  (Issue #402 https://github.com/mathjax/MathJax/issues/402)

*   Handle script tags in `HTML.Element()` so they work in IE.

    (Issue #342 https://github.com/mathjax/MathJax/issues/342)

*   Add the `MathJax_Preview` class to the `ignoreClass` list so that

    `tex2jax` and `asciimath2jax` won't process previews accidentally.

    (Issue #378 https://github.com/mathjax/MathJax/issues/378)

*   Fix processing errors with various table and menclose attributes.

    (Issue #367 https://github.com/mathjax/MathJax/issues/367)

*   Use `hasOwnProperty()` when checking file specification objects

    (prevents problems when `Object.prototype` has been modified).

    (Issue #352 https://github.com/mathjax/MathJax/issues/352)
