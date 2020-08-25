---
layout: post
title: MathJax v2.7.9 now available
date: 2020-08-25
author: Davide P. Cervone
categories:
- News
---

The MathJax team is happy to release version 2.7.9 of MathJax, which updates the version of the Speech-Rule Engine (SRE) that underlies MathJax's accessibility features.  MathJax now uses version 3.1 of SRE, which includes new languages (German and French), and access to the Clearspeak rules via the accessibility menu.  It also includes bug fixes in SRE, and faster conversion of expressions to speech. See the [SRE release notes](https://github.com/zorkow/speech-rule-engine/releases) for details (note that MathJax was using version 2.4 previously, and there have been a number of updates since that version).

MathJax 2.7.9 also updates the a11y extensions to version 1.6.0 to take advantage of the new SRE version.

## MathJax and CDNJS

MathJax is hosted by a number of different CDNs.  For version 2, we had been recommending `cdnjs.cloudflare.com`, which had served us well for many years.  Now that MathJax has released version 3, it appears that `cdnjs` is no longer picking up earlier versions, so version 2.7.9 has not appeared there.  That means version 2.7.9 can not be obtained from `cdnjs`, and the `latest.js` file will not update automatically to this version

In order to use MathJax v2.7.9, you will need to change the CDN to one of the other ones that does provide all versions of MathJax.  Our current recommendation is `jsdelivr`, which provides all past versions, as well as an automatic latest version if you wish.  For example, you can use

    cdn.jsdelivr.net/npm/mathjax@2/MathJax.js

to obtain the latest version 2 release (2.7.9 currently).  Alternatively, you can request a specific version and stay with at until you are ready to change to a new version, e.g.,

    cdn.jsdelivr.net/npm/mathjax@2.7.9/MathJax.js

will keep you at version 2.7.9 until you change the version number yourself.

Other CDNs are listed in the [MathJax documentation](http://docs.mathjax.org/en/latest/web/start.html#using-mathjax-from-a-content-delivery-network-cdn), in case you prefer one of the alternatives.

## Availability of 2.7.9

Although version 2.7.9 was released earlier today, it may take a day or two for the new version to propagate to the various CDN network computers, so you may not see v2.7.9 immediately if you are loading mathjax using a generic `mathjax@2` URL.  You should be able to obtain it immediately if you use the full version `mathjax@2.7.9`.

You may also have a cached version in your browser, so may need to either clear the browser cache, or relaunch your browser (or both) in order to get the latest version (the cached version should expire in about a week, depending on the CDN being used).

Version 2.7.9 is available immediately from npm and GitHub for use in node applications.

