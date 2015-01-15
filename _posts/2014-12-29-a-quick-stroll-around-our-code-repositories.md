---
layout: post
title: A quick stroll around our code repositories
date: 2014-12-29 14:02:09.000000000 +01:00
categories:
- COMM
tags: []
status: publish
type: post
published: true
meta:
  _cws_is_markdown: '2'
  _cws_is_markdown_gmt: '2014-12-29 22:02:09'
  _rawhtml_settings: '0,0,0,0'
  _edit_last: '13'
author:
  login: pkra
  email: peter.krautzberger@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

A lot has happened at MathJax this year. As the end of the year is closing in, we wanted to take a quick stroll around [our repositories on GitHub](https://github.com/mathjax/) to highlight a few new and old parts, give you an idea where things are moving, and, if you are interested, show you some points of entry for contributions.

Of course, the starting point for all things MathJax is [our core MathJax repository](https://github.com/mathjax/MathJax) where you will find the code of MathJax, including all supported fonts as well as all core extensions. The core repository also contains [our development wiki](https://github.com/mathjax/MathJax/wiki), including [our roadmaps](https://github.com/mathjax/MathJax/wiki/Mathjax-roadmap). If you want to contribute to core MathJax, please check out  [our tracker for open issues](https://github.com/mathjax/MathJax/issues), our [Contributing.md](https://github.com/mathjax/MathJax/blob/master/CONTRIBUTING.md), and [the wiki pages](https://github.com/mathjax/MathJax/wiki).

If you want to dive deeper into MathJax development, then you might want to stop by MathJax-test and MathJax-dev. As you might expect, [MathJax-test](https://github.com/mathjax/mathjax) stores our Selenium-based test-suite with ~1500 tests. On the other hand, [MathJax-dev](https://github.com/mathjax/mathjax) hosts our development tools, including our setup for packing MathJax, our tools for handling fonts and some other miscalleneous tools. There's lots of opportunity for contributing here, too. If you're into testing, the suite could always use some help to get improve (or replace) and if you're a Grunt/Gulp person, we've been thinking about re-implementing our build tools and would welcome your ideas -- either way, just open an issue to get going.

If hacking MathJax directly seems a bit daunting, you could skip ahead to MathJax-third-party-extensions or MathJax-examples. We started [MathJax-third-party-extensions](https://github.com/mathjax/MathJax-third-party-extensions) to collect extensions that don't quite fit in the core right now. It's easy to [write an extension](http://docs.mathjax.org/en/latest/extension-writing.html) or improve an existing one. Of course, [MathJax-examples](https://github.com/mathjax/MathJax-examples) does what it says on the label -- providing self-contained examples of working with MathJax (and of course there can never be enough examples).

We're also quite proud to host the [repository for AsciiMathML](https://github.com/mathjax/asciimathml) and [its new website](https://github.com/asciimath/asciimath.github.io) thanks to Peter Jipsen and David Lippman. If you're interested in this particular gem for putting math on the web, please stop by, ask questions, and, of course, contribute.

If you are less into code, then MathJax-docs and MathJax-i18n might still provide nice spot to pause our stroll. [MathJax-docs](https://github.com/mathjax/MathJax-docs) contains the source for our documentation. All pages of our docs contain a link at the bottom to immediately head over to GitHub. So if you ever spot something that needs improving, you can get right on it. [MathJax-i18n](https://github.com/mathjax/MathJax-i18n) stores the translation data for our UI, provided by the [awesome community over on TranslateWiki.net](https://translatewiki.net/w/i.php?title=Special:MessageGroupStats&amp;group=out-mathjax-0-all#sortable:3=asc "Special:MessageGroupStats&amp;group=out-mathjax-0-all#sortable:3=asc"). We'd be thrilled if you stopped by and contributed your translation on TranslateWiki.net.

Then there are two repositories mostly in hibernation right now, ctop and MathJax-profiler. The work in [ctop](https://github.com/mathjax/ctop) served to re-implement MathJax ContentMathML support and [MathJax-Profiler](https://github.com/mathjax/MathJax-profiler) provides a script for timing all MathJax components individually.

Last but very much not least, our newest repositories are MathJax-node and speech-rule-engine which we could create this year thanks to support from [Benetech](http://benetech.org/). [MathJax-node](https://github.com/mathjax/MathJax-node) stores our implementation of a NodeJS API so that you can use MathJax server-side for preprocessing, image rendering, quality control etc. Closely connected is [speech-rule-engine](https://github.com/mathjax/speech-rule-engine) based on Google ChromeVox which MathJax-node can leverage to generate and embed speech-strings for accessibilty purposes. This has been important work for us and we're thrilled to work more on accessibility features in 2015.

We hope you enjoy our little stroll and perhaps stop by one of our repos to provide feedback or contribute.