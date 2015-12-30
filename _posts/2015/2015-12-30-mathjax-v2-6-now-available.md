---
layout: post
title: MathJax v2.6 now available
date: 2015-12-30
categories:
- News
author:
  first_name: Peter
  last_name: Krautzberger
---

After a smooth [beta run](http://www.mathjax.org/mathjax-v2-6-beta-now-available/), we're happy to officially release MathJax v2.6. This release focused on two main features:

1. Completing the CommonHTML output, a faster HTML output that can be generated on both client and server.

2. Accessibility improvements in the form of
  * an extension to expose MathJax's internal MathML to screenreaders
  * making the MathJax Menu accessible.

The v2.6 release also includes over 30 bug fixes to increase the quality and stability of MathJax ([see below for details](#new-in-release)).

MathJax v2.6 is available on the CDN, and for download from GitHub; see [the documentation for details](http://docs.mathjax.org/en/latest/installation.html#obtaining-mathjax-via-an-archive).

Version 2.6 is available on the CDN at

> [http://cdn.mathjax.org/mathjax/2.6-latest/MathJax.js](http://cdn.mathjax.org/mathjax/2.6-latest/MathJax.js)

and **starting today** the files at the

> [http://cdn.mathjax.org/mathjax/latest/MathJax.js](http://cdn.mathjax.org/mathjax/latest/MathJax.js)

address will be switched over the v2.6. If you are using the `mathjax/latest` address you might get a mixture of files in your browser cache, and so may need to clear your browser cache and for some browsers (e.g., Chrome) restart your browser in order to get a consistent version of all files.

If you are a page author and concerned about this, you can change (temporarily) to the `mathjax/2.6-latest` URL instead of `mathjax/latest` since that is a new address that will not have any cached older versions to worry about. You can switch back to `mathjax/latest` in a few days when the new version has migrated to all the locations in the cloud. If you want to keep using Mathjax v2.5 you can switch to `mathjax/2.5-latest`.

See [http://docs.mathjax.org/en/v2.6-latest/whats-new-2.6.html](http://docs.mathjax.org/en/v2.6-latest/whats-new-2.6.html) for details about the changes in v2.6. We anticipate a smooth upgrade from v2.5 to v2.6, but as always, let us know on the [bug tracker](http://github.com/mathjax/mathjax/issues) if you experience problems with this new version of MathJax.


### Changes to the default MathJax "TeX" fonts

We have updated our default MathJax "TeX" fonts to improve the CommonHTML output and simplify its layout process. If you have previously installed a copy of the MathJax TeX fonts to your local system, please update that copy to ensure correct rendering in the CommonHTML output.

You can check this using the embedded page below ([external link](http://codepen.io/mathjax/full/avZRzM)) which will detect whether you need to update installed MathJax "TeX" fonts installed.

<p data-height="268" data-theme-id="0" data-slug-hash="avZRzM" data-default-tab="result" data-user="mathjax" class='codepen'>See the Pen <a href='http://codepen.io/mathjax/pen/avZRzM/'>MathJax Font Check</a> by MathJax (<a href='http://codepen.io/mathjax'>@mathjax</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Note:** Other applications may have installed the MathJax "TeX" fonts for you.

**Note:** The changes to the MathJax "TeX" fonts are backward compatible to previous versions of MathJax so you can install them without worrying about sites using older MathJax versions. Of course you do not need to install the fonts as MathJax can automatically load webfonts instead.

### Changes to the combined configuration files

If you are using [a combined configuration](https://docs.mathjax.org/en/v2.6-latest/config-files.html), please note the following:

1. We have added several **new combined configuration files**. In particular, you can use the new CommonHTML output by choosing a combined configuration ending on `_CHTML`.

2. The new `AssitiveMML.js` extension is included in these configurations. If you want to de-activate it, add, e.g., the following to your page **before** `MathJax.js` is loaded.

      <script type="text/javascript">
        window.MathJax = {
          AssitiveMML: {disabled: true}
        };
      </script>

<br>

Thank you for your continued support.

The MathJax Team.


* * * * *

## New in MathJax v2.6 {#new-in-release}

MathJax v2.6 includes a number of new features, as well a more than 30 important bug fixes. The following are some of the highlights.


### Features

-   *Improved CommonHTML output.* The CommonHTML output now provides the
    same layout quality and MathML support as the HTML-CSS and SVG
    output. It is on average 40% faster than the other outputs and the
    markup it produces are identical on all browsers and thus can also
    be pre-generated on the server via MathJax-node. The fast preview
    mechanism introduced in v2.5 continues to develop as a separate
    output as PreviewHTML \<configure-PreviewHTML\> and the
    fast-preview \<configure-fast-preview\> extension.
-   *Accessibility improvements.* We thank the AT community for their
    guidance, support, and feedback in our efforts towards making
    MathJax completely accessible to all users.

    -   *Screenreader compatibility.* The new `AssistiveMML` extension
        enables compatibility with most MathML-capable screenreaders by
        inserting visually-hidden MathML alongside MathJax's visual
        output. See screenreader support \<screenreader-support\> for
        details on the expected behavior as well as background on the
        limitations due to lack of web standards and browser/OS
        technology.

    \* *Accesssible UI.* We have improved the accessibility of the
    MathJax menu to enable assistive technology users to easily access
    its features, cf. MathJax UI \<mathjax-ui-a11y\>.
-   *PlainSource Output.* The new PlainSource output will revert the
    rendering back to the input format; in the case of MathML, the
    output will prefer TeX and AsciiMath from `<annotation-xml>`
    elements. This helps with accessibility and copy&paste of document
    fragments.
-   *Semi-slim MathJax repository for bower*. You can now use
    `bower install components/MathJax` to install a fork of MathJax
    without PNG fonts. **Many thanks** to
    [@minrk](https://github.com/minrk) from the IPython/Jupyter team and
    to the team at [components](https://github.com/components)!
-   *MathJax via npm*. You can now use `npm install mathjax` to install
    a copy of MathJax without PNG fonts.
-   *Deprecated: MMLorHTML extension.* We have deprecated the
    `MMLorHTML` extension. For a detailed guide on configuring MathJax
    to choose different outputs on different browsers, please see
    Automatic Selection of the Output Processor \<automatic-output-switch\>
    for more information.

Numerous bugs and issues have also been resolved; for a detailed listing
please check the [release
milestone](https://github.com/mathjax/MathJax/issues?q=milestone%3A%22MathJax+v2.6%22+is%3Aclosed).

#### Interface

-   [\#938](https://github.com/mathjax/MathJax/issues/938) Expose MathML
    for accessibility; cf.
    screenreader support \<screenreader-support\>.
-   [\#939](https://github.com/mathjax/MathJax/issues/939) Make MathJax
    contextual menu properly accessible.
-   [\#1088](https://github.com/mathjax/MathJax/issues/1088) MathJax
    Menu: drop PNG images in menu.
-   [\#1210](https://github.com/mathjax/MathJax/issues/1210) Update
    `MathZoom.js`: global border-box support. **Special thanks** to
    [@CalebKester](https://github.com/CalebKester)
-   [\#1273](https://github.com/mathjax/MathJax/issues/1273) Improve
    handling of hash in URL.

#### HTML/SVG/nativeMML display

-   [\#1095](https://github.com/mathjax/MathJax/issues/1095) HTML-CSS
    output: prevent collapse of table borders.
-   [\#596](https://github.com/mathjax/MathJax/issues/596) SVG Output:
    Fix overlapping equation labels in SVG output
-   [\#994](https://github.com/mathjax/MathJax/issues/994) SVG Output:
    Change default `blacker` setting to 1.
-   [\#995](https://github.com/mathjax/MathJax/issues/995) SVG output:
    fix baseline alignment issues.
-   [\#995](https://github.com/mathjax/MathJax/issues/995) SVG output:
    fix failure to scale all but the first glyph in a fraction when
    `useFontCache=false`.
-   [\#1035](https://github.com/mathjax/MathJax/issues/1035) PreviewHTML
    output: fix fractions formatting in WebKit and IE.
-   [\#1233](https://github.com/mathjax/MathJax/issues/1233) SVG output:
    make maligngroup and malignmark produce no output.
-   [\#1282](https://github.com/mathjax/MathJax/issues/1282) HTML-CSS
    output: reduce "bumpiness" of focus outline.
-   [\#1314](https://github.com/mathjax/MathJax/issues/1314) HTML-CSS
    output: prevent clipping of extremely long strings.
-   [\#1316](https://github.com/mathjax/MathJax/issues/1316) SVG output:
    preserve non-breaking space in `mtext` elements.
-   [\#1332](https://github.com/mathjax/MathJax/issues/1332) HTML-CSS
    output: fix width calculations for mrows with embellished operators
    that could stretch but don't actually.

#### TeX emulation

-   [\#567](https://github.com/mathjax/MathJax/issues/567) Add macro for
    `overparen` and `underparen` to provide stretchy arcs above/below
-   [\#956](https://github.com/mathjax/MathJax/issues/956) Simplify the
    `mhchem` extension to use multiscripts, cf. \#1072.
-   [\#1028](https://github.com/mathjax/MathJax/issues/1028) Fix spacing
    in `\alignedat`.
-   [\#1194](https://github.com/mathjax/MathJax/issues/1194) Fix problem
    where automatic numbering affects `\binom` and friends.
-   [\#1199](https://github.com/mathjax/MathJax/issues/1199) Fix problem
    with dot delimiter not being recognized as a delimiter.
-   [\#1224](https://github.com/mathjax/MathJax/issues/1224) Handle
    braces properly in text mode when looking for matching math
    delimiters.
-   [\#1225](https://github.com/mathjax/MathJax/issues/1225) Fix
    `\operatorname` not ignoring `\limits` that follow immediately
    after.
-   [\#1229](https://github.com/mathjax/MathJax/issues/1229) Fix wrong
    spacing of trailing binary operators.
-   [\#1272](https://github.com/mathjax/MathJax/issues/1272) Fix spacing
    of `\eqnarray` environment.
-   [\#1295](https://github.com/mathjax/MathJax/issues/1295) Handle
    `scriptlevel` set on arrays via an `mstyle` node (affects
    `\smallmatrix`).
-   [\#1312](https://github.com/mathjax/MathJax/issues/1312) Improve
    heuristics for adding U+2061 (invisible function application).

#### Asciimath

-   [asciimath/\#31](https://github.com/asciimath/asciimathml/issues/31)
    Add support for `overparen`, `underparen` to produce `mover` and
    `munder` constructs.
-   [asciimath/\#35](https://github.com/asciimath/asciimathml/issues/35)
    Add support for `bowtie`, `ltimes` and `rtimes`.
-   [asciimath/\#40](https://github.com/asciimath/asciimathml/issues/40)
    Improve parsing of brackets within brackets.
-   [asciimath/\#43](https://github.com/asciimath/asciimathml/issues/43)
    Improve detection of non-matrices.

#### MathML

-   [\#1072](https://github.com/mathjax/MathJax/issues/1072)
    Right-justify prescripts in `mmultiscript` elements (after
    clarification in MathML 3 editors' draft); cf. \#956.
-   [\#1089](https://github.com/mathjax/MathJax/issues/1089) Fix
    `toMathML` from changing `<maligngroup>` to `<malign>`
-   [\#1188](https://github.com/mathjax/MathJax/issues/1188) Fix
    `mmultiscripts` with odd number of post-scripts not rendering
    correctly.
-   [\#1231](https://github.com/mathjax/MathJax/issues/1231) Fix
    `<math>` element not being treated as an `<mrow>` for embellished
    operator spacing.
-   [\#1233](https://github.com/mathjax/MathJax/issues/1233) Make
    `<maligngroup>` and `<malignmark>` be self-closing in MathML input.
-   [\#1238](https://github.com/mathjax/MathJax/issues/1238) Fix Content
    MathML extension not handling namespace prefixes.
-   [\#1257](https://github.com/mathjax/MathJax/issues/1257) Improve
    `mml3.js`: better RTL support in HTML-CSS; improved IE/Edge
    compatibility.
-   [\#1323](https://github.com/mathjax/MathJax/issues/1323)
    Content-mathml extension: improve handling of empty Presentation
    MathML nodes.

#### Fonts

-   [\#928](https://github.com/mathjax/MathJax/issues/928) Add data for
    stretchy `U+2322 (FROWN)`, `U+2323 (SMILE)`, and also `U+2312 (ARC)`
    to be aliases for the top and bottom parentheses. This enables
    stretchy constructions; cf. also \#567.
-   [\#1211](https://github.com/mathjax/MathJax/issues/1211) Fix web
    font detection for Gyre-Pagella etc. in IE10+.
-   [\#1251](https://github.com/mathjax/MathJax/issues/1251) Fix primes
    in STIX-web font being too small in SVG output.

#### Localization

-   [\#1248](https://github.com/mathjax/MathJax/issues/1248) Updated
    locales thanks to the contributors at Translatewiki.net; activate
    locales for Bulgarian, Sicilian, Lithuanian, and Laki.

#### APIs

-   [\#1216](https://github.com/mathjax/MathJax/issues/1216) Add
    debugging tips to console output.

#### Misc.

-   [\#1074](https://github.com/mathjax/MathJax/issues/1074) Fix
    regression in v2.5 regarding MathPlayer on IE9.
-   [\#1036](https://github.com/mathjax/MathJax/issues/1036) Improve CDN
    rollover behavior.
-   [\#1085](https://github.com/mathjax/MathJax/issues/1085) Fix
    detection of Windows Phone mobile IE.
-   [\#1155](https://github.com/mathjax/MathJax/issues/1155) Work around
    websites using user agent filtering
-   [\#1173](https://github.com/mathjax/MathJax/issues/1173) Avoid
    warning message in debug mode.
-   [\#1208](https://github.com/mathjax/MathJax/issues/1208) Fix CHTML
    preview from setting chunking parameters even when disabled.
-   [\#1214](https://github.com/mathjax/MathJax/issues/1214) semi-slim
    official MathJax repository for bower; use
    `bower install components/MathJax` for a copy without PNG fonts.
    Special thanks to [@minrk](https://github.com/minrk) from the
    IPython/Jupyter team and to the team at
    [components](https://github.com/components)!
-   [\#1254](https://github.com/mathjax/MathJax/issues/1254) Improve
    examples in `/test`: add viewport meta tags, improve dynamic
    examples.
-   [\#1328](https://github.com/mathjax/MathJax/issues/1328) Add
    package.json for publishing on npm, excluding PNG fonts.
