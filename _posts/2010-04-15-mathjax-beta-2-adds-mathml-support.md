---
layout: post
title: MathJax Beta 2 Adds MathML Support
date: 2010-04-15 12:30:42.000000000 +02:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'no'
  _edit_last: '3'
author:
  login: robertm
  email: stevenp@dessci.com
  display_name: Robert Miner
  first_name: Robert
  last_name: Miner
---

MathJax Beta 2, adding support for MathML equations, is now available for [download](http://docs.mathjax.org/en/v1.0/installation.html).  MathJax can now display MathML or TeX code or even a mix of both in the same page!  MathJax also works with both HTML and XHTML pages, eliminating a long-standing problem with native browser support for MathML, which in most cases was limited to one format or the other.

MathJax uses the same HTML+CSS+fonts display technology for both TeX and MathML , which guarantees the widest possible cross-browser compatibility and uniformity of display.  However, MathJax can also be configured to take advantage of native MathML rendering in browsers with that capability.  Thus MathJax can be used for applications where demanding readers require the performance or additional functionality of native MathML support, without sacrificing the ability to reach a wide audience or imposing browser requirements.  For detailed information about enabling and configuring MathML support, consult the release [documentation](http://docs.mathjax.org/en/v1.0/).

Most MathML 2 presentation markup constructions are implemented in Beta 2.  Some additional support for MathML 2 and MathML 3 is planned over the few months.

In addition to the new MathML functionality, beta 2 introduces a number of additional TeX commands and environments in extension packages such as AMS symbols.  Many bugs have also been fixed since beta 1.

Another significant change in Beta 2 is a major update of the MathJax fonts, largely to facilitate better interoperability with the much anticipated STIX fonts that are expected to be released this year.  Early adopters that have installed MathJax Beta 1 should take note that it is therefore necessary to update both the MathJax fonts and code when upgrading to Beta 2.