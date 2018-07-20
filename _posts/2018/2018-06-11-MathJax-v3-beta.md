---
layout: post
title: MathJax v3 beta released
date: 2018-06-11
categories:
- News
status: publish
type: post
published: true
author: Davide P. Cervone
---

The MathJax team has been working hard over the past year and a half on a major rewrite of MathJax from the ground up, with the goal of modernizing MathJax's internal infrastructure, bringing it more flexibility for use with contemporary web technologies, making it easier to use with NodeJS for pre-processing and server-side support, and making it faster to render your mathematics. We have made headway in all these areas and we are pleased to announce the first public [beta release of MathJax v3](https://github.com/mathjax/mathjax-v3/releases/tag/3.0.0-beta.1).

## Where to Find the Beta Release

The code for the release is available in the [beta](https://github.com/mathjax/mathjax-v3/tree/beta) branch of the [MathJax v3](https://github.com/mathjax/mathjax-v3) github repository.

Examples of how to use MathJax v3 in web pages are available in the [mj3-demos](https://github.com/mathjax/mj3-demos) repository.  This includes several pre-packaged versions of MathJax for common use cases (e.g., converting TeX to HTML in a web page) that you can link to for your own test pages, along with sample HTML pages that call them, and documentation on how to configure MathJax v3.  There are also instructions on how to make your own custom webpacked version of MathJax v3.

Examples of how to use MathJax v3 in web pages are available in the [mj3-demos-node](https://github.com/mathjax/mj3-demos-node) repository.  These include samples of how to convert a TeX string to an HTML string or to a MathML string, for example.

## What's Included in MathJax v3

This beta version includes two input processors (TeX and MathML) and one output processor (CommonHTML).  Other input and output processors (e.g., AsciiMath input and SVG output) will be added in the future.

The current TeX input processor has all the core functionality of the MathJax v2 TeX input, and several of the extensions built in, but some extensions are still to come.  For example, `\unicode`, `\bbox`, and the `color` extension are not yet available.

The CommonHTML output implements all the MathML elements that v2 does, but does not yet include support for line breaking (neither automatic nor explicit ones); this will be implemented in a later beta version.  Currently, there is no support for characters that are not within the MathJax TeX fonts, but that will be included in the future.

The MathJax contextual menu is not yet implemented.

The ability to customize MathJax through a configuration object, as in v2, is limited at the moment, but see the [mj3-demos](https://github.com/mathjax/mj3-demos) repository for examples of how this can be done currently.  In version 3, this type of customization is handled through building custom packed versions of MathJax, and that is not yet fully documented; again, the demo repository includes examples.

## NOTE

Mathjax v3 is in early beta release. **Do not use this in production**, but please test it and report issues on the [MathJax v3 issue tracker](https://github.com/mathjax/mathjax-v3/issues)!

We are continuing to add more functionality to version 3, and will be releasing additional beta versions as new features become available.  So watch this site for more news to come!
