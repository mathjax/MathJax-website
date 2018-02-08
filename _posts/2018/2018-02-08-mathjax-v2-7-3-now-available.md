---
layout: post
title: MathJax v2.7.3 now available
date: 2018-02-08
categories:
- News
status: publish
type: post
published: true
author: Davide P. Cervone
---

We are happy to officially release MathJax v2.7.3 today.

This is mostly a bug-fix release, with a few enhancements as well.

The primary enhancement is the addition of version 2.3 of the Speech-Rule Engine that underlies the MathJax accessibility tools. This includes performance enhancements as well as a Spanish localization that is tied to the MathJax localization menu. In addition, the Explorer menu in the Assistive submenu has been slimmed down to remove unneeded options.

For details on all bug fixes and enhancements, please [see below](#new-in-release).

This release should be available on all CDN providers, e.g., [https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/MathJax.js](https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/MathJax.js) which you can load it in place of the version you are currently using (or load `latest.js` instead of `Mathjax.js` to get the latest version 2.x, whatever it is, but note that this loads asynchronously, so the `MathJax` global variable may not be available immediately).

Alternatively, you can get a [ZIP archive](https://github.com/mathjax/MathJax/archive/2.7.3.zip) or access the branch [on GitHub](https://github.com/mathjax/MathJax/tree/2.7.3).

Thanks for your continuing interest in MathJax. We hope that this release makes your MathJax experience even better.

The MathJax Team.

* * * * *

## New in MathJax v2.7.3 {#new-in-release}

### Input

* AsciiMath has been updated to include new features that have been added in the official `AsciiMathML.js` file since v2.7.2 was released.

* TeX: Remove balanceBraces option from tex2jax, which was never implemented ([#1871](https://github.com/mathjax/MathJax/issues/1871))

* TeX: Make HTML id's used in `\tag` handling more robust ([#1899](https://github.com/mathjax/MathJax/issues/1899))

* TeX: Make `\DeclareMathOperator` and `\Newextarrow localizable` by begingroup ([#1876](https://github.com/mathjax/MathJax/issues/1876))

* TeX: Have `\bigg` and friends to trim spaces from their arguments ([#1819](https://github.com/mathjax/MathJax/issues/1819))

* TeX: Don't produce unwanted mrows with \left...\right ([#1829](https://github.com/mathjax/MathJax/issues/1829))

### Output

* HTML-CSS: Improve detection of web fonts ([#517](https://github.com/mathjax/MathJax/issues/517))

* Improve line breaking past the container width when no break is found within it ([#1883](https://github.com/mathjax/MathJax/issues/1883))

* SVG: Don't lose pre-spacing in elements containing line breaks ([#1915](https://github.com/mathjax/MathJax/issues/1915))

* CommonHTML: Fix width of roots containing line breaks ([#1882](https://github.com/mathjax/MathJax/issues/1882))

* SVG: Measure sizes of annotation-xml elements properly ([#1870](https://github.com/mathjax/MathJax/issues/1870))

* Handle default border width properly in SVG and HTML-CSS ([#1855](https://github.com/mathjax/MathJax/issues/1855))

* CommonHTML: Reset character width if a reset occurs while an equation is being processed ([#1837](https://github.com/mathjax/MathJax/issues/1837))

* CommonHTML: Properly scale widths in line breaking algorithm ([#1881](https://github.com/mathjax/MathJax/issues/1881))

* HTML-CSS: Fix position of rightmost glyph in multi-glyph horizontal stretchy characters ([#1896](https://github.com/mathjax/MathJax/issues/1896))

* MathML: Don't add duplicate xmlns attribute when original is empty ([#1862](https://github.com/mathjax/MathJax/issues/1862))

### Interface

* Decode hash URI component so it works with special characters (#1843)


For more information see also the [2.7.3 milestone](https://github.com/mathjax/MathJax/milestone/17?closed=1).
