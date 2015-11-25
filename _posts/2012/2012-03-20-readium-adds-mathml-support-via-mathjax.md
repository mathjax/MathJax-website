---
layout: post
title: Readium adds MathML support via MathJax
date: 2012-03-20 19:36:49.000000000 +01:00
categories:
- News
tags:
- Readium
status: publish
type: post
published: true
meta:
  _rawhtml_settings: '0,0,0,0'
  _edit_last: '12'
  _cws_is_markdown: '1'
  dsq_thread_id: '812337793'
author:
  login: PeterK
  email: info@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

The Readium developer blog announced yesterday (`http://readium.github.com/blog/2012/03/18/readium-adds-mathml-support-by-integrating-mathjax/`) that Readium now renders MathML by integrating MathJax.

[Readium](http://readium.org) is an open source reference system and rendering engine for EPUB publications. It's a project of the International Digital Publishing Forum (IDPF) for creating and testing EPUB 3 content and tools. Readium development started off in January and it is very exciting to get MathML support via MathJax in at an early stage of the development. While Readium is a very early prototype, you can [download it](http://readium.org) as a Chrome extension and take a look at MathJax in action as part of an EPUB book. Because Readium uses MathJax, it inherits MathJax's ability to zoom and cut-and-paste mathematical content.

Our very own Davide Cervone made the necessary contributions to Readium and you can get Readium's code [on github](https://github.com/readium/), including [a sample epub](https://github.com/IDPF/epub3-samples) with MathML content. For us here at MathJax, Readium is a great example for how easy it is to integrate MathJax into other projects, in particular ebook readers. Developers can easily add MathML rendering via MathJax even if their underlying HTML engines do not yet support MathML rendering natively.
