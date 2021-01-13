---
layout: post
title: MathJax v3.1.2 now available
date: 2020-09-20
author: Davide P. Cervone
categories:
- News
---

The MathJax team is pleased to announce version 3.1.2 of MathJax, released earlier today (version 3.1.1 contained an error that was fixed shortly after it was released).  This is a bug-fix release to address several issues that arose from the 3.1.0 release, particularly with the `textmacros` package for the TeX input jax.  It also updates the Speech-Rule Engine to version 3.1.1.

# Bugs Addressed in this release

* Fix issue with `\textit`, etc., not working with the `textmacros` extension enabled. ([2514](https://github.com/mathjax/MathJax/issues/2514))
* Add 'smart quote' version of acute and grave accents in `textmacros` extension. ([2526](https://github.com/mathjax/MathJax/issues/2526))
* Add missing support for `\ref` and `\eqref` in `textmacros` extension. ([2528](https://github.com/mathjax/MathJax/issues/2528))
* Only ignore space following alphabetic control sequences in `textmacros`. ([2527](https://github.com/mathjax/MathJax/issues/2527))
* Fix issue with `textmacros` causing incorrect display in SVG mode. ([2524](https://github.com/mathjax/MathJax/issues/2524))
* Make sure configuration renaming is performed for *-full components. ([2516](https://github.com/mathjax/MathJax/issues/2516))
* Handle AsciiMath configuration properly, in particular, `displaystyle`. ([2520](https://github.com/mathjax/MathJax/issue/2520))
* Convert mu to em in CD environment. ([2513](https://github.com/mathjax/MathJax/issues/2513))
* Fix autoload to handle macro or `\begin` followed by spaces. ([2511](https://github.com/mathjax/MathJax/issues/2511))
* Update `convert()` to accept `family` parameter ([2512](https://github.com/mathjax/MathJax/issues/2512))


# Changes in Speech-Rule Engine

* Introduces handling of direct speech attributes like `aria-label`, `alt`, `exact-speech`.
* Handling of elements like `mglyph` if they contain a direct speech attribute.
* Allows floats as part of mixed numbers.
* A number of fixes to the Clearspeak and Nemeth rule sets.
* Fixes regression of SVG highlighter.
