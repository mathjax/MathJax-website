---
layout: post
title: MathJax v2.7.5 now available
date: 2018-07-20
categories:
- News
status: publish
type: post
published: true
author: Davide P. Cervone
---

We are happy to officially release MathJax v2.7.5 today.

This is a maintenance release primarily to address a bug in WebKit that can cause the page to crash or some text to be missing in recent versions of Safari.  For details on all bug fixes and enhancements, please [see below](#new-in-release).

This release should be available on all CDN providers, e.g., [https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js](https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js) which you can load it in place of the version you are currently using (or load `latest.js` instead of `Mathjax.js` to get the latest version 2.x, whatever it is, but note that this loads asynchronously, so the `MathJax` global variable may not be available immediately).

Alternatively, you can get a [ZIP archive](https://github.com/mathjax/MathJax/archive/2.7.5.zip) or access the branch [on GitHub](https://github.com/mathjax/MathJax/tree/2.7.5).

Thanks for your continuing interest in MathJax. We hope that this release makes your MathJax experience even better.

The MathJax Team.

* * * * *

## New in MathJax v2.7.5 {#new-in-release}

* Update AsciiMath to current master version
* Update mhchem to version 3.3.0
* Update a11y to version 1.5.0 (with SRE 2.2.2)
* Use Plane1 alphabets for STIX fonts when possible in HTML-CSS and SVG.  ([#1923](https://github.com/mathjax/MathJax/issues/1923))
* Improve line breaking algorithm for all output modes.  ([#1970](https://github.com/mathjax/MathJax/issues/1970))
* Fix problems with multline in CHTML (with tags) and SVG (with small containers).  ([#1974](https://github.com/mathjax/MathJax/issues/1974))
* Add CSS for munder in CHTML.  ([#1981](https://github.com/mathjax/MathJax/issues/1981))
* Adjust measuring of ex size and container width to avoid line breaks for inline math in WebKit.  ([#1982](https://github.com/mathjax/MathJax/issues/1982))
* Don't rescale mstyle bbox for scriptstyle changes in CHTML.  ([#1985](https://github.com/mathjax/MathJax/issues/1985))
* Prevent potential infinite loop in `setRenderer()`.  ([#1986](https://github.com/mathjax/MathJax/issues/1986))
* Make sure `\big`, etc., are at the right size in script styles in CHTML.  ([#1987](https://github.com/mathjax/MathJax/issues/1987))
* Fix problem with position of under/over applied to tables in SVG and HTML-CSS.  ([#1993](https://github.com/mathjax/MathJax/issues/1993))
* Properly handle MML spacing for explicit FORM attributes in all output modes.  ([#1997](https://github.com/mathjax/MathJax/issues/1997))
* Fix potential crash and missing text in recent Safari versions.  ([#2005](https://github.com/mathjax/MathJax/issues/2005))
* Change WebKit version for accent fix from 603 to 602.  ([#2017](https://github.com/mathjax/MathJax/issues/2017))
* Adjust `max-width` in SVG output to account for scaling factor.
* Fix for `useMMLspacing` and `FORM` attributes.
* Properly count multi-character glyphs when looking for a single character



For more information see also the [2.7.5 milestone](https://github.com/mathjax/MathJax/milestone/19?closed=1).
