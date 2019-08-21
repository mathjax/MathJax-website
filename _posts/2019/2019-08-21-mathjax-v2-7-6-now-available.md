---
layout: post
title: MathJax v2.7.6 now available
date: 2019-08-21
categories:
- News
status: publish
type: post
published: true
author: Davide P. Cervone
---

We are happy to officially release MathJax v2.7.6 today.

This is a maintenance release that fixes an issue with the `latest.js` file that is used to obtain the most current 2.x version of MathJax from one of the CDNs that serves MathJax.  The problem is that the most current version is only obtained if the highest version on the CDN is version 2.x.y for some x and y, so when MathJax goes to version 3.0.0 (scheduled for August 31st), `latest.js` will find that the current CDN version is 3.0.0 and (correctly) will not switch to that, but instead will (incorrectly) use the version from which `latest.js` was loaded rather than the highest 2.x.y available.  This means that when version 3.0 is released, sites using `latest.js` will fall back from version 2.7.5 to the version that they specified for `latests.js`.  MathJax will still run on those pages, but it may be an earlier version than you have been getting in the past.

The new version of `latest.js` properly handles the situation when the current version is not 2.x, so switching to

    https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.6/latest.js

should mean you will get the highest 2.x version in the future, even when v3.0 is released. This version also updates the CDN list to include additional servers, and to remove RawGit, which is no longer in service.  Finally, it updates the packed version of the `mhchem` TeX extension to version 3.3.0, so that the unpacked and packed versions are the same.

We recommend anyone using `latest.js` switch to this version.
