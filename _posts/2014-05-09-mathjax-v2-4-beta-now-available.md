---
layout: post
title: MathJax v2.4 beta now available
date: 2014-05-09 04:15:42.000000000 +02:00
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
  _cws_is_markdown: '2'
  _cws_is_markdown_gmt: '2014-05-09 11:15:42'
  _edit_last: '13'
  _rawhtml_settings: '0,0,0,0'
  dsq_thread_id: '2672171456'
author:
  login: pkra
  email: peter.krautzberger@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

Today we are entering the public beta phase of MathJax v2.4. This bug fix release includes over 70 improvements to increase the quality and stability of MathJax ([see below for details](#new-in-mathjax-v24)).

The beta is available via our CDN at [beta.mathjax.org/mathjax/latest/MathJax.js](http://beta.mathjax.org/mathjax/latest/MathJax.js) which you can load it in place of the version you are currently using; **note** this address can be accessed as via both _http_ and _https_.

Alternatively, you can get a [ZIP archive](https://github.com/mathjax/MathJax/archive/v2.4-latest.zip) to use locally or you can check out the `v2.4-beta` branch of MathJax by using the commands

    git clone git://github.com/mathjax/MathJax.git MathJax-2.4-beta
    cd MathJax-2.4-beta
    git checkout v2.4-beta

at an appropriate location on your server.

**Remember that this is still beta software**, so if you are not an experienced user, you may want to wait for the official 2.4 release.  We do not recommend that you use the 2.4-beta version for production environments, but do encourage you to test your sites with it.

If you are linking to [http://cdn.mathjax.org/mathjax/latest/MathJax.js](http://cdn.mathjax.org/mathjax/latest/MathJax.js), note that at the point of the official release of v2.4, the address will begin to serve MathJax v2.4. You can also continue to use v2.3 by linking to [http://cdn.mathjax.org/mathjax/2.3-latest/MathJax.js](http://cdn.mathjax.org/mathjax/2.3-latest/MathJax.js) instead — and you can change to that version at any point (it is available now). Once the official v2.4 release is made, the v2.4-beta address will be removed from the CDN.

The official release of v2.4 should occur within the next three weeks, but we want you to be able to start to test out the v2.4 features now.  Please report any bugs you find to the issue tracker at [https://github.com/mathjax/MathJax/issues](https://github.com/mathjax/MathJax/issues).

Thanks for your continuing interest in MathJax.  We hope that this release makes your MathJax experience even better.

The MathJax Team.

* * *

# New in MathJax v2.4

MathJax v2.4 is primarily a bug fix release. Numerous display bugs, line-breaking problems, and interface issues have been resolved; for a detailed listing please check the [release milestone](https://github.com/mathjax/MathJax/issues?milestone=2&amp;state=closed). The following are some of the highlights.

## Security

*   [#256](https://github.com/mathjax/MathJax/issues/256) Enable Content Security Policy compatibility.

## Interface

*   [#240](https://github.com/mathjax/MathJax/issues/240) prevent two identical uses of `\tag` to cause identical element id.
*   [#348](https://github.com/mathjax/MathJax/issues/348) fix `Show Math as` window crashing in IE8.
*   [#559](https://github.com/mathjax/MathJax/issues/559) remove user cookie configuration.
*   [#623](https://github.com/mathjax/MathJax/issues/623) fix localization on IE6--8.
*   [#685](https://github.com/mathjax/MathJax/issues/685) fix MathMenu and MathZoom extensions loading when `showMathMenu` set to false.
*   [#734](https://github.com/mathjax/MathJax/issues/734) compress menu PNGs.

## Line-breaking

*   [#617](https://github.com/mathjax/MathJax/issues/617) add linebreaking support for `mmultiscript` elements.
*   [#687](https://github.com/mathjax/MathJax/issues/687) fix forced line breaking aligning badly.
*   [#707](https://github.com/mathjax/MathJax/issues/707) fix ignored line breaks between two `mtext` elements.

## HTML-CSS/SVG/nativeMML display

*   [#387](https://github.com/mathjax/MathJax/issues/387) fix missing styling for `merror` in SVG output.
*   [#391](https://github.com/mathjax/MathJax/issues/391) fix linebreaking within fractions in SVG output.
*   [#423](https://github.com/mathjax/MathJax/issues/423), [#460](https://github.com/mathjax/MathJax/issues/460), [#749](https://github.com/mathjax/MathJax/issues/749) Zoom improvements: fix zoom box overflow in mobile Safari, fix zoom box for widths in `px`, fix zoom box overlay in Chrome.
*   [#470](https://github.com/mathjax/MathJax/issues/470) fix AMScd rendering in native MathML output.
*   [#473](https://github.com/mathjax/MathJax/issues/473) override `text-ident` of enclosing paragraph.
*   [#476](https://github.com/mathjax/MathJax/issues/476) improve big \Up/Downarrows.
*   [#580](https://github.com/mathjax/MathJax/issues/580) prevent CSS from overriding MathJax's em/ex detection.
*   [#619](https://github.com/mathjax/MathJax/issues/619) fix: vertical stretching arrows in table cells can cause extra space between rows.
*   [#699](https://github.com/mathjax/MathJax/issues/699) fix table column spacing in NativeMathML output on Firefox.
*   [#701](https://github.com/mathjax/MathJax/issues/701) fix clipping of stretched delimiters in HTML-CSS output.
*   [#703](https://github.com/mathjax/MathJax/issues/703) fix math axis not scaled in script sizes.
*   [#715](https://github.com/mathjax/MathJax/issues/715) fix hat `^` too large with local STIX fonts in HTML-CSS.
*   [#744](https://github.com/mathjax/MathJax/issues/744) improve root symbol rendering in ever-changing but always buggy Chrome.
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
*   [#719](https://github.com/mathjax/MathJax/issues/719) empty array lines should get correct height.
*   [#739](https://github.com/mathjax/MathJax/issues/739) fix `\operatorname*` and `\DeclareMathOperator*`.
*   [#746](https://github.com/mathjax/MathJax/issues/746) fix spacing for `\left ... \right`.
*   [#793](https://github.com/mathjax/MathJax/issues/793) allow unmatched groups in `\begin` \end` substitutions.
*   [#794](https://github.com/mathjax/MathJax/issues/794) fix spacing for `\bmod`.

## Asciimath

*   [#353](https://github.com/mathjax/MathJax/issues/353) add option for TeX-like `\phi` and `\varphii` behavior.
*   [#743](https://github.com/mathjax/MathJax/issues/743) add `mmlSpacing` option and set to true.
*   [#747](https://github.com/mathjax/MathJax/issues/747) fix processing error with invisible grouping.

## MathML Handling

*   [#328](https://github.com/mathjax/MathJax/issues/328) remove `_moz-*`-attributes and improve MathML processing in Firefox.
*   [#460](https://github.com/mathjax/MathJax/issues/469) fix default value of `mo@symmetric`.
*   [#478](https://github.com/mathjax/MathJax/issues/478) make `mfenced` element equivalent to its expanded form
*   [#561](https://github.com/mathjax/MathJax/issues/561) implement `menclose` notation `phaseorangle`.
*   [#578](https://github.com/mathjax/MathJax/issues/578) fix quote attributes for `ms` elements.
*   [#614](https://github.com/mathjax/MathJax/issues/614) handle nested `math` elements better.
*   [#684](https://github.com/mathjax/MathJax/issues/684) fix handling of double primes in superscripts.
*   [#691](https://github.com/mathjax/MathJax/issues/696), [#692](https://github.com/mathjax/MathJax/issues/692), update Content MathML extension: fix IE11, plus with leading negative number.
*   [#763](https://github.com/mathjax/MathJax/issues/763) fix `mglyph` elements rendering too small.

## Fonts

*   [#501](https://github.com/mathjax/MathJax/issues/501) add workaround for broken Fedora STIX fonts configuration.
*   [#517](https://github.com/mathjax/MathJax/issues/517) reset min/max width for MathJax font test.
*   [#576](https://github.com/mathjax/MathJax/issues/576) improve font matching.
*   [#615](https://github.com/mathjax/MathJax/issues/615) check validity of font names.
*   [#681](https://github.com/mathjax/MathJax/issues/681) fix MathJax font test breaking responsive layout.
*   [#711](https://github.com/mathjax/MathJax/issues/711) detect new webfonts when locally installed.
*   [#697](https://github.com/mathjax/MathJax/issues/697) fix bold-italic for new webfonts.

## Localization

*   [#753](https://github.com/mathjax/MathJax/issues/753) update locales from translatewiki.net; add Vietnamese, Asturia, Polish, Catalan, Czech, Kannada locales.
*   [#777](https://github.com/mathjax/MathJax/issues/777) fix menu orientation for RTL languages.

## Misc.

*   [#586](https://github.com/mathjax/MathJax/issues/586) add all input processors to `default.js`.
*   [#658](https://github.com/mathjax/MathJax/issues/658) fix IE 11 recognized as Firefox.
*   [#730](https://github.com/mathjax/MathJax/issues/730) ignore rendering targets that have been removed from document.
*   [#735](https://github.com/mathjax/MathJax/issues/735) work around webfont bug in Chrome 32+.
*   [#738](https://github.com/mathjax/MathJax/issues/738) improve workaround for fixed position bug in old IE versions.
*   [#737](https://github.com/mathjax/MathJax/issues/737) add third-party path variable (for centralized custom extension hosting).