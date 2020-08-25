---
layout: post
title: MathJax v3.1.0 now available
date: 2020-08-25
author: Davide P. Cervone
categories:
- News
---

The MathJax team is pleased to announce version 3.1 of MathJax, released earlier today.  This is a feature release that includes a number of API improvements, new extensions, and updates to the assistive tools, as described below. It also includes several bug fixes.

See the individual issues and pull requests linked below, as well as the [What's new in v3.1](https://docs.mathjax.org/en/v3.1-latest/upgrading/whats-new-3.1.html) section of the MathJax documentation, for more details.

Also note that the demos in the [node examples](https://github.com/mathjax/MathJax-demos-node) have been updated and expanded to include examples of using a [simplified interface](https://github.com/mathjax/MathJax-demos-node/tree/master/simple) for MathJax in server-side node applications, [MathJax with Puppeteer](https://github.com/mathjax/MathJax-demos-node/tree/master/puppeteer), and [MathJax with jsdom](https://github.com/mathjax/MathJax-demos-node/tree/master/jsdom).

## New Features in this Release

* New `textmacros` extension for handling some macros in text-mode. ([#509](https://github.com/mathjax/MathJax-src/pull/509))
* Add `safe` extension and component. ([#514](https://github.com/mathjax/MathJax-src/pull/514))
* New German localization for speech output using the expression explorer.
* Updated options within the accessibility contextual menu. ([#505](https://github.com/mathjax/MathJax-src/pull/505))
* Allow MathML verification options to be specified in the input jax. ([#519](https://github.com/mathjax/MathJax-src/pull/519))
* Add enable/disable options to document handlers for a11y and menu. ([#499](https://github.com/mathjax/MathJax-src/pull/499))
* Add configuration options to `noundefined` extension. ([#507](https://github.com/mathjax/MathJax-src/pull/507))
* Fix problems with `mtextInheritFont`, and provide new `mtextFont` option. ([mathjax/MathJax#2189](https://github.com/mathjax/MathJax/issues/2189))
* Make `formatError` a configuration option for tex input jax. ([#483](https://github.com/mathjax/MathJax-src/pull/483))
* Improve `startup.promise` so it is always valid. ([mathjax/MathJax#2307](https://github.com/mathjax/MathJax/issues/2189))
* Add functions to manage math items within a given container. ([#351](https://github.com/mathjax/MathJax-src/issues/351))
* General improvements to input/output errors. ([#491](https://github.com/mathjax/MathJax-src/pull/491))
* Allow MathML verification options to be specified in the input jax. ([#519](https://github.com/mathjax/MathJax-src/pull/519))
* Update string processing to handle SMP unicode blocks better. ([#504](https://github.com/mathjax/MathJax-src/pull/504))
* Add TeX error as `data-mjx-error`, similar to compile/typeset errors. ([#490](https://github.com/mathjax/MathJax-src/pull/490))

## File Location Changes

* Normalize extension names to all lowercase with no underscores. ([#485](https://github.com/mathjax/MathJax-src/pull/485))
* Remove MathItem `bbox` property. ([#495](https://github.com/mathjax/MathJax-src/pull/495))
* Move `output/common/BBox.ts` to util directory. ([#494](https://github.com/mathjax/MathJax-src/pull/494))
* Move `output/common/CssStyles.ts` to `util/StyleList.ts`. ([#493](https://github.com/mathjax/MathJax-src/pull/493))

## Bug Fixes in this Release

* Fix LiteDOM comments and add support for DOCTYPE. ([#523](https://github.com/mathjax/MathJax-src/pull/523))
* Remove ids from assistive MathML to avoid duplicates. ([#525](https://github.com/mathjax/MathJax-src/pull/525))
* Fix SRE source location to work in node-main and components. ([#521](https://github.com/mathjax/MathJax-src/pull/521))
* Don't replace stylesheet unnecessarily. ([mathjax/MathJax#2454](https://github.com/mathjax/MathJax/issues/2454))
* Properly inherit `scriptminsize` and `scriptsizemultiplier`. ([#515](https://github.com/mathjax/MathJax-src/pull/515))
* Fix processing of `texClass` for multi-character `<mi>` elements. ([#503](https://github.com/mathjax/MathJax-src/pull/503))
* Fix `node-main` to be able to load SRE more easily. ([#479](https://github.com/mathjax/MathJax-src/pull/479))
* Fix problems with `texClass`. ([#512](https://github.com/mathjax/MathJax-src/pull/512))
* Handle `classList` when elements don't have it. ([mathjax/MathJax#2411](https://github.com/mathjax/MathJax/issues/2411))
* Make `\underset` explicitly turn off movablelimits. ([mathjax/MathJax#2460](https://github.com/mathjax/MathJax/issues/2460))
* Make `\boldsymbol\partial` work properly. ([mathjax/MathJax#2417](https://github.com/mathjax/MathJax/issues/2417))
* Fix issue with `\overbrace` in SVG output. ([mathjax/MathJax#2402](https://github.com/mathjax/MathJax/issues/2402))
* Fix processing of root directory under Windows. ([mathjax/MathJax#2486](https://github.com/mathjax/MathJax/issues/2486))
* Allow spaces after \begin, \end, and \ref when finding math delimiters. ([mathjax/MathJax#2494](https://github.com/mathjax/MathJax/issues/2494))
* Fix problem with maction when the math is converted from a string. ([mathjax/MathJax#2490](https://github.com/mathjax/MathJax/issues/2490))
* Fix Unicode mapping of \ncong ([mathjax/MathJax#2497](https://github.com/mathjax/MathJax/issues/2497))
* Remove extra remapping of stretchy characters ([mathjax/MathJax#2497](https://github.com/mathjax/MathJax/issues/2497))

## Availability of 3.1.0

Although version 3.1.0 was released earlier today, it may take a day or two for the new version to propagate to the various CDN network computers, so you may not see v3.1.0 immediately if you are loading mathjax using a generic `mathjax@2` URL.  You should be able to obtain it immediately if you use the full version `mathjax@3.1.0`.

You may also have a cached version in your browser, so may need to either clear the browser cache, or relaunch your browser (or both) in order to get the latest version (the cached version should expire in about a week, depending on the CDN being used).

Note that it is possible for some files to be updated before others, so it may be the case that users of websites that load extensions (either explicitly or by autoloading TeX packages) may get mixed versions for until the CDN versions stabilize, which should be within a day.  If you are loading one of the combined components (e.g., `tex-chml.js`), this is less likely to be an issue, and if you are loading a component ending in `-full` it is even less likely to occur.

Version 3.1.0 is available immediately from npm and GitHub for use in node applications.
