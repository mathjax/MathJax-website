---
layout: post
title: MathJax v2.6 beta now available
date: 2015-09-22
categories:
- News
tags:
- mathml
status: publish
type: post
published: true
author:
  first_name: Peter
  last_name: Krautzberger
---

Today we are entering the public beta phase of MathJax v2.6. This release focused on two main features:

1. Completing the CommonHTML output, a faster HTML output that can be generated on both client and server.

2. Accessibility improvements in the form of
  * an extension to expose MathJax's internal MathML to screenreaders
  * making the MathJax Menu accessible.

The v2.6 release also includes over 30 bug fixes to increase the quality and stability of MathJax ([see below for details](#new-in-release)).

The beta is available via our CDN at [beta.mathjax.org/mathjax/latest/MathJax.js](https://beta.mathjax.org/mathjax/latest/MathJax.js) which you can load it in place of the version you are currently using. Alternatively, you can get a [ZIP archive](https://github.com/mathjax/MathJax/archive/2.6.0-beta.0.zip) or access the branch [on GitHub](https://github.com/mathjax/MathJax/tree/2.6.0-beta.0).

Please note the following.

### Changes to the default MathJax "TeX" fonts

We have updated our default MathJax "TeX" fonts to improve the CommonHTML output and simplify its layout process. If you have previously installed a copy of the MathJax TeX fonts to your local system, please update that copy to ensure correct rendering in the CommonHTML output.

You can check this using the embedded page below ([external link](http://codepen.io/mathjax/full/avZRzM)) which will detect whether you need to update installed MathJax "TeX" fonts installed.

<p data-height="268" data-theme-id="0" data-slug-hash="avZRzM" data-default-tab="result" data-user="mathjax" class='codepen'>See the Pen <a href='http://codepen.io/mathjax/pen/avZRzM/'>MathJax Font Check</a> by MathJax (<a href='http://codepen.io/mathjax'>@mathjax</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Note:** Other applications may have installed the MathJax "TeX" fonts for you.

**Note:** The changes to the MathJax "TeX" fonts are backward compatible to previous versions of MathJax so you can install them without worrying about sites using older MathJax versions. Of course you do not need to install the fonts as MathJax can automatically load webfonts instead.

### Changes to the combined configuration files

If you are using [a combined configuration](https://docs.mathjax.org/en/v2.6-latest/config-files.html), please note the following:

1. We have added several **new combined configuration files**. In particular, you can use the new CommonHTML output by chosing a combined configuration ending on `_CHTML`.

2. The new `AssitiveMML.js` extension is included in these configurations. If you want to de-activate it, add, e.g., the following to your page **before** `MathJax.js` is loaded.

      <script type="text/javascript">
        window.MathJax = {
          AssitiveMML: {disabled: true}
        };
      </script>

<br>


**Remember that this is still beta software**, so if you are not an experienced user, you may want to wait for the official 2.6 release. We do not recommend that you use the 2.6-beta version for production environments, but do encourage you to test your content with it.

If you are linking to <http://cdn.mathjax.org/mathjax/latest/MathJax.js>, note that at the point of the official release of v2.6, the address will begin to serve MathJax v2.6. You can also continue to use v2.5 by linking to <http://cdn.mathjax.org/mathjax/2.5-latest/MathJax.js> instead — and you can change to that version at any point (it is available now). Once the official v2.6 release is made, the v2.6-beta address will be removed from the CDN.

The official release of v2.6 should occur within the next three weeks, but we want you to be able to start to test out the v2.6 features now. Please report any bugs you find to the issue tracker at <https://github.com/mathjax/MathJax/issues>.

Thanks for your continuing interest in MathJax. We hope that this release makes your MathJax experience even better.

The MathJax Team.

* * * * *

## New in MathJax v2.6 {#new-in-release}

MathJax v2.6 includes a number of new features, as well a more than 30 important bug fixes. The following are some of the highlights.


## Features

*   _Improved CommonHTML output._ The CommonHTML output now provides the same layout quality and MathML support as the HTML-CSS and SVG output. It is on average 40% faster than the other outputs and the markup it produces are identical on all browsers and thus can also be pre-generated on the server via MathJax-node. The fast preview mechanism introduced in v2.5 continues to develop as a separate output as [PreviewHTML](http://docs.mathjax.org/en/v2.6-latest/options/PreviewHTML.html#configure-previewhtml) and the [fast-preview](http://docs.mathjax.org/en/v2.6-latest/options/fast-preview.html#configure-fast-preview) extension.
*   _Accessibility improvements._ We thank the AT community for their guidance, support, and feedback in our efforts towards making MathJax completely accessible to all users.
    *   _Screenreader compatibility._ The new `AssistiveMML` extension enables compatibility with most MathML-capable screenreaders by inserting visually-hidden MathML alongside MathJax’s visual output. See [screenreader support](http://docs.mathjax.org/en/v2.6-latest/misc/accessibility-features.html#screenreader-support) for details on the expected behavior as well as background on the limitations due to lack of web standards and browser/OS technology.
    *   _Accesssible UI._ We have improved the accessibility of the MathJax menu to enable assistive technology users to easily access its features, cf. [MathJax UI](http://docs.mathjax.org/en/v2.6-latest/misc/accessibility-features.html#mathjax-user-interface).
*   _Semi-slim MathJax repository for bower_. You can now use `bower install components/MathJax` for a fork of MathJax without PNG fonts. **Many thanks** to [@minrk](https://github.com/minrk) from the IPython/Jupyter team and to the team at [components](https://github.com/components)!
*   _Deprecated: MMLorHTML extension._ We have deprecated the `MMLorHTML` extension. For a detailed guide on configuring MathJax to choose different outputs on different browsers, please see [Automatic Selection of the Output Processor](http://docs.mathjax.org/en/v2.6-latest/output.html#automatic-output-switch) for more information.

Numerous bugs and issues have also been resolved; for a detailed listing please check the [release milestone](https://github.com/mathjax/MathJax/issues?q=milestone%3A%22MathJax+v2.6%22+is%3Aclosed).

## Interface

*   [#938](https://github.com/mathjax/MathJax/issues/938) Expose MathML for accessibility; cf. [screenreader support](http://docs.mathjax.org/en/v2.6-latest/misc/accessibility-features.html#screenreader-support).
*   [#939](https://github.com/mathjax/MathJax/issues/939) Make MathJax contextual menu properly accessible.
*   [#1088](https://github.com/mathjax/MathJax/issues/1088) MathJax Menu: drop PNG images in menu.
*   [#1210](https://github.com/mathjax/MathJax/issues/1210) Update `MathZoom.js`: global border-box support. **Special thanks** to [@CalebKester](https://github.com/CalebKester)

## HTML/SVG/nativeMML display

*   [#1095](https://github.com/mathjax/MathJax/issues/1095) HTML-CSS output: prevent collapse of table borders.
*   [#596](https://github.com/mathjax/MathJax/issues/596) SVG Output: Fix overlapping equation labels in SVG output
*   [#994](https://github.com/mathjax/MathJax/issues/994) SVG Output: Change default `blacker` setting to <cite>1</cite>.
*   [#995](https://github.com/mathjax/MathJax/issues/995) SVG output: fix baseline alignment issues.
*   [#995](https://github.com/mathjax/MathJax/issues/995) SVG output: fix failure to scale all but the first glyph in a fraction when `useFontCache=false`.
*   [#1233](https://github.com/mathjax/MathJax/issues/1233) SVG output: make maligngroup and malignmark produce no output.
*   [#1035](https://github.com/mathjax/MathJax/issues/1035) PreviewHTML output: fix fractions formatting in WebKit and IE.

## TeX emulation

*   [#567](https://github.com/mathjax/MathJax/issues/567) Add macro for `overparen` and `underparen` to provide stretchy arcs above/below
*   [#956](https://github.com/mathjax/MathJax/issues/956) Simplify the `mhchem` extension to use multiscripts, cf. #1072.
*   [#1028](https://github.com/mathjax/MathJax/issues/1028) Fix spacing in `\alignedat`.
*   [#1194](https://github.com/mathjax/MathJax/issues/1194) Fix problem where automatic numbering affects `\binom` and friends.
*   [#1199](https://github.com/mathjax/MathJax/issues/1199) Fix problem with dot delimiter not being recognized as a delimiter.
*   [#1224](https://github.com/mathjax/MathJax/issues/1224) Handle braces properly in text mode when looking for matching math delimiters.
*   [#1225](https://github.com/mathjax/MathJax/issues/1225) Fix `\operatorname` not ignoring `\limits` that follow immediately after.
*   [#1229](https://github.com/mathjax/MathJax/issues/1229) Fix wrong spacing of trailing binary operators.


## Asciimath

*   [asciimath/#31](https://github.com/asciimath/asciimathml/issues/31) Add support for `overparen`, `underparen` to produce `mover` and `munder` constructs.


## MathML

*   [#1072](https://github.com/mathjax/MathJax/issues/1072) Right-justify prescripts in `mmultiscript` elements (after clarification in MathML 3 editors’ draft); cf. #956.
*   [#1089](https://github.com/mathjax/MathJax/issues/1089) Fix `toMathML` from changing `<maligngroup>` to `<malign>`
*   [#1188](https://github.com/mathjax/MathJax/issues/1188) Fix `mmultiscripts` with odd number of post-scripts not rendering correctly.
*   [#1231](https://github.com/mathjax/MathJax/issues/1231) Fix `<math>` element not being treated as an `<mrow>` for embellished operator spacing.
*   [#1233](https://github.com/mathjax/MathJax/issues/1233) Make `<maligngroup>` and `<malignmark>` be self-closing in MathML input.
*   [#1238](https://github.com/mathjax/MathJax/issues/1238) Fix Content MathML extension not handling namespace prefixes.
*   [#1257](https://github.com/mathjax/MathJax/issues/1257) Improve `mml3.js`: better RTL support in HTML-CSS; improved IE/Edge compatibility.

## Fonts

*   [#928](https://github.com/mathjax/MathJax/issues/928) Add data for stretchy `U+2322 (FROWN)`, `U+2323 (SMILE)`, and also `U+2312 (ARC)` to be aliases for the top and bottom parentheses. This enables stretchy constructions; cf. also #567.
*   [#1211](https://github.com/mathjax/MathJax/issues/1211) Fix web font detection for Gyre-Pagella etc. in IE10+.
*   [#1251](https://github.com/mathjax/MathJax/issues/1251) Fix primes in STIX-web font being too small in SVG output.


## Localization

*   [#1248](https://github.com/mathjax/MathJax/issues/1248) Updated locales thanks to the contributors at Translatewiki.net; activate locales for Bulgarian, Sicilian, and Lithuanian.

## APIs

*   [#1216](https://github.com/mathjax/MathJax/issues/1216) Add debugging tips to console output.


## Misc.

*   [#1074](https://github.com/mathjax/MathJax/issues/1074) Fix regression in v2.5 regarding MathPlayer on IE9.
*   [#1036](https://github.com/mathjax/MathJax/issues/1036) Improve CDN rollover behavior.
*   [#1085](https://github.com/mathjax/MathJax/issues/1085) Fix detection of Windows Phone mobile IE.
*   [#1155](https://github.com/mathjax/MathJax/issues/1155) Work around websites using user agent filtering
*   [#1173](https://github.com/mathjax/MathJax/issues/1173) Avoid warning message in debug mode.
*   [#1208](https://github.com/mathjax/MathJax/issues/1208) Fix CHTML preview from setting chunking parameters even when disabled.
*   [#1214](https://github.com/mathjax/MathJax/issues/1214) semi-slim official MathJax repository for bower; use `bower install components/MathJax` for a copy without PNG fonts. Special thanks to [@minrk](https://github.com/minrk) from the IPython/Jupyter team and to the team at [components](https://github.com/components)!
*   [#1254](https://github.com/mathjax/MathJax/issues/1254) Improve examples in `/test`: add viewport meta tags, improve dynamic examples.
