---
layout: post
title: MathJax v2.5 beta now available
date: 2015-01-06 06:47:07.000000000 +01:00
categories:
- News
tags:
- mathml
status: publish
type: post
published: true
meta:
  _cws_is_markdown: '2'
  _cws_is_markdown_gmt: '2015-01-06 14:55:16'
  _rawhtml_settings: '0,0,0,0'
  _edit_last: '13'
author:
  login: pkra
  email: peter.krautzberger@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---
Today we are entering the public beta phase of MathJax v2.5. This release focused on improving rendering speed and MathML support.

The 2.5 release improves the speed of the HTML-CSS output by 30-40% (depending on content complexity, with higher gains in more complex situations) and introduces a new preview output (CommonHTML) which currently provides a rougher layout but is ~10x faster than the HTML-CSS output; in the long run, the CommomHTML output will reach the quality of the HTML-CSS and SVG outputs.

In terms of MathML support, Content MathML is now fully supported via a new extension and we have improved the experimental support for elementary math elements (with special thanks to contributions from David Carlisle). The 2.5 release also includes over 70 bug fixes to increase the quality and stability of MathJax ([see below for details](#new-in-release)).

The beta is available via our CDN at [beta.mathjax.org/mathjax/latest/MathJax.js](https://beta.mathjax.org/mathjax/latest/MathJax.js) which you can load it in place of the version you are currently using. Alternatively, you can get a [ZIP archive](https://github.com/mathjax/MathJax/archive/v2.5-latest.zip) or access the branch [on GitHub](https://github.com/mathjax/MathJax/tree/v2.5-latest). 

**Note:** If you are using [a pre-defined configuration](http://docs.mathjax.org/en/latest/config-files.html), please note the new fast-preview mode is activated in these. If you want to de-activate it on your page, add the following to your page **before** `MathJax.js` is loaded.

      <script type="text/javascript">
        window.MathJax = {
          menuSettings: {CHTMLpreview: false}
        };
      </script>

<br>
As a user, you can deactivate the Fast Preview via the MathJax menu. Righ/Cmd-click any equation and go to `Math Settings -> Math Renderer -> Fast Preview`.

**Remember that this is still beta software**, so if you are not an experienced user, you may want to wait for the official 2.5 release. We do not recommend that you use the 2.5-beta version for production environments, but do encourage you to test your content with it.

If you are linking to <http://cdn.mathjax.org/mathjax/latest/MathJax.js>, note that at the point of the official release of v2.5, the address will begin to serve MathJax v2.5. You can also continue to use v2.4 by linking to <http://cdn.mathjax.org/mathjax/2.4-latest/MathJax.js> instead — and you can change to that version at any point (it is available now). Once the official v2.5 release is made, the v2.5-beta address will be removed from the CDN.

The official release of v2.5 should occur within the next three weeks, but we want you to be able to start to test out the v2.5 features now. Please report any bugs you find to the issue tracker at <https://github.com/mathjax/MathJax/issues>.

Thanks for your continuing interest in MathJax. We hope that this release makes your MathJax experience even better.

The MathJax Team.

* * * * *

## New in MathJax v2.5 {#new-in-release}

MathJax v2.5 includes a number of new features, as well a more than 70 important bug fixes. The following are some of the highlights.

### Features

* _Speed improvements._ The HTML-CSS output performance was improved by 30-40% (depending on content complexity, with higher gains in more complex content such as very long documents).
* _New output for fast preview._ The new CommonHTML output provides a rough but 10x-faster rendering. The <tt><span>CHTML-preview</span></tt> extension will use this fast output as a preview mode for HTML-CSS or SVG output.
* _Improved Content MathML support._ Content MathML is now fully supported via a new extension, in particular this allows customization of the conversion process. [See our documentation](http://docs.mathjax.org/en/latest/mathml.html#content-mathml) for loading the extension.
* _Improved elementary math support_ The experimental support for elementary math elements has been significantly improved special thanks to David Carlisle. It now ships in a separate extension <tt>mml3.js</code>.</tt>
* _NodeJS compatibility_. Enable the implementation of a NodeJS API (released as [MathJax-node](https://github.com/mathjax/MathJax-node)).

Numerous display bugs, line-breaking problems, and interface issues have been resolved; for a detailed listing please check the [release milestone](https://github.com/mathjax/MathJax/issues?milestone=2&amp;state=closed).

### Interface

*   [#834](https://github.com/mathjax/MathJax/issues/834) Fix incorrect line-width when zooming which can cause line-breaking problems.
*   [#918](https://github.com/mathjax/MathJax/issues/918) Fix zoom box size in NativeMML output.
*   [#835](https://github.com/mathjax/MathJax/issues/835) Fix zoom for equations extending beyond their bounding box.
*   [#893](https://github.com/mathjax/MathJax/issues/893) Fix outdated ARIA values for HTML-CSS and SVG output.
*   [#860](https://github.com/mathjax/MathJax/issues/860), [#502](https://github.com/mathjax/MathJax/issues/502) Preserve RDFa, microdata, aria labels, and other attributes in HTML-CSS and SVG output.
*   [#935](https://github.com/mathjax/MathJax/issues/935) Escape special characters in TeX annotations.
*   [#912](https://github.com/mathjax/MathJax/issues/912) Fix missing <tt>mstyle</tt> attributes in <tt>toMathML</tt> output.
*   [#971](https://github.com/mathjax/MathJax/issues/971) Fix lost attributes when <tt>toMathML</tt> is restarted.

## Line-breaking

*   [#949](https://github.com/mathjax/MathJax/issues/949) Fix processing error due to empty elements.

### HTML-CSS/SVG/nativeMML display

*   [#863](https://github.com/mathjax/MathJax/issues/863) Fix broken MathML preview in MathML pre-processor.
*   [#891](https://github.com/mathjax/MathJax/issues/891) Fix deprecated regexp affecting mtable alignment.
*   [#323](https://github.com/mathjax/MathJax/issues/323) Improve MathPlayer compatibility on Internet Explorer 10+.
*   [#826](https://github.com/mathjax/MathJax/issues/826) Scale content in fallback fonts.
*   [#898](https://github.com/mathjax/MathJax/issues/898) Fix invalid SVG output when using fallback characters.
*   [#800](https://github.com/mathjax/MathJax/issues/800) Fix misplaced background color for stretched mphantom elements in SVG output.
*   [#490](https://github.com/mathjax/MathJax/issues/490) Fix <tt>\overline</tt> issues in combination with text-style limits.
*   [#829](https://github.com/mathjax/MathJax/issues/829) Implement <tt>\delimitershortfall</tt>, <tt>\delimiterfactor</tt>.
*   [#775](https://github.com/mathjax/MathJax/issues/775) Fix lost text content in SVG output.
*   [#917](https://github.com/mathjax/MathJax/issues/) Fix cases of incorrect bounding boxes in HTML-CSS output.
*   [#807](https://github.com/mathjax/MathJax/issues/807) Fix clipping of table columns in HTML-CSS output.
*   [#804](https://github.com/mathjax/MathJax/issues/804) Fix cases of uneven subscripts.
*   [#944](https://github.com/mathjax/MathJax/issues/944) Fix rendering error when scaling-all-math of labeled equations.
*   [#930](https://github.com/mathjax/MathJax/issues/930) Fix SVG output failure when <tt>&lt;math&gt;</tt> element has inline styles with border or padding.
*   [#931](https://github.com/mathjax/MathJax/issues/931) Fix baseline alignment in Safari 6.2/7.1/8.0.
*   [#937](https://github.com/mathjax/MathJax/issues/937) Fix incorrect width in MathJax font data affecting underlining.
*   [#966](https://github.com/mathjax/MathJax/issues/966) Fix SVG output overlapping when using prefix notation.
*   [#975](https://github.com/mathjax/MathJax/issues/975) Fix preview not clearing with CHTML-preview extension.
*   [#970](https://github.com/mathjax/MathJax/issues/970) Fix moveable limits for inline operators in <tt>CommonHTML</tt> output.

### TeX emulation

*   [#881](https://github.com/mathjax/MathJax/issues/881) Allow <tt>\newenvironment</tt> to process optional parameters.
*   [#889](https://github.com/mathjax/MathJax/issues/889) remove extra space around some parenthesis constructs.
*   [#856](https://github.com/mathjax/MathJax/issues/856) Recognize comma as decimal delimiter in units.
*   [#877](https://github.com/mathjax/MathJax/issues/877) Fix bug related to multiple accent having different width.
*   [#832](https://github.com/mathjax/MathJax/issues/832) Fix multline environment not being centered in HTML-CSS output.
*   [#776](https://github.com/mathjax/MathJax/issues/776) Fix stretchy delimiters of <tt>binom</tt> and <tt>choose</tt>.
*   [#900](https://github.com/mathjax/MathJax/issues/900) Fix <tt>\buildrel</tt> getting TeX class ORD instead of REL.
*   [#890](https://github.com/mathjax/MathJax/issues/890) Enable px as dimension in <tt><span>\\[...]</span></tt>.
*   [#901](https://github.com/mathjax/MathJax/issues/901) Allow <tt>\limits</tt> in more cases and add errors for some cases of multiple subscripts.
*   [#903](https://github.com/mathjax/MathJax/issues/903) Allow <tt>\hfill</tt> to set alignment in matrices and arrays (for old fashioned TeX layout).
*   [#902](https://github.com/mathjax/MathJax/issues/902) Convert <tt>\eqalignno</tt> and <tt>\leqalignno</tt> into <tt>mlabeledtr</tt>.
*   [#906](https://github.com/mathjax/MathJax/issues/906) Allow comma separated parameters in <tt>\mmlToken</tt>.
*   [#913](https://github.com/mathjax/MathJax/issues/913) Allow attributes in <tt>\mmlToken</tt> whose defaults are false or blank.
*   [#972](https://github.com/mathjax/MathJax/issues/972) Fix autoload of the <tt>color</tt> extension.
*   [#375](https://github.com/mathjax/MathJax/issues/475) Add <tt>\{</tt>,``}``, and <tt>\\</tt> to macros working within <tt>\text{}</tt> etc.
*   [#969](https://github.com/mathjax/MathJax/issues/969) Fix incorrect spacing with some <tt>\frac</tt> constructs.
*   [#982](https://github.com/mathjax/MathJax/issues/982) Fix incorrect spacing in <tt class="docutils literal"><span class="pre">aligned</span></tt> environments.

### Asciimath

*   [#851](https://github.com/mathjax/MathJax/issues/851) Prevent leading space in quote from causing processing errors.
*   [#431](https://github.com/mathjax/MathJax/issues/431) Fix handling of special characters in exponents.
*   [#741](https://github.com/mathjax/MathJax/issues/741) Add underbrace macro.

### MathML Handling

*   [#847](https://github.com/mathjax/MathJax/issues/847) Fix line-breaks in annotation elements.
*   [#805](https://github.com/mathjax/MathJax/issues/805) Prevent empty annotation elements from causing math processing errors.
*   [#769](https://github.com/mathjax/MathJax/issues/769) Update <tt>indentshift</tt> implementation to meet clarified MathML specification.
*   [#768](https://github.com/mathjax/MathJax/issues/768) Fix processing of percentage values for <tt>indenshift</tt>.
*   [#839](https://github.com/mathjax/MathJax/issues/839) Update inheritance of <tt>displaystyle</tt> in <tt>mtable</tt> to meet clarified MathML specification.
*   [#695](https://github.com/mathjax/MathJax/issues/695) Allow Content MathML conversion to be customized.

### Fonts

*   [#845](https://github.com/mathjax/MathJax/issues/845) Fix webfont bug in Safari 7.
*   [#950](https://github.com/mathjax/MathJax/issues/950) Fix webfont bug in IE 11.

### Localization

*   [#979](https://github.com/mathjax/MathJax/issues/979) Updated locales thanks to Translatewiki.net; activate locales for Scots and Southern Balochi.

### APIs

*   [#873](https://github.com/mathjax/MathJax/issues/873) Combine array of elements when typesetting.
*   [#693](https://github.com/mathjax/MathJax/issues/693) Add API to allow listeners to be cleared.

## Misc

*   [#872](https://github.com/mathjax/MathJax/issues/872) Add small delay between input and output phase to prevent performance degredation.
