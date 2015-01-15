---
layout: post
title: MathJax Beta Released
date: 2010-01-12 09:10:01.000000000 +01:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '5'
  _rawhtml_settings: '0,0,0,0'
author:
  login: robertm
  email: stevenp@dessci.com
  display_name: Robert Miner
  first_name: Robert
  last_name: Miner
---

[MathJax beta 1](https://sourceforge.net/projects/mathjax/files/) is now available for download.  This initial beta distribution supports high-quality HTML+CSS+JavaScript mathematics display that scales and aligns with surrounding text.  Equations are described by a subset of LaTeX math commands; support for equations described using MathML will be added soon. MathJax supports most browsers on all major operating systems, with no special installation or set up required.  MathJax is made available under the terms of the Apache 2.0 open source license. 

The MathJax distribution contains everything that is needed to publish web pages containing mathematics notation.  Authors prepare web pages mixing LaTeX equation input directly into HTML content, and include a small amount of JavaScript code in the page referencing MathJax.  When the page is viewed in a browser, MathJax determines the browser's capabilities, and lays out out the mathematics using HTML, CSS and a combination of fonts.  Depending on what is available in a given browser, MathJax may use fonts from the reader's local system, from a web server (web fonts), or as a last resort in older browsers, images of individual symbols may be used. The web fonts and symbol images needed by MathJax have been packaged as a separate download from the program code and documentation due to their size.

The MathJax development roadmap calls for implementation of MathML input support - and support for taking advantage of native browser MathML rendering when available - later this winter.  Core developer APIs for integrating MathJax with other web applications are present in beta 1,   but documentation and examples are planned in the coming months.  Additional functionality, particularly for accessibility and for copy and paste, is slated for spring.

Authors and developers are encouraged to download and try out MathJax beta 1.  Bug reports are best entered directly in the MathJax [bug tracker](https://sourceforge.net/tracker/?atid=1240827&group_id=261188&func=browse) on SourceForge.  Comments, suggestions and feature requests should be posted to the [MathJax Open Discussion forum](https://sourceforge.net/projects/mathjax/forums/forum/948700), also hosted at SourceForge.