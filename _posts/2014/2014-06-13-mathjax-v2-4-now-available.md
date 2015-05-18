---
layout: post
title: MathJax v2.4 now available
date: 2014-06-13 06:14:28.000000000 +02:00
categories:
- COMM
- Headline
- News
- Technology
tags: []
status: publish
type: post
published: true
meta:
  dsq_thread_id: '2761126294'
  _cws_is_markdown: '2'
  _cws_is_markdown_gmt: '2014-06-13 13:14:28'
  _rawhtml_settings: '0,0,0,0'
  _edit_last: '13'
author:
  login: pkra
  email: peter.krautzberger@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

After a smooth [beta run](http://www.mathjax.org/mathjax-v2-4-beta-now-available/), we're happy to officially release MathJax v2.4.

MathJax v2.4 is available on the CDN, and for download from GitHub; see [the documentation for details](http://docs.mathjax.org/en/latest/installation.html#obtaining-mathjax-via-an-archive).

Version 2.4 is available on the CDN at

> [http://cdn.mathjax.org/mathjax/2.4-latest/MathJax.js](http://cdn.mathjax.org/mathjax/2.4-latest/MathJax.js)

and **starting today** the files at the

> [http://cdn.mathjax.org/mathjax/latest/MathJax.js](http://cdn.mathjax.org/mathjax/latest/MathJax.js)

address will be switched over the v2.4; it might take a few hours for the changes to propagate out to the distributed cloud servers.

During the time that the files are making their way out to the CDN's servers, there may be a mixture of files in a browser cache, and so users may need to clear their cache and restart their browser in order to get a consistent version of the files.

If you are a page author and concerned about this, you can change (temporarily) to the `mathjax/2.4-latest` URL instead of `mathjax/latest` since that is a new address that will not have any cached older versions to worry about. You can switch back to `mathjax/latest` in a few days when the new version has migrated to all the locations in the cloud.

See [http://docs.mathjax.org/en/v2.4-latest/whats-new-2.4.html](http://docs.mathjax.org/en/v2.4-latest/whats-new-2.4.html) for details about the changes in v2.4. We anticipate a smooth upgrade from v2.3 to v2.4, but as always, let us know on the [bug tracker](http://github.com/mathjax/mathjax/issues) if you experience problems with this new version of MathJax.

Thank you for your continued support.

The MathJax Team.

* * *

## New in MathJax v2.4

MathJax v2.4 is primarily a bug fix release. Numerous display bugs, line-breaking problems, and interface issues have been resolved; for a detailed listing please check the [the documentation](http://docs.mathjax.org/en/v2.4-latest/whats-new-2.4.html). The following are some of the highlights.

## Content Security Policy

*   [#256](https://github.com/mathjax/MathJax/issues/256) Enable Content Security Policy compatibility.

## Interface

*   [#240](https://github.com/mathjax/MathJax/issues/240) prevent two identical uses of `\tag` to cause identical element id.
*   [#814](https://github.com/mathjax/MathJax/issues/814) add  TeX/Asciimath as annotation-xml to MathML output.

## Line-breaking

*   [#617](https://github.com/mathjax/MathJax/issues/617) add linebreaking support for `mmultiscript` elements.
*   [#687](https://github.com/mathjax/MathJax/issues/687) improve forced line breaking alignment.
*   [#707](https://github.com/mathjax/MathJax/issues/707) fix ignored line breaks between two `mtext` elements.

## HTML-CSS/SVG/nativeMML display

*   [#391](https://github.com/mathjax/MathJax/issues/391) fix linebreaking within fractions in SVG output.
*   [#423](https://github.com/mathjax/MathJax/issues/423), [#460](https://github.com/mathjax/MathJax/issues/460), [#749](https://github.com/mathjax/MathJax/issues/749) Zoom improvements
*   [#470](https://github.com/mathjax/MathJax/issues/470) fix AMScd rendering in native MathML output.
*   [#699](https://github.com/mathjax/MathJax/issues/699) fix table column spacing in NativeMathML output on Firefox.
*   [#770](https://github.com/mathjax/MathJax/issues/770) add support for dotted borders to SVG output.

## TeX emulation

*   [#367](https://github.com/mathjax/MathJax/issues/376) prevent `\mmltoken` from creating `annotation` elements.
*   [#377](https://github.com/mathjax/MathJax/issues/377) improve `&nbsp;` handling.
*   [#389](https://github.com/mathjax/MathJax/issues/389) fix operating spacing in `\split` and `\multiline` environments.
*   [#477](https://github.com/mathjax/MathJax/issues/477), [#459](https://github.com/mathjax/MathJax/issues/459) add `\textsf` and `\texttt` macros and enable `mtextInheritFont` for them.
*   [#547](https://github.com/mathjax/MathJax/issues/547) fix misalignment in nested fractions in HTML-CSS and SVG output.
*   [#624](https://github.com/mathjax/MathJax/issues/624) fix AMScd on IE6--7.
*   [#632](https://github.com/mathjax/MathJax/issues/632) fix `\Big` not accepting delimiters in braces
*   [#667](https://github.com/mathjax/MathJax/issues/667) fix loop in `bbox`.
*   [#691](https://github.com/mathjax/MathJax/issues/691) enable multiple `\label` in multiline environments like `align`, `eqnarray`, and `gather`.
*   [#739](https://github.com/mathjax/MathJax/issues/739) fix `\operatorname*` and `\DeclareMathOperator*`.
*   [#793](https://github.com/mathjax/MathJax/issues/793) allow unmatched groups in `\begin` \end` substitutions.
*   [#794](https://github.com/mathjax/MathJax/issues/794) fix spacing for `\bmod`.

## Asciimath

*   [#353](https://github.com/mathjax/MathJax/issues/353) add option for TeX-like `\phi` and `\varphii` behavior.
*   [#743](https://github.com/mathjax/MathJax/issues/743) add `mmlSpacing` option and set to true.
*   [#747](https://github.com/mathjax/MathJax/issues/747) fix processing error with invisible grouping.

## MathML Handling

*   [#561](https://github.com/mathjax/MathJax/issues/561) implement `menclose` notation `phaseorangle`.
*   [#691](https://github.com/mathjax/MathJax/issues/696), [#692](https://github.com/mathjax/MathJax/issues/692) improve Content MathML extension
*   [#328](https://github.com/mathjax/MathJax/issues/328) remove `_moz-*`-attributes and improve MathML processing in Firefox.
*   [#460](https://github.com/mathjax/MathJax/issues/469) fix default value of `mo@symmetric`.
*   [#478](https://github.com/mathjax/MathJax/issues/478) make `mfenced` element equivalent to its expanded form
*   [#578](https://github.com/mathjax/MathJax/issues/578) fix quote attributes for `ms` elements.
*   [#684](https://github.com/mathjax/MathJax/issues/684) fix handling of double primes in superscripts.

## Fonts

*   [#576](https://github.com/mathjax/MathJax/issues/576) improve font matching.
*   [#681](https://github.com/mathjax/MathJax/issues/681) fix MathJax font test breaking responsive layout.
*   [#711](https://github.com/mathjax/MathJax/issues/711) detect new webfonts when locally installed.
*   [#501](https://github.com/mathjax/MathJax/issues/501) add workaround for broken Fedora STIX fonts configuration.

## Localization

*   [#753](https://github.com/mathjax/MathJax/issues/753) update locales from translatewiki.net; add Vietnamese, Asturia, Polish, Catalan, Czech, Kannada locales.
*   [#777](https://github.com/mathjax/MathJax/issues/777) fix menu orientation for RTL languages.

## Misc.

*   [#658](https://github.com/mathjax/MathJax/issues/658) fix IE 11 recognized as Firefox.
*   [#730](https://github.com/mathjax/MathJax/issues/730) ignore rendering targets that have been removed from document.
*   [#737](https://github.com/mathjax/MathJax/issues/737) add third-party path variable (for centralized custom extension hosting).