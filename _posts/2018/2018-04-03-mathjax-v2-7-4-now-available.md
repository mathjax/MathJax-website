---
layout: post
title: MathJax v2.7.4 now available
date: 2018-04-03
categories:
- News
status: publish
type: post
published: true
author: Davide P. Cervone
---

We are happy to officially release MathJax v2.7.4 today.

This is a bug-fix release.  Among the issue fixed in this release are the following:

For details on all bug fixes and enhancements, please [see below](#new-in-release).

This release should be available on all CDN providers, e.g., [https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js](https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js) which you can load it in place of the version you are currently using (or load `latest.js` instead of `Mathjax.js` to get the latest version 2.x, whatever it is, but note that this loads asynchronously, so the `MathJax` global variable may not be available immediately).

Alternatively, you can get a [ZIP archive](https://github.com/mathjax/MathJax/archive/2.7.4.zip) or access the branch [on GitHub](https://github.com/mathjax/MathJax/tree/2.7.4).

Thanks for your continuing interest in MathJax. We hope that this release makes your MathJax experience even better.

The MathJax Team.

* * * * *

## New in MathJax v2.7.4 {#new-in-release}

* Prevent infinite loop if an autoloaded component fails to load. (#1936)
* Always set movablelimits to false in `\overset` and `\underset`. (#1929)
* CSS reset for box-sizing in HTML-CSS output. (#1942)
* Add `px` to `max-width` for SVG output containing tags. (#1950)
* Properly handle namespaces starting with `math` in MathML input. (#1951)
* Make `tex2jax` and `asciimath2jax` rescan after unmatched delimiter. (#1960)
* Fix minimum height of accents in scripts. (#1956)
* Make monospaced non-breaking space be of correct width. (#1953)
* Handle size of centered large operators correctly in mrows. (#1933)


For more information see also the [2.7.4 milestone](https://github.com/mathjax/MathJax/milestone/18?closed=1).
