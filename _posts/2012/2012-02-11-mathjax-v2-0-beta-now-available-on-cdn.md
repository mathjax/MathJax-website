---
layout: post
title: MathJax v2.0-beta now available on CDN
date: 2012-02-11 14:51:47.000000000 +01:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '5'
  _rawhtml_settings: '0,0,0,0'
  dsq_thread_id: ''
author:
  login: PeterK
  email: info@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

For the past eight months, we've been busy putting together version 2.0 of MathJax, which includes a number of important new features, enhancements, and bug fixes.  The most significant of these are described below.  Today we are releasing a public beta version of MathJax v2.0, available at [http://cdn.mathjax.org/mathjax/2.0-latest/MathJax.js](http://cdn.mathjax.org/mathjax/2.0-latest/MathJax.js) which you can load in place of the current version of MathJax that you are using.  Alternatively, you can get a ZIP archive to use locally via [https://github.com/mathjax/MathJax/zipball/v2.0-latest](https://github.com/mathjax/MathJax/zipball/v2.0-latest) or you can check out the v2.0-candidate branch of MathJax by using the commands

<pre>git clone git://[github.com/mathjax/MathJax.git](http://github.com/mathjax/MathJax.git) MathJax-2.0
cd MathJax-2.0
git checkout v2.0-candidate</pre>

at an appropriate location on your server.

**Remember that this is still beta software**, so if you are not an experienced user, you may want to wait for the official 2.0 release.  We do not recommend that you use the 2.0-beta version for production environments, but do encourage you to test your sites with it to be sure there are no problems before the cutover to v2.0 occurs, which should be within the next two weeks.  At that point, the [http://cdn.mathjax.org/mathjax/latest/MathJax.js](http://cdn.mathjax.org/mathjax/latest/MathJax.js) address will begin to serve MathJax v2.0, but you can continue to use v1.1a by linking to [http://cdn.mathjax.org/mathjax/1.1-latest/MathJax.js](http://cdn.mathjax.org/mathjax/1.1-latest/MathJax.js) instead, and you can change to that version at any point (it is available now).  Once the official 2.0 release is made, the 2.0-beta address will be removed.

While the code is complete, we are still working on the documentation.  Many of the new features are new extensions that you can add to your configuration; see [https://github.com/mathjax/MathJax/tree/v2.0-latest/unpacked/extensions/](https://github.com/mathjax/MathJax/tree/v2.0-latest/unpacked/extensions/) and its TeX and HTML-CSS subdirectories.  The comments in the extension files should tell you what they do and how to configure them.  Other features are controlled by new configuration parameters, which you will find in [https://github.com/mathjax/MathJax/tree/v2.0-latest/config/default.js](https://github.com/mathjax/MathJax/tree/v2.0-latest/config/default.js) so look there for some information as well.  There are a number of new combined configuration files that include the new input and output processors in different configurations, so check them out at [https://github.com/mathjax/MathJax/tree/v2.0-latest/config](https://github.com/mathjax/MathJax/tree/v2.0-latest/config).

The official release of v2.0 should occur within the next two weeks, but we wanted you to be able to start to test out the v2.0 features now.  Please report any bugs you find to the issue tracker at [https://github.com/mathjax/MathJax/issues](https://github.com/mathjax/MathJax/issues).

Thanks for your interest in MathJax.  We hope that this new release brings you new features that you have been looking for.

Davide P. Cervone

MathJax Developer

***

## New Features in MathJax v2.0


### Major speed improvement for HTML-CSS output, particularly in IE:

The HTML-CSS output processing was redesigned to avoid the page reflows that were the main source of the speed problem in Internet Explorer 8 and 9.  For test pages having between 20 and 50 typeset expressions, we see an 80% reduction in output processing time for IE8, a 50% reduction for IE9, and between 15% and 25% reduction for most other browsers over the v1.1a times.  Since the processing time in v1.1a grows non-linearly in IE, you should see even larger savings for pages with more equations when using v2.0.  Forcing IE7 emulation mode is no longer necessary (and indeed is no longer recommended).

### Reduced flickering during typsetting:

In the past, each expression was displayed as soon as it was typeset, which caused a lot of visual flickering as MathJax processed the page.  In v2.0, the output is processed in blocks so that typeset expressions are revealed in groups.  This reduces the visual distraction, and also speeds up the processing.  The number of equations in a block can be controlled through the `EqnChunk` parameter in the `HTML-CSS` block of your configuration.  See `config/default.js` for details.


If the page URL includes a hash reference (a link to a particular location within the page), MathJax v2.0 will jump to that location after the page has finished typsetting.  (Since the size of the page may have changed due to the mathematical typsetting, that location may no longer be visible on screen, so MathJax moves there when it is done with the initial typesetting.)  You can control this behavior with the `positionToHash` parameter in the main section of your configuration.

### Automatic equation numbering of TeX formulas:

The TeX input jax now can be configured to add equation numbers (though the default is not to number equations so that existing pages will not change their appearance).  This is controlled through the `equationNumbers` section of the TeX block of your configuration (see `config/default.js` for details).  You can request that the numbering follow the AMS-style numbering of environments, or you can request that every displayed equation be numbered.  There are now `\label`, `\ref`, and `\eqref` commands to make it easier to link to particular equations within the document.

### Automatic line breaking of long displayed equations:

MathJax now implements the MathML3 specification for automatic line breaking of displayed equations in its HTML-CSS output.  This is disabled by default, but can be enabled via the `linebreaks` section of the `HTML-CSS` block of your configuration (see `config/default.js` for details).  Note that automatic line breaking only applies to displayed equations, not in-line equations, unless they are themselves longer than a line.  The algorithm uses the nesting depth, the type of operator, the size of spaces, and other factors to decide on the breakpoints, but it does not know the meaning of the mathematics, and may not choose the optimal breakpoints.  We will continue to work on the algorithm as we gain information from its actual use in the field.

### New AsciiMath input jax and SVG output jax:

MathJax currently processes math in either TeX/LaTeX format, or MathML notation; version 2.0 augments that to include ASCIIMathML notation (see [http://www1.chapman.edu/~jipsen/mathml/asciimath.html](http://www1.chapman.edu/~jipsen/mathml/asciimath.html) for details on this format).  This is a notation that is easier for students to use than TeX, and has been requested by the user community.</p>

In addition to the HTML-CSS and Native MathML output available in v1.1, MathJax v2.0 includes an SVG-based output jax.  This should prove to be more reliable than the HTML-CSS output, as it avoids some CSS, web-font, and printing issues that the HTML-CSS output suffers from, and it currently has no browser-dependent code.  The SVG mode even works in some ebook readers (like Apple iBooks and Calibre).

### New combined configuration files:

Pre-defined configuration files that include the AsciiMath and SVG processors are now available with MathJax v2.0.  These include `AM_HTMLorMML`, `TeX-AMS-MML_SVG`, and `TeX-MML-AM_HTMLorMML`.


### MathJax contextual menu now available on mobile devices:

MathJax v2.0 provides access to its contextual menu in mobile devices that are based on the WebKit (Safari) and Gecko (Firefox) engines.  For Mobile Firefox, the menu is accessed by a tap-and-hold on any expression rendered by MathJax (this is Mobile Firefox's standard method of triggering a contextual menu).  In Mobile Safari, use a double-tap-and-hold.  This is the first step toward providing a better interface for mobile devices.

### Improved support for screen readers:

Some issues surrounding the use of screen readers and their interaction with MathPlayer have been resolved in MathJax v2.0.  In particular, there are additional menu items that allow the user finer control over some aspects of MathJax's interface that were interfering with some screen readers' ability to properly identify the mathematics.  Several stability issues with MathPlayer have also been addressed.

### Many new TeX additions and enhancements:

*   New `mhchem` chemistry extension (adds `\ce`, `\cf`, and `\cee` macros)
*   New `cancel` extension (adds `\cancel`, `\bcancel`, and `\cancelto` macros)
*   New `extpfeil` extension (adds more stretchy arrows)
*   New `color` extension (makes `\color` work as a switch, as in LaTeX).  Adds `\definecolor`, other color models, LaTeX named colors, `\colorbox`, `\fcolorbox`, etc.
*   New `begingroup` extension to allow macro definitions to be localized. Adds `\begingroup` and `\endgroup` for isolating macro declarations, and defines `\let`, `\renewenvironment`, `\global`, and `\gdef`.
*   New `enclose` extension to give TeX access to `<menclose>` elements.  Adds `\enclose{type}[attributes]{math}` macro.
*   New `action` extension to give TeX access to `<maction>` elements.  Adds `\mathtip{math}{tip}`, `\texttip{math}{tip}`, and`\toggle{math1}{math2}...\endtoggle` macros.
*   New `\mmToken{type}[attributes]{text}` macro for producing `<mo>`, `<mi>`, `<mtext>`, and other token MathML elements directly.
*   New `\bbox[color;attributes]{math}` macro to add background color, padding, borders, etc.
*   New `\middle` macro for stretchy delimiters between `\left` and `\right`.
*   New `\label`, `\ref`, and `\eqref` macros for numbered equations.
*   Better implementation of `\not` so it produces proper MathML when possible.
*   Better implementation of `\dots` that selects `\ldots` or `\cdots` depending on the context.
*   Better implementation of `\cases` that automatically uses `\text` on the second entry in each row.
*   Safer implementation of `\require` that only allows loading from extensions directory.
*   Allow `\newcomand` to provide a default parameter.
*   Allow `\\` to take an optional argument that specifies additional space between lines.
*   Allow `\\` to be used anywhere (to force a line break), not just in arrays.
*   Allow optional alignment parameter for `array`, `aligned`, and `gathered` environments.


### Font enhancements:

*   Work around for the OS X Lion STIX font problem.
*   Support for STIX-1.1 fonts (detection of which version you have, and use data appropriate for that).
*   New WOFF versions of the web fonts (smaller, so faster to download).
*   Data for more stretchy characters in HTML-CSS output.
*   Add support for Unicode planes 1 through 10 (not just the Math Alphabet block) in HTML-CSS output.
*   Increased timeout for web fonts (since it was switching to image fonts too often, especially for mobile devices).
*   Only switch to image fonts if the _first_ web font fails to load (if we can access one, assume we can access them all).
*   Allow `<mtext> `elements to use the page font rather than MathJax fonts (optionally).
*   Provide better control over the font used for characters that are not in the MathJax fonts.

### Interface improvements:

*   The MathJax contextual menu has been reorganized to make it easier to get the source view, and to control the parameters for MathPlayer in IE.
*   The MathJax contextual menu is available in mobile devices (see description above).
*   Warning messages are issued if you switch renderers to one that is inappropriate for your browser.
*   MathJax now starts processing the page on the `DOMContentLoaded` event rather than the `onload` event (this allows the mathematics to appear sooner).
*   Native MathML output is now scaled to better match the surrounding font (like it is for HTML-CSS output).
*   Better CSS styling for NativeMML output in Firefox in order to handle `\cal` and other fonts.
*   MathML output now (optionally) includes class names to help mark special situations generated by the TeX input jax.  (This lets the MathML from the Show Source menu item better reproduce the original TeX output.)

### Important changes from previous versions:

*   The default renderer for Firefox has been changed from NativeMML to HTML-CSS (in those configurations that choose between the two).  The only browser that defaults to NativeMML is now IE with MathPlayer installed.

*   NativeMML will now be selected in IE9 when MathPlayer is present (since IE9 was released the same day as MathJax v1.1a, and there had been problems with IE9 beta releases, we weren't sure if MathPlayer would work with the official release, and so did not select NativeMML by default.)

*   The performance improvements in IE8 and IE9 now make it unnecessary to use a &lt;meta&gt; tag to force IE7 emulation mode.  In fact IE9 in IE9 standards mode now runs faster than IE9 in IE7 standards mode, and IE8 in IE8 standards mode is comparable to IE8 in IE7 standards mode.  We now recommend that you use
<pre>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;</pre>
to obtain the highest emulation mode available in IE, which will be the fastest one for MathJax 2.0.

*   The tex2jax preprocessor now balances braces when looking for the closing math delimiter.  That allows expressions like `$y = x^2 \hbox{ when $x > 2$}$` to be properly parsed as a single math expression rather than two separate ones with unbalanced braces.  The old behavior can be obtained by setting `balanceBraces` to false in the `tex2jax` block of your configuration.

*   The `\cases` macro now properly places the second column in text mode not math mode.  In the past, one needed to use `\text` in the second column to achieve the proper results; pages that did this will still work properly in v2.0.  Pages that took advantage of the math mode in the second column will need to be adjusted.

*   The `\dots` macro now produces `\ldots` or `\cdots` depending on the context (in the past, `\dots` always produced `\ldots`).

*   A one pixel padding has been added above and below HTML-CSS output so that math on successive lines of a paragraph won't bump into each other.

*   There is a new MathPlayer submenu of the Math Settings menu in the MathJax contextual menu that allows the user to control what events are passed on to MathPlayer.  This allows better control for those using assistive devices like screen readers.  When menu events are being passed on to MathPlayer, the MathJax menu can be obtained by ALT-clicking on a typeset expression (so the user can still access MathJax's other features).

*   In order to improve stability with IE when MathPlayer is installed, MathJax now adds the namespace and object bindings that are needed for MathPlayer at the time that Mathjax is first loaded, rather than waiting for the NativeMML output jax to be loaded.  Since this is before the configuration information has been loaded, this will happen regardless of whether the NativeMML output jax is requested.  This means that IE may ask the user to allow MathPlayer to be used, and may show the MathPlayer splash dialog even when MathPlayer is not in the end used by MathJax.  Note that this setup can only be performed if MathJax is loaded explicitly as part of the initial web page; if it is injected into the page later by adding a `<script>` tag to the page dynamically, then MathPlayer will be set up when the NativeMML jax is loaded as in the past.

*   The MathJax typesetting is now started on `DOMContentLoaded` rather than at the `onload` event, when possible, so that means MathJax may start typesetting the page earlier than in the past.  This should speed up typesetting one pages with lots of images or side-bar content, for example.

*   MathJax now attempts to determine whether the page's `onload` event had already occurred, and if it has, it does not try to wait for the `DOMContentLoaded` or onload event before doing its initial typeset pass.  This means that it is no longer necessary to call `MathJax.Hub.Startup.onload()` by hand if you insert MathJax into the page dynamically (e.g., from a GreaseMonkey script).

*   If the page URL includes a hash reference (a link to a particular location within the page), MathJax v2.0 will jump to that location after the page has finished typsetting.  Since the size of the page may have changed due to the mathematical typsetting, that location may no longer be visible on screen, so MathJax moves there when it is done with the initial typesetting.  You can control this behavior with the `positionToHash` parameter in the main section of your configuration.

*   In the event that MathJax is not able to load the configuration file you have specified in the script tag that loads `MathJax.js`, it will no longer issue the warning message about a missing configuration.  The configuration process changed in v1.1, and that message was to help page maintainers update their configurations, but it turns out that for users with slow network connections, MathJax could time out waiting for the configuration file and would issue the warning message in that case, even though the page included the proper configuration.  That should no longer occur in MathJax v2.0.
