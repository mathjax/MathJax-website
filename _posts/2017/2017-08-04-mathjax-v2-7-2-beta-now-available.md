---
layout: post
title: MathJax v2.7.2 beta now available
date: 2017-08-04
categories:
- News
status: publish
type: post
published: true
author: Peter Krautzberger
---

Today we are entering the public beta phase of MathJax v2.7.2, a bug-fix release with over 30 important bug fixes.

This release includes a workaround for a regression in Safari when using combining characters as well as an important update to the MathJax Accessibility Extensions and the underlying  speech-rule-engine, greatly improving performance and quality.

For details on all bug fixes, please [see below](#new-in-release).

The beta should be available on all CDN providers, e..g., [cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2-beta.1/MathJax.js](https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2-beta.1/MathJax.js) which you can load it in place of the version you are currently using. Alternatively, you can get a [ZIP archive](https://github.com/mathjax/MathJax/archive/2.7.2-beta.1.zip) or access the branch [on GitHub](https://github.com/mathjax/MathJax/tree/2.7.2-beta.1).

---

**Remember that this is still beta software**, so if you are not an experienced user, you may want to wait for the official 2.7.2 release. We do not recommend that you use the -beta version for production environments, but do encourage you to test your content with it.

The official release of v2.7.2 should occur within the next few weeks, but we want you to be able to start to test out the v2.7.2 features now. Please report any bugs you find to the issue tracker at <https://github.com/mathjax/MathJax/issues>.

Thanks for your continuing interest in MathJax. We hope that this release makes your MathJax experience even better.

The MathJax Team.

* * * * *

## New in MathJax v2.7.2 {#new-in-release}

<h3>Accessibility</h3>
<ul>
<li>Upgrade Accessibility Extensions to <a href="https://github.com/mathjax/MathJax-a11y/releases/tag/1.2.3">v1.2.3</a></li>
</ul>
<h3>API</h3>
<ul>
<li>Properly handle arrays of elements in <code>Typeset()</code> call without callbacks. <a href="https://github.com/mathjax/MathJax/issues/1680">#1680</a> <a href="https://github.com/mathjax/MathJax/pull/1794">#1794</a></li>
</ul>
<h3>Output</h3>
<ul>
<li>Remap newlines to spaces. <a href="https://github.com/mathjax/MathJax/issues/1694">#1694</a> <a href="https://github.com/mathjax/MathJax/pull/1783">#1783</a></li>
<li>Fix placement of underlines in script styles. <a href="https://github.com/mathjax/MathJax/issues/1686">#1686</a> <a href="https://github.com/mathjax/MathJax/pull/1792">#1792</a></li>
<li>[CommonHTML] Fix problem with ex-height detection in some instances. <a href="https://github.com/mathjax/MathJax/issues/1664">#1664</a> <a href="https://github.com/mathjax/MathJax/pull/1671">#1671</a></li>
<li>[CommonHTML] Add space between fractions when <code>useMMLspacing</code> is in effect. <a href="https://github.com/mathjax/MathJax/issues/1626">#1626</a> <a href="https://github.com/mathjax/MathJax/pull/1786">#1786</a></li>
<li>[CommonHTML] Don't force width of large collections of text. <a href="https://github.com/mathjax/MathJax/issues/1718">#1718</a> <a href="https://github.com/mathjax/MathJax/pull/1788">#1788</a></li>
<li>[CommonHTML] Fix bounding box issues with some stretchy characters. <a href="https://github.com/mathjax/MathJax/issues/1712">#1712</a> <a href="https://github.com/mathjax/MathJax/pull/1789" data-url="https://github.com/mathjax/MathJax/issues/1789">#1789</a></li>
<li>[CommonHTML] Fix problem with table row and column lines <a href="https://github.com/mathjax/MathJax/issues/1711">#1711</a> <a href="https://github.com/mathjax/MathJax/pull/1790">#1790</a></li>
<li>[CommonHTML] Improve position of stretchy accents. <a href="https://github.com/mathjax/MathJax/issues/1735">#1735</a> <a href="https://github.com/mathjax/MathJax/pull/1787">#1787</a></li>
<li>[CommonHTML] Fix problem with <code>&lt;=&gt;</code> arrow in mhchem. 1657 <a href="https://github.com/mathjax/MathJax/pull/1795">#1795</a></li>
<li>[CommonHTML] Fix <code>getNode()</code> method not descending into all the children. <a href="https://github.com/mathjax/MathJax/issues/1691">#1691</a> <a href="https://github.com/mathjax/MathJax/pull/1791">#1791</a></li>
<li>[CommonHTML] Use non-combining vector arrow to work-around Safari regression. <a href="https://github.com/mathjax/MathJax/issues/1709" >#1709</a> <a href="https://github.com/mathjax/MathJax/pull/1796" >#1796</a></li>
<li>[CommonHTML] [SVG] Localize some variables that where accidentally global. <a href="https://github.com/mathjax/MathJax/issues/1806" >#1806</a> <a href="https://github.com/mathjax/MathJax/pull/1809" >#1809</a></li>
<li>[HTML-CSS] Work around for regression in Safari wrt combining characters. <a href="https://github.com/mathjax/MathJax/issues/1737" >#1737</a> <a href="https://github.com/mathjax/MathJax/pull/1775" >#1775</a></li>
<li>[HTML-CSS] Handle FontFaceBug interaction with web fonts in Chrome. <a href="https://github.com/mathjax/MathJax/issues/1774" >#1774</a> <a href="https://github.com/mathjax/MathJax/pull/1776" >#1776</a></li>
<li>[HTML-CSS] Fix typo in STIX font data. <a href="https://github.com/mathjax/MathJax/issues/1683" >#1683</a> <a href="https://github.com/mathjax/MathJax/pull/1785" >#1785</a></li>
<li>[HTML-CSS] Fix positioning problem with accents at large math sizes. <a href="https://github.com/mathjax/MathJax/issues/1798" >#1798</a>. <a href="https://github.com/mathjax/MathJax/pull/1799" >#1799</a></li>
<li>[HTML-CSS] [SVG] Add minimum height for accents. <a href="https://github.com/mathjax/MathJax/issues/1706" >#1706</a> <a href="https://github.com/mathjax/MathJax/pull/1781" >#1781</a></li>
</ul>
<h3>Input</h3>
<ul>
<li>[TeX] Allow negative dimensions in <code>\Rule</code> and add <code>\rule</code> macro. <a href="https://github.com/mathjax/MathJax/issues/1666" >#1666</a> <a href="https://github.com/mathjax/MathJax/pull/1673" >#1673</a></li>
<li>[TeX] Better error messages for <code>\shoveleft</code> and <code>\shoveright</code>. <a href="https://github.com/mathjax/MathJax/issues/1701" >#1701</a> <a href="https://github.com/mathjax/MathJax/pull/1782" >#1782</a></li>
<li>[TeX] Better test for <code>\text{}</code> in <code>\cases{}</code>. <a href="https://github.com/mathjax/MathJax/issues/1482" >#1482</a> <a href="https://github.com/mathjax/MathJax/pull/1793" >#1793</a></li>
<li>[TeX] Fix spacing <code>aligned</code>/<code>alignedat</code>. <a href="https://github.com/mathjax/MathJax/issues/1690">#1690</a> <a href="https://github.com/mathjax/MathJax/pull/1784">#1784</a></li>
<li>[TeX] Add more unicode-based intergrals for mediawiki-texvc. <a href="https://github.com/mathjax/MathJax/pull/1723">#1723</a> <a href="https://github.com/mathjax/MathJax/pull/1810">#1810</a></li>
<li>[MathML] Fix problem with namespaces on internal element. <a href="https://github.com/mathjax/MathJax/issues/1755">#1755</a> <a href="https://github.com/mathjax/MathJax/pull/1756">#1756</a></li>
</ul>
<h3>Interface:</h3>
<ul>
<li>Fix typo in the localization menu <a href="https://github.com/mathjax/MathJax/issues/1746">#1746</a></li>
</ul>
<h3>Misc.</h3>
<ul>
<li>Fixed typos in comments <a href="https://github.com/mathjax/MathJax/pull/1660" >#1660</a></li>
<li>Fix trailing comma <a href="https://github.com/mathjax/MathJax/issues/1670">#1670</a></li>
<li>Fix typo in function name <a href="https://github.com/mathjax/MathJax/pull/1797">#1797</a></li>
</ul>

For more information see also the [2.7.2 milestone](https://github.com/mathjax/MathJax/milestone/16?closed=1).
