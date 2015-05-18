---
layout: post
title: MathJax v2.5 now available
date: 2015-01-30
categories:
  - News
tags:
  - mathml
author:
  - first_name: Peter
  - last_name: Krautzberger
---


After a smooth [beta run](http://www.mathjax.org/mathjax-v2-5-beta-now-available/), we're happy to officially release MathJax v2.5.

MathJax v2.5 is available on the CDN, and for download from GitHub; see [the documentation for details](http://docs.mathjax.org/en/latest/installation.html#obtaining-mathjax-via-an-archive).

Version 2.5 is available on the CDN at

> [http://cdn.mathjax.org/mathjax/2.5-latest/MathJax.js](http://cdn.mathjax.org/mathjax/2.5-latest/MathJax.js)

and **starting today** the files at the

> [http://cdn.mathjax.org/mathjax/latest/MathJax.js](http://cdn.mathjax.org/mathjax/latest/MathJax.js)

address will be switched over the v2.5. If you are using the `mathjax/latest` address you might get a mixture of files in your browser cache, and so may need to clear your browser cache and for some browsers (e.g., Chrome) restart your browser in order to get a consistent version of all files.

If you are a page author and concerned about this, you can change (temporarily) to the `mathjax/2.5-latest` URL instead of `mathjax/latest` since that is a new address that will not have any cached older versions to worry about. You can switch back to `mathjax/latest` in a few days when the new version has migrated to all the locations in the cloud. If you want to keep using Mathjax v2.4 you can switch to `mathjax/2.4-latest`.

See [http://docs.mathjax.org/en/v2.5-latest/whats-new-2.5.html](http://docs.mathjax.org/en/v2.5-latest/whats-new-2.5.html) for details about the changes in v2.5. We anticipate a smooth upgrade from v2.4 to v2.5, but as always, let us know on the [bug tracker](http://github.com/mathjax/mathjax/issues) if you experience problems with this new version of MathJax.

**Note:** If you are using [a pre-defined configuration](http://docs.mathjax.org/en/latest/config-files.html), please note the new fast-preview mode is activated in these. If you want to de-activate it on your page, add the following to your page **before** `MathJax.js` is loaded.

      <script type="text/javascript">
        window.MathJax = {
          menuSettings: {CHTMLpreview: false}
        };
      </script>

<br>
As a user, you can deactivate the Fast Preview via the MathJax menu. Righ/Cmd-click any equation and go to `Math Settings -> Math Renderer -> Fast Preview`.


Thank you for your continued support.

The MathJax Team.


* * * * *

## New in MathJax v2.5 {#new-in-release}

MathJax v2.5 includes a number of new features, as well a more than 70 important bug fixes. The following are some of the highlights.


## Features

*   _Speed improvements._ The HTML-CSS output performance was improved by 30-40% (depending on content complexity, with higher gains in more complex content such as very long documents).
*   _New output for fast preview._ The new CommonHTML output provides a rough but 10x-faster rendering. The `CHTML-preview` extension will use this fast output as a preview mode for HTML-CSS or SVG output.
*   _Improved Content MathML support._ Content MathML is now fully supported via a new extension, in particular this allows customization of the conversion process.
*   _Improved elementary math support_ The experimental support for elementary math elements has been significantly improved special thanks to David Carlisle.
*   _NodeJS compatibility_. Enable the implementation of a NodeJS API (released as [MathJax-node](https://github.com/mathjax/MathJax-node)).

Numerous display bugs, line-breaking problems, and interface issues have been resolved; for a detailed listing please check the [release milestone](https://github.com/mathjax/MathJax/issues?milestone=2&amp;state=closed).


## Interface

*   [#834](https://github.com/mathjax/MathJax/issues/834) Fix incorrect line-width when zooming which can cause line-breaking problems.
*   [#918](https://github.com/mathjax/MathJax/issues/918) Fix zoom box size in NativeMML output.
*   [#835](https://github.com/mathjax/MathJax/issues/835) Fix zoom for equations extending beyond their bounding box.
*   [#893](https://github.com/mathjax/MathJax/issues/893) Fix outdated ARIA values for HTML-CSS and SVG output.
*   [#860](https://github.com/mathjax/MathJax/issues/860), [#502](https://github.com/mathjax/MathJax/issues/502) Preserve RDFa, microdata, aria labels, and other attributes in HTML-CSS and SVG output.
*   [#935](https://github.com/mathjax/MathJax/issues/935) Escape special characters in TeX annotations.
*   [#912](https://github.com/mathjax/MathJax/issues/912) Fix missing `mstyle` attributes in `toMathML` output.
*   [#971](https://github.com/mathjax/MathJax/issues/971) Fix lost attributes when `toMathML` is restarted.


## Line-breaking

*   [#949](https://github.com/mathjax/MathJax/issues/949) Fix processing error due to empty elements.

## HTML-CSS/SVG/nativeMML display

*   [#863](https://github.com/mathjax/MathJax/issues/863) Fix broken MathML preview in MathML pre-processor.
*   [#891](https://github.com/mathjax/MathJax/issues/891) Fix deprecated regexp affecting mtable alignment.
*   [#323](https://github.com/mathjax/MathJax/issues/323) Improve MathPlayer compatibility on Internet Explorer 10+.
*   [#826](https://github.com/mathjax/MathJax/issues/826) Scale content in fallback fonts.
*   [#898](https://github.com/mathjax/MathJax/issues/898) Fix invalid SVG output when using fallback characters.
*   [#800](https://github.com/mathjax/MathJax/issues/800) Fix misplaced background color for stretched mphantom elements in SVG output.
*   [#490](https://github.com/mathjax/MathJax/issues/490) Fix `\overline` issues in combination with text-style limits.
*   [#829](https://github.com/mathjax/MathJax/issues/829) Implement `\delimitershortfall`, `\delimiterfactor`.
*   [#775](https://github.com/mathjax/MathJax/issues/775) Fix lost text content in SVG output.
*   [#917](https://github.com/mathjax/MathJax/issues/) Fix cases of incorrect bounding boxes in HTML-CSS output.
*   [#807](https://github.com/mathjax/MathJax/issues/807) Fix clipping of table columns in HTML-CSS output.
*   [#804](https://github.com/mathjax/MathJax/issues/804) Fix cases of uneven subscripts.
*   [#944](https://github.com/mathjax/MathJax/issues/944) Fix rendering error when scaling-all-math of labeled equations.
*   [#930](https://github.com/mathjax/MathJax/issues/930) Fix SVG output failure when `<math>` element has inline styles with border or padding.
*   [#931](https://github.com/mathjax/MathJax/issues/931) Fix baseline alignment in Safari 6.2/7.1/8.0.
*   [#937](https://github.com/mathjax/MathJax/issues/937) Fix incorrect width in MathJax font data affecting underlining.
*   [#966](https://github.com/mathjax/MathJax/issues/966) Fix SVG output overlapping when using prefix notation.
*   [#993](https://github.com/mathjax/MathJax/issues/993) Add workaround for Native MathML in Gecko to re-enable `mlabeledtr` etc.
*   [#1002](https://github.com/mathjax/MathJax/issues/1002) Enable SVG output to inherit surrounding text color.

## TeX emulation

*   [#881](https://github.com/mathjax/MathJax/issues/881) Allow `\newenvironment` to process optional parameters.
*   [#889](https://github.com/mathjax/MathJax/issues/889) remove extra space around some parenthesis constructs.
*   [#856](https://github.com/mathjax/MathJax/issues/856) Recognize comma as decimal delimiter in units.
*   [#877](https://github.com/mathjax/MathJax/issues/877) Fix bug related to multiple accent having different width.
*   [#832](https://github.com/mathjax/MathJax/issues/832) Fix multline environment not being centered in HTML-CSS output.
*   [#776](https://github.com/mathjax/MathJax/issues/776) Fix stretchy delimiters of `binom` and `choose`.
*   [#900](https://github.com/mathjax/MathJax/issues/900) Fix `\buildrel` getting TeX class ORD instead of REL.
*   [#890](https://github.com/mathjax/MathJax/issues/890) Enable px as dimension in `\\[...]`.
*   [#901](https://github.com/mathjax/MathJax/issues/901) Allow `\limits` in more cases and add errors for some cases of multiple subscripts.
*   [#903](https://github.com/mathjax/MathJax/issues/903) Allow `\hfill` to set alignment in matrices and arrays (for old fashioned TeX layout).
*   [#902](https://github.com/mathjax/MathJax/issues/902) Convert `\eqalignno` and `\leqalignno` into `mlabeledtr`.
*   [#906](https://github.com/mathjax/MathJax/issues/906) Allow comma separated parameters in `\mmlToken`.
*   [#913](https://github.com/mathjax/MathJax/issues/913) Allow attributes in `\mmlToken` whose defaults are false or blank.
*   [#972](https://github.com/mathjax/MathJax/issues/972) Fix autoload of the `color` extension.
*   [#375](https://github.com/mathjax/MathJax/issues/475) Add `\{`, `\}`, and `\\` to macros working within `\text{}` etc.
*   [#969](https://github.com/mathjax/MathJax/issues/969) Fix incorrect spacing with some `\frac` constructs.
*   [#982](https://github.com/mathjax/MathJax/issues/982) Fix incorrect spacing in `aligned` environments.
*   [#1013](https://github.com/mathjax/MathJax/issues/1013) Fix processing error caused by `'` in commutative diagrams using `AMScd.js`.
*   [#1005](https://github.com/mathjax/MathJax/issues/1005) Add `wikipedia-texvc.js` extension.

## Asciimath

*   [#851](https://github.com/mathjax/MathJax/issues/851) Prevent leading space in quote from causing processing errors.
*   [#431](https://github.com/mathjax/MathJax/issues/431) Fix handling of special characters in exponents.
*   [#741](https://github.com/mathjax/MathJax/issues/741) Add underbrace macro.
*   [#857](https://github.com/mathjax/MathJax/issues/857) Update AsciiMathML to 2.2; changes include [improve entity handling](https://github.com/mathjax/asciimathml/issues/2), [add triangle macro](https://github.com/mathjax/asciimathml/issues/4), [map ast to asterisk](https://github.com/mathjax/asciimathml/issues/6), [allow input of row vectors](https://github.com/mathjax/asciimathml/issues/11), [allow lamda](https://github.com/mathjax/asciimathml/issues/12), [switch phi/varphi mapping](https://github.com/mathjax/asciimathml/issues/14), [add underbrace macro](https://github.com/mathjax/asciimathml/issues/18), [handle empty nodes better](https://github.com/mathjax/asciimathml/issues/24), [add vector norm macro](https://github.com/mathjax/asciimathml/issues/26), [improve `@` macro](https://github.com/mathjax/asciimathml/issues/27).


## MathML Handling

*   [#847](https://github.com/mathjax/MathJax/issues/847) Fix line-breaks in annotation elements.
*   [#805](https://github.com/mathjax/MathJax/issues/805) Prevent empty annotation elements from causing math processing errors.
*   [#769](https://github.com/mathjax/MathJax/issues/769) Update `indentshift` implementation to meet clarified MathML specification.
*   [#768](https://github.com/mathjax/MathJax/issues/768) Fix processing of percentage values for `indenshift`.
*   [#839](https://github.com/mathjax/MathJax/issues/839) Update inheritance of `displaystyle` in `mtable` to meet clarified MathML specification.
*   [#695](https://github.com/mathjax/MathJax/issues/695) Allow Content MathML converion to be customized.
*   [#964](https://github.com/mathjax/MathJax/issues/964) Move experimental support for elementary math and RTL to its own extension.

## Fonts

*   [#845](https://github.com/mathjax/MathJax/issues/845) Fix webfont bug in Safari 7.
*   [#950](https://github.com/mathjax/MathJax/issues/950) Fix webfont bug in IE 11.

## Localization

*   [#979](https://github.com/mathjax/MathJax/issues/979) Updated locales thanks to Translatewiki.net; activate locales for Scots and Southern Balochi.

## APIs

*   [#873](https://github.com/mathjax/MathJax/issues/873) Combine array of elements when typesetting.
*   [#693](https://github.com/mathjax/MathJax/issues/693) Add API to allow listeners to be cleared.

## Misc.

*   [#870](https://github.com/mathjax/MathJax/issues/870) Add Composer package information..
*   [#872](https://github.com/mathjax/MathJax/issues/872) Add small delay between input and output phase to prevent performance degredation.
*   [#1016](https://github.com/mathjax/MathJax/issues/1016) Fix bug related to `<script>` elements with namespace prefix, e.g., in xHTML.