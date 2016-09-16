---
layout: post
title: MathJax v2.7 beta now available
date: 2016-09-01
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

Today we are entering the public beta phase of MathJax v2.7. MathJax v2.7 is primarily a bug-fix release with over 60 important bug fixes. In addition, this release adds several new features as an opt-in. The following are some of the highlights:

1. *CommonHTML output improvements* Several important bugs in the layout model have been fixed, in particular tabular layout is now much more robust.
2. *Accessibility extensions.* After the completion of the [MathJax Accessibility Extensions](https://www.mathjax.org/mathjax-accessibility-extensions-v1-now-available/), we are integrating the lightweight opt-in into the MathJax core. This allows readers to opt into the following features via the MathJax Menu:
  * *Responsive Equations.* An innovative responsive rendering of mathematical content through collapsing and exploration of subexpressions.
  * *Universal aural Rendering.* An aural rendering tool providing on-the-fly speech-text for mathematical content and its subexpressions using various rule sets.
  * *Full Exploration.* A fully accessible exploration tool, allowing for meaningful exploration of mathematical content including multiple highlighting features and synchronized aural rendering.
  * For detailed information check the accessibility extensions' [release announcement](https://www.mathjax.org/mathjax-accessibility-extensions-v1-now-available/).
3. *Opt-in for mhchem v3* The mhchem extension in the core now provides a configuration option to switch to mchhem v3. This new version was (re-)written by Martin Hensel, author of the original $\rm \LaTeX$ package, and greatly revises and extends it. This new extension is also available directly through the [MathJax Third Party Extension repository](http://docs.mathjax.org/en/latest/options/ThirdParty.html) 
3. *Simplified opt-in for third party extensions* MathJax v2.7 configures the `[Contrib]` path variable to the URL of the third party extension repository on the MathJax CDN. This simplifies loading contributed extensions.
4. *Third Party Extension Updates* Our Third Party Extension repository as seen some great additions recently. **The MathJax team is grateful for these contributions from the community!**
  * [arabic.js](https://github.com/mathjax/MathJax-third-party-extensions/tree/master/arabic): Omar Al-Ithawi ([@omarithawi](https://github.com/omarithawi)) from Edraak.org contributed this extension for basic Arabic support in the TeX input.  
  * [physics.js](https://github.com/mathjax/MathJax-third-party-extensions/tree/master/physics) An extension by [@ickc](https://github.com/ickc) providing basic support for the [physics package](http://ctan.org/pkg/physics) for $\rm \LaTeX$.
  * [siunitx.js](https://github.com/mathjax/MathJax-third-party-extensions/tree/master/siunitx): Yves Delley ([@burnpanck](https://github.com/burnpanck)) contributed a basic implementation of the [siunitx package](http://www.ctan.org/pkg/siunitx) for $\rm \LaTeX$ .
  * [mhchem.js](https://github.com/mathjax/MathJax-third-party-extensions/tree/master/mhchem): As already mentioned, Martin Hensel ([@mhchem](https://github.com/mhchem)) re-wrote the mhchem extension to better match his well-known [mhchem package](ctan.org/pkg/mhchem) for $\rm \LaTeX$.

For details on all bug fixes, please [see below](#new-in-release). 

The beta is available via our CDN at [beta.mathjax.org/mathjax/latest/MathJax.js](https://beta.mathjax.org/mathjax/latest/MathJax.js) which you can load it in place of the version you are currently using. Alternatively, you can get a [ZIP archive](https://github.com/mathjax/MathJax/archive/2.7.0-beta.0.zip) or access the branch [on GitHub](https://github.com/mathjax/MathJax/tree/2.7.0-beta.0).

Please note the following.

### Changes to the combined configuration files

If you are using [a combined configuration](https://docs.mathjax.org/en/v2.7-latest/config-files.html), please note that we added the the accessibility menu extension to all combined configuration files. This extension will always load from `cdn.mathjax.org/mathjax/contrib`. If you are hosting your own copy of MathJax and if your users will not be able to access `cdn.mathjax.org`, then you should disable the `[Contrib]` path by adding `noContrib` to the query string, e.g., `MathJax.js?config=...&noContrib` to avoid unnecessary failed requests.

---

**Remember that this is still beta software**, so if you are not an experienced user, you may want to wait for the official 2.7 release. We do not recommend that you use the 2.7-beta version for production environments, but do encourage you to test your content with it.

If you are linking to <http://cdn.mathjax.org/mathjax/latest/MathJax.js>, note that at the point of the official release of v2.7, the address will begin to serve MathJax v2.7. You can also continue to use v2.6 by linking to <http://cdn.mathjax.org/mathjax/2.6-latest/MathJax.js> instead — and you can change to that version at any point (it is available now).

The official release of v2.7 should occur within the next few weeks, but we want you to be able to start to test out the v2.7 features now. Please report any bugs you find to the issue tracker at <https://github.com/mathjax/MathJax/issues>.

Thanks for your continuing interest in MathJax. We hope that this release makes your MathJax experience even better.

The MathJax Team.

* * * * *

## New in MathJax v2.7 {#new-in-release}

MathJax v2.7 is primarily a bug-fix release with over 60 important bug fixes, in particular to the CommonHTML output. In addition, this release adds several new features as an opt-in. The following are some of the highlights.

## Features

*   _Common HTML output improvements_ Several important bugs in the layout model have been fixed, in particular tabular layout is now much more robust.
*   _Accessibility improvements._ After the completion of the MathJax Accessibility Extensions, we are integrating the opt-in for the MathJax menu into the core distribution. We are grateful to the web accessibility community for their guidance, support, and feedback in our efforts towards making MathJax completely accessible to all users. This allows end-users to opt into the following features via the MathJax Menu:
    *   _Responsive Equations._ An innovative responsive rendering of mathematical content through collapsing and exploration of subexpressions.
    *   _Universal aural Rendering._ An aural rendering tool providing on-the-fly speech-text for mathematical content and its subexpressions using various rule sets.
    *   _Full Exploration._ A fully accessible exploration tool, allowing for meaningful exploration of mathematical content including multiple highlighting features and synchronized aural rendering.
    *   For more information check the [release announcement](https://www.mathjax.org/mathjax-accessibility-extensions-v1-now-available/) and the dedicated repository at [mathjax/mathjax-a11y](https://github.com/mathjax/MathJax-a11y).

For a detailed listing please check the [release milestone](https://github.com/mathjax/MathJax/milestone/14?closed=1).


## Accessibility

*   [mathajx-dev/#20](https://github.com/mathjax/MathJax-dev/issues/20) Add the Menu extension from the [MathJax Accessibility tools](https://github.com/mathjax/MathJax-a11y) to all combined configuration files.
*   [#1465](https://github.com/mathjax/MathJax/issues/1465) CHTML and HTML-CSS output: do not add `role=math` by default.
*   [#1483](https://github.com/mathjax/MathJax/issues/1483) Catch IE8 errors with inserting MathML from AssistiveMML extension.
*   [#1513](https://github.com/mathjax/MathJax/issues/1513) Disable the AssistiveMML extension when the output renderer is PlainSource.

## Interface

*   [#1463](https://github.com/mathjax/MathJax/issues/1463) Reset message strings for `messageStyle=simple` for each typeset.
*   [#1556](https://github.com/mathjax/MathJax/issues/1556) Improve menu placement.

## HTML/SVG/nativeMML display

*   [#1454](https://github.com/mathjax/MathJax/issues/1454) SVG output: Use full location URL for `xlink` references in SVG `<use>` elements.
*   [#1457](https://github.com/mathjax/MathJax/issues/1457) Common-HTML output: Fix problem with characters from Unicode Plane 1 not being mapped to the MathJax fonts properly
*   [#1458](https://github.com/mathjax/MathJax/issues/1458) SVG output: Fix problem with container width when math is scaled.
*   [#1459](https://github.com/mathjax/MathJax/issues/1459) CommonHTML output: Improve `getNode()` to fix processing errors when line-breaking.
*   [#1460](https://github.com/mathjax/MathJax/issues/1460) HTML-CSS output: Adjust position of rule for square root when it is made via `createRule()`.
*   [#1461](https://github.com/mathjax/MathJax/issues/1461) HTML-CSS output: Make sure `0` remains `0` when rounding to pixels (plus a bit).
*   [#1462](https://github.com/mathjax/MathJax/issues/1462) CommonHTML output: Bubble percentage widths up while line breaking.
*   [#1475](https://github.com/mathjax/MathJax/issues/1475) PreviewHTML: Avoid error when `\overset` or `\underset` is empty.
*   [#1479](https://github.com/mathjax/MathJax/issues/1479) All outputs: Properly determine (shrink-wrapping) container widths.
*   [#1503](https://github.com/mathjax/MathJax/issues/1503) CommonHTML output: Handle adjusting table cell heights properly.
*   [#1507](https://github.com/mathjax/MathJax/issues/1507) SVG output: Remove invalid `src` attribute from `<mglyph>` output.
*   [#1510](https://github.com/mathjax/MathJax/issues/1510) CommonHTML output: Prevent CSS bleed-through for box-sizing.
*   [#1512](https://github.com/mathjax/MathJax/issues/1512) CommonHTML output: make `<mglyph>` scale image size by hand.
*   [#1530](https://github.com/mathjax/MathJax/issues/1530) All outputs: Fix problem with Safari inserting line breaks before in-line math.
*   [#1533](https://github.com/mathjax/MathJax/issues/1533) CommonHTML output: improve aligning labels with their table rows.
*   [#1534](https://github.com/mathjax/MathJax/issues/1534) CommonHTML output: ensure output stays a table-cell when focused.
*   [#1538](https://github.com/mathjax/MathJax/issues/1538) All outputs: Don’t let preview width interfere with the determination of the container width.
*   [#1542](https://github.com/mathjax/MathJax/issues/1542) CommonHTML output: improve stretching `<mover>` in `<mtd>` elements.
*   [#1547](https://github.com/mathjax/MathJax/issues/1547) HTML-CSS output: improve line breaks within fractions.
*   [#1549](https://github.com/mathjax/MathJax/issues/1549) All outputs: Improve determination of line-breaking parent element.
*   [#1550](https://github.com/mathjax/MathJax/issues/1550) CommonHTML output: Improve vector arrow positioning.
*   [#1552](https://github.com/mathjax/MathJax/issues/1552) All outputs: Handle `href` correctly when line breaking.
*   [#1574](https://github.com/mathjax/MathJax/issues/1574) HTML-CSS and SVG output: Use `currentColor` for `<menclose>` with no `mathcolor`.
*   [#1595](https://github.com/mathjax/MathJax/issues/1595) CommonHTML output: Properly scale elements with `font-family` specified.


## TeX emulation

*   [#1455](https://github.com/mathjax/MathJax/issues/1455) Fix `TeX.Environment()` to use the correct end environment.
*   [#1464](https://github.com/mathjax/MathJax/issues/1464) Make sure `resetEquationNumbers` is always defined.
*   [#1484](https://github.com/mathjax/MathJax/issues/1484) Mark accented operators as not having movable limits.
*   [#1485](https://github.com/mathjax/MathJax/issues/1485) Allow line breaks within `TeXAtom` elements
*   [#1508](https://github.com/mathjax/MathJax/issues/1508) Surround `\middle` with `OPEN` and `CLOSE` TeXAtoms to match TeX spacing
*   [#1509](https://github.com/mathjax/MathJax/issues/1509) Make delimiters (in particular arrows) symmetric for `\left` and `\right`.
*   [#1514](https://github.com/mathjax/MathJax/issues/1514) Don’t unwrap rows when creating fenced elements.
*   [#1523](https://github.com/mathjax/MathJax/issues/1523) Don’t copy environment into `array` environments.
*   [#1537](https://github.com/mathjax/MathJax/issues/1537) mhchem: add config parameter to select mhchem v3.0.
*   [#1596](https://github.com/mathjax/MathJax/issues/1596) Prevent `\require{mhchem}` to override one already loaded.
*   [#1551](https://github.com/mathjax/MathJax/issues/1551) Allow `<wbr>` in TeX code.
*   [#1565](https://github.com/mathjax/MathJax/issues/1565) Handle `\+SPACE` in macro definitions.
*   [#1569](https://github.com/mathjax/MathJax/issues/1569) Treat control sequences as a unit when matching a macro template.
*   [#1587](https://github.com/mathjax/MathJax/issues/1587) Make sure `trimSpaces()` doesn’t remove tailing space in `\+SPACE`.
*   [#1602](https://github.com/mathjax/MathJax/issues/) Handle `\ref` properly when there is a `<base>` tag.


## Asciimath

*   [asciimath/f649ba4](https://github.com/asciimath/asciimathml/commit/f649ba49f639b7e5322d6552193226c03e88ba7e) Add `newsymbol` command for adding a new symbol object

## MathML

*   [#1505](https://github.com/mathjax/MathJax/issues/1505) Handle `rowlines=""` and `rowlines=" "` like `rowlines="none"`.
*   [#1511](https://github.com/mathjax/MathJax/issues/1511) Don’t convert attribute to boolean unless the default is a boolean.
*   [#1526](https://github.com/mathjax/MathJax/issues/1526) Make minus in `<mn>` produce `U+2212` rather than `U+002D`.
*   [#1567](https://github.com/mathjax/MathJax/issues/1567) Fix spacing for initial fraction in exponent position.

## Fonts

*   [#1521](https://github.com/mathjax/MathJax/issues/1521) STIX fonts: Make left arrow use combining left arrow for accents.
*   [#1092](https://github.com/mathjax/MathJax/issues/1092) STIX fonts: Make `U+222B` (integral) stretchy.
*   [#1154](https://github.com/mathjax/MathJax/issues/1154) STIX fonts: Remap `|` to variant form (with descender) and map variant to original form.
*   [#1175](https://github.com/mathjax/MathJax/issues/1175) Use `U+007C` and `U+2016` for delimiters rather than `U+2223` and `U+2225`.
*   [#1421](https://github.com/mathjax/MathJax/issues/1421) MathJax TeX fonts: Fix SVG font data for stretchy characters.
*   [#1418](https://github.com/mathjax/MathJax/issues/1418) Alias `U+2206` to `U+0394` and remove incorrect `U+2206` from SVG font files.
*   [#1187](https://github.com/mathjax/MathJax/issues/1187) Make height and depth of minus match that of plus (needed for TeX-layout super/subscript algorithm to work properly), and adjust for that when it is used as an extender in stretchy characters.
*   [#1546](https://github.com/mathjax/MathJax/issues/1546) MathJax TeX fonts: Add stretchy data for `U+20D7`.

## Localization

*   [#1604](https://github.com/mathjax/MathJax/issues/1604) Updated locales thanks to the contributors at Translatewiki.net; activate locale for Zazaki.


## APIs
*   [#1504](https://github.com/mathjax/MathJax/issues/1504) Make `getJaxForMath()` work even during chunking.
*   [#1522](https://github.com/mathjax/MathJax/issues/1522) Add Third Party Extensions Repository to the Ajax paths as `[Contrib]`.
*   [#1525](https://github.com/mathjax/MathJax/issues/1525) Allow MathJax root to be configured.

## Misc.

*   [#1456](https://github.com/mathjax/MathJax/issues/1456) Prevent removal of DOM elements while MathJax is running from stopping processing, or to leaving duplicate math in place.
*   [#1524](https://github.com/mathjax/MathJax/issues/1524) Prevent pre-processors from adding duplicate preview elements.
*   [#1554](https://github.com/mathjax/MathJax/issues/1554) Safe extension: Add filtering of CSS styles like `padding`, `margin`.
*   [#1590](https://github.com/mathjax/MathJax/issues/1590) Set previews to have `display:none`.
*   [#1591](https://github.com/mathjax/MathJax/issues/1591) Change `rev=` to `V=` in cache breaking code.
