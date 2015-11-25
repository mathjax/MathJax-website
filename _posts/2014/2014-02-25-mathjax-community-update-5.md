---
layout: post
title: 'MathJax community update #5'
date: 2014-02-25 13:25:04.000000000 +01:00
categories:
- COMM
tags:
- draw.io
- Fred Wang
- Gitden
- input fields
- Jekyll
- kramdown
- LaTeXML
- LightPaper
- minutes text notes
- quizzer
- stackexchange
- texzilla
- tiddlywiki
- WriteLaTeX
status: publish
type: post
published: true
meta:
  _edit_last: '13'
  _cws_is_markdown_gmt: '2014-03-04 08:45:59'
  _rawhtml_settings: '0,0,0,0'
  _cws_is_markdown: '2'
  dsq_thread_id: '2321092002'
author:
  login: pkra
  email: peter.krautzberger@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

2014 is well on its way and there's already a slew of new cool things happening around the MathJax community -- it's about time for another community update!

### GitdenReader improves MathML support for epub3

[Gitden](http://gitden.com/) has released [GitdenReader 4 for Android](http://gitden.com/aos40-new-feature/) with improvements to the MathJax integration. Future improvements are in the works, so go check it out and provide feedback to the Gitden team!

### WriteLaTeX adds RichText editor with MathJax support

[WriteLaTeX](https://www.writelatex.com/) users can now see a live preview of their math in the editing pane as well. Thanks to MathJax support, users simply move their cursor into the equation to switch back to TeX. Check out the [WriteLaTeX demo](https://www.writelatex.com/docs?template=paper) and switch the editor to "RichText".

### Jekyll switches to Kramdown

Good news for MathJax users of Jekyll. [Jekyll switched to Kramdown](https://github.com/jekyll/jekyll/pull/1988) as default markdown processor which improves compatibility with MathJax. [Hattip to @pepper_chico](https://twitter.com/pepper_chico/status/432305779295920128)

### Stackexchange on Android adds MathJax support

The still brand new Stackexchange app for Android [now comes with MathJax support](http://meta.stackoverflow.com/a/214264).

### Mathdown alpha released

[Mathdown](http://mathdown.net/?doc=about) ([on github](https://github.com/cben/mathdown)) is a new, collaborative markdown+MathJax editor using CodeMirror and Firepad. Editing equations is easy, you simply move the cursor into an equation. Go [check it out](http://mathdown.net/?doc=about)!

### Quizzer adds MathJax support

[Frank Bennet](https://twitter.com/fgbjr/status/430710406315663360) has added MathJax support to [Quizzer](http://fbennett.github.io/quizzer/), a lightweight writing lab quiz engine for node.js.

### Draw.io adds MathJax support

[Draw.io](https://www.draw.io/) recently [added MathJax support](https://plus.google.com/+DrawIo1/posts/fci7sDcNi2x). For questions, head over to their [support page on G+](https://plus.google.com/+DrawIo1/posts/jHBTuTynzYY).

### New Firefox add-ons

Fred Wang has released two new Firefox plugins. [MathML Copy](https://addons.mozilla.org/en-US/firefox/addon/mathml-copy/) provides easy copy&amp;paste access to MathML while [MathJax Native MML](https://addons.mozilla.org/en-US/firefox/addon/mathjax-native-mathml/) lets users set MathJax to native MathML output, independent of page authors. You can read more at [Fred's Blog](http://www.maths-informatique-jeux.com/blog/frederic/?post/2014/01/29/New-MathML-Firefox-add-ons-on-AMO).

### TeXzilla 0.9.4 released

Fred Wang has also released version 0.9.4 of [TeXzilla](http://www.maths-informatique-jeux.com/blog/frederic/?post/2014/02/25/TeXZilla-0.9.4-Released), a TeX-to-MathML converter with iTeXMML compatible syntax.

### Tiddlywiki MathJax plugin news

The know well-known [Tiddlywiki MathJax plugin](https://github.com/guyru/tiddlywiki-mathjax) is now hosted on github -- go and contribute! (via [Phil Evans](https://twitter.com/swift_phil/status/426002431735238657)).

### On StackOverflow: input fields, canvas

A couple of interesting questions came up on StackOverflow.

*   Davide provided a [work around for input fields](http://stackoverflow.com/questions/21171107/mathjax-rendering-html-input-fields-in-mathml) in MathML+HTML5 (we plan to add support for foreign elements in MathML).

*   While MathJax does not provide canvas output right now, it's still possible to integrate MathJax output into a canvas. Recently, [a nice jsfiddle](http://jsfiddle.net/AndyNovo/7mdMz/) (using Easel.js) showed up on [this Stackoverflow question](http://stackoverflow.com/questions/21243632/latex-rendering-in-easeljs). For an approach using html2canvas.js, see [this jsfiddle](http://jsfiddle.net/RG7yG/4/).

### Snippets

*   AppMind's Android markdown editor [Minutes Text Notes Pro + Sync](https://web.archive.org/web/20150322055759/https://play.google.com/store/apps/details?id=com.saelimbilly.genericdatabaseapppro) now offers MathJax support.
*   The markdown editor LightPaper for Mac (`http://clockworkengine.com/lightpaper-mac/`) adds MathJax support.
*   LaTeXML recently completed its move and can [now be found on GitHub](https://github.com/brucemiller/LaTeXML). Go forth and contribute!

### Content, content, content

*   CarvingIT has released ScienceProblems.org `http://www.scienceproblems.org/` ([on github](https://github.com/CarvingIT/science-problems)), an open repository for math &amp; science problems.
*   At SocialAlgebra `http://www.socialalgebra.com/`, you'll find some school-level problems sets.
*   [Nowhere Near Ithaca](http://www.nowherenearithaca.com/) combined MathJax, D3.js, and JStat in an [interactive visualization of the Lognormal Distribution](http://www.nowherenearithaca.com/2013/12/equationlognormalhover-border1px-solid.html), with further tips for [wrapping it as a Chrome app](http://www.nowherenearithaca.com/2013/12/using-d3-and-mathjax-in-chrome-packaged.html))
