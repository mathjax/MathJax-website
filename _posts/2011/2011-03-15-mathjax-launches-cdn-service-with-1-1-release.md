---
layout: post
title: MathJax Launches CDN Service with 1.1 Release
date: 2011-03-15 13:10:39.000000000 +01:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _rawhtml_settings: '0,0,0,0'
  _edit_last: '8'
  _wp_old_slug: ''
  dsq_thread_id: '812339892'
author:
  login: robertm
  email: stevenp@dessci.com
  display_name: Robert Miner
  first_name: Robert
  last_name: Miner
---

MathJax version 1.1 was released yesterday both as a [download](http://docs.mathjax.org/en/v1.1-latest/installation.html#installing-and-testing-mathjax) and as a hosted installation  available via a content distribution network (CDN).  The hosted installation of MathJax utilizes Amazon's CloudFront service, which mirrors MathJax files on a network of fast servers around the world, and automatically routes requests from browsers to the nearest server.  The MathJax CDN service will offer most readers a significantly faster, more robust MathJax viewing experience.

Apart from the new CDN service, the 1.1 release itself contains a number of performance improvements, simplified configuration for common use cases, and a number of bug fixes and minor enhancements, including several that improve support for mobile devices.  Consult [What's New in MathJax v1.1](http://docs.mathjax.org/en/v1.1-latest/whats-new.html) for a detailed listing.

The CDN hosting model offers a number of advantages for MathJax content publishers, and has been very successful with other popular libraries such as jQuery.  It eliminates the need to download and install the MathJax software on a server.  Since most authors are simply users of web applications such as blogs and learning management systems, installing server software, or even arranging for it to be installed, can be a significant obstacle.  To use MathJax via the CDN, users only need to be able to copy script tags into their content, which is supported by most web publishing systems. Another important advantage of the MathJax CDN is that it is much easier for authors to keep their pages working with the latest browsers and devices, since patches and bug fixes will be deployed to the CDN as soon as they become available.  And perhaps most obviously, the CDN offers very fast download times to readers around the world. More information on [getting started](http://docs.mathjax.org/en/v1.1-latest/start.html) with the MathJax CDN is available in the 1.1 documentation.

The MathJax CDN is a publicly available service, but it is primarily intended for use by individuals and smaller organizations, since the hosting costs must be paid by the project.  Larger organizations or those with high-volume publishing needs are welcome to use the CDN, but we ask that they contact us in advance and consider becoming a project [sponsor](/#sponsors).  More information about permitted uses of the MathJax CDN is given in the [Terms of Service](/mathjax-cdn-terms-of-service/) agreement.
