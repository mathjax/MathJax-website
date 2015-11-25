---
layout: post
title: 'MathML in HTML5: Problems with IE9'
date: 2010-08-25 10:02:21.000000000 +02:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _rawhtml_settings: '0,0,0,0'
  _wp_old_slug: ''
  _edit_last: '3'
  dsq_thread_id: '812338604'
author:
  login: robertm
  email: stevenp@dessci.com
  display_name: Robert Miner
  first_name: Robert
  last_name: Miner
---

One of the strengths of MathJax is that is provides high-quality display of MathML in all modern browsers.  Firefox and and Internet Explorer with MathPlayer have had MathML support for years, but HTML files had to be prepared differently for each browser, and publishers often required yet a third version for other browsers.  MathJax solves that problem!

However, browser support for MathML is still important, particularly for accessibility. Most screen readers work by communicating with the browser via natively-implemented accessibility APIs.  This is why MathJax passes MathML through to MathML-capable browsers as described in [Accessible Pages with MathJax](/accessible-pages-with-mathjax/). We are particularly excited about reports of people using MathJax, Internet Explorer, MathPlayer and the screen reader JAWS to read equations in context in a web page.  Unfortunately, Internet Explorer 9 Platform Preview introduces a bug that prevents this from working!

Internet Explorer 9 is putting a lot of emphasis on HTML5 support, and the good news is that MathML is part of HTML5.  All the browser manufacturers, including Microsoft, have pledged to support HTML5, and while this doesn't automatically lead to universal MathML support, it is still important since whenever MathML is support implemented, it will be done in a standard way. Nonetheless, at the moment, the MathML in HTML5 support MathJax will need to rely on  using MathPlayer + IE9 is broken, which is serious step backward.

We have written up [details of the bug](http://accessiblemath.dessci.com/2010/08/mathml-in-html5-internet-explorer-9-is-broken.html) and are hoping you will help us let Microsoft know how important this is for accessible scientific communication on the web.  We have reported the bug, but now we need your help finding ways to tell them it is something people care about.
