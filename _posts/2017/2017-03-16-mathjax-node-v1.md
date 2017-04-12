---
layout: post
title: MathJax-node v1.0 released
date: 2017-03-16
categories:
  - News
tags: []
author: Peter Krautzberger
---


We're happy to announce the public release of MathJax-node v1.0. This marks the first major release and a milestone for enabling MathJax-quality math rendering in Node.js applications.

Since the start of its development in 2014, MathJax-node has seen several pre-releases and large-scale adoption, in particular on Wikipedia (via its new mathoid backend). Thanks to the feedback from the community, we could streamline the API for v1.0, removing several features in favor of separate modules. And of course we fixed several important issues.


## Release notes

Below is a summary of the release notes. The full release notes are [available on GitHub](https://github.com/mathjax/MathJax-node/releases/tag/1.0.0).


### Deprecated features
- remove `mj-page.js` (and rename `mj-single.js` to `main.js`)
- remove PNG generation features
- remove speech-rule-engine integration
- remove CLI tools
- drop support for Node.js < 4

**Note:** see [the readme](https://github.com/mathjax/MathJax-node#mathjax-node-) for examples that replicate the removed features.

### New features
- options for output as DOM nodes
- pass input data to output callback
- always generate textual alternatives from input

### Bug fixes
- TeX input: don't automatically load the `color` extension
- TeX input: fix `displayIndent` configuration option
- HTML output: strip unnecessary IDs
- SVG output: fix `ex` handling
- SVG output: add `xlink` prefix to `href` attribute in `<image>` tags
- SVG output: support physical units 
- allow HTML and SVG output to be generated simultaneously
- enable CSS output when no HTML output is requested
- ensure that `0` is treated like `0px` in padding and margins 
- fix state.ID

### Misc.
- README: improved documentation


Thanks for your continuing interest in MathJax and MathJax-node. We hope that this release makes your MathJax experience even better.

The MathJax Team.
