---
layout: post
title: MathJax v2.7.8 now available
date: 2020-04-08
author: Davide P. Cervone
categories:
- News
---

It has been some time since there was a bug-fix release for MathJax version 2.  This is largely due to our efforts to produce version 3, which was a complete rewrite of MathJax, so was pretty time-intensive.  Now that version 3 is out, we have been able to return to version 2.7 for a welcome update.

We are happy to release version 2.7.8, which fixes a number of bugs, many of them long-standing ones.  It also adds a new extension to handle some tex-mode macros inside `\text{}` and similar commands.

## MathJax and CDNJS

MathJax is hosted by a number of different CDNs.  For version 2, we had been recommending `cdnjs.cloudflare.com`, which had served us well for many years.  Now that MathJax has released version 3, it appears that `cdnjs` is no longer picking up earlier versions, so version 2.7.8 has not appeared there.  That means version 2.7.8 can not be obtained from `cdnjs`, and the `latest.js` file will not update automatically to this version

In order to use MathJax v2.7.8, you will need to change the CDN to one of the other ones that does provide all versions of MathJax.  Our current recommendation is `jsdelivr`, which provides all past versions, as well as an automatic latest version if you wish.  For example, you can use

    cdn.jsdelivr.net/npm/mathjax@2/MathJax.js

to obtain the latest version 2 release (2.7.8 currently).  Alternatively, you can request a specific version and stay witht at until you are ready to change to a new version, e.g.,

    cdn.jsdelivr.net/npm/mathjax@2.7.8/MathJax.js

will keep you at version 2.7.8 until you change the version number yourself.

Other CDNs are listed in the [MathJax documentation](http://docs.mathjax.org/en/latest/web/start.html#using-mathjax-from-a-content-delivery-network-cdn), in case you prefer one of the alternatives.

## Bug Fixes in this Version

The following bug fixes are included in version 2.7.8:

### Output issues

* Fix `displayIndent` in CHTML with floating elements. ([#2352](https://github.com/mathjax/MathJax/issues/2352))

* Add skew values to STIX font italic and bold-italic characters in Plane 1. ([#2050](https://github.com/mathjax/MathJax/issues/2050)) 

* Fix CHTML `mroot` positioning to match SVG and HTML-CSS. ([#2143](https://github.com/mathjax/MathJax/issues/2143))

* Make line breaks cause full-width bounding box when they are at the top level. ([#1804](https://github.com/mathjax/MathJax/issues/1804))

* Fix problem with italic correction not being removed from integrals after a line break. ([#2139](https://github.com/mathjax/MathJax/issues/2139))

* Fix scaling of enclosures in zoomed CHTML. ([#1815](https://github.com/mathjax/MathJax/issues/1815))

* Use proper spacing for `mstyle` containing a stretchy operator. ([#2052](https://github.com/mathjax/MathJax/issues/2052))

* Add some missing stretchy character data. ([#2135](https://github.com/mathjax/MathJax/issues/2135))

* Add CSS to fix RTL issue in Chrome. ([#2190](https://github.com/mathjax/MathJax/issues/2190))

* Fix over-wide SVG output when `\vphantom` is used. ([#1637](https://github.com/mathjax/MathJax/issues/1637))

* Scale `mglyphs` to proper script size. ([#2125](https://github.com/mathjax/MathJax/issues/#2125)) 

* Make sure SVG elements are scaled properly in `menclose` for CHTML ([#2089](https://github.com/mathjax/MathJax/issues/2089)) 

* Properly handle `'fit'` columns in percentage-width tables. ([#2075](https://github.com/mathjax/MathJax/issues/2075))

* Correct offset into Math Alphabet for bold-italic in STIX font data. ([#2035](https://github.com/mathjax/MathJax/issues/2035))


## TeX Input

* Don't add `\text` to operators whose name already include it. ([#2222](https://github.com/mathjax/MathJax/issues/2222))

* Allow `\newline` to work like `\\`. ([#2141](https://github.com/mathjax/MathJax/issues/2141))

* Use proper spacing for `\mathrel` in align environment. ([#2175](2175))

* Number a single `split` environment when `autoNumber` is `'all'`.  ([#2272](https://github.com/mathjax/MathJax/issues/2272), [#1811](https://github.com/mathjax/MathJax/issues/1811))

* [mediawiki-texvc.js] drop redefinition of `\oint` ([#2095](https://github.com/mathjax/MathJax/issues/2095))
 
* Add extension to process some text-mode macros ([#2051](https://github.com/mathjax/MathJax/issues/2051))

* Fix handing of unbalanced braces in TeX input. ([#2036](https://github.com/mathjax/MathJax/issues/2036))


## Miscellaneous

* Update mhchem, SRE, and AsciiMath to current versions ([#2344](https://github.com/mathjax/MathJax/issues/2344))

* Allow `tex2jax` end delimiters to be close braces. ([#2034](https://github.com/mathjax/MathJax/issues/2034))

* Remove references to `cdn.mathjax.org`. ([#2160](https://github.com/mathjax/MathJax/issues/2160))

