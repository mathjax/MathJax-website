---
layout: post
title: MathJax v2.3 beta now available
date: 2013-10-22 22:09:03.000000000 +02:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _rawhtml_settings: '0,0,0,0'
  _edit_last: '13'
  _cws_is_markdown_gmt: '2013-11-15 00:48:40'
  _cws_is_markdown: '2'
  dsq_thread_id: '1889499376'
author:
  login: PeterK
  email: info@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

> **_Update_** The issues Firefox users were experiencing with [http://beta.mathjax.org/mathjax/latest/MathJax.js](http://beta.mathjax.org/mathjax/latest/MathJax.js) have been resolved. Our apologies for the inconvenience this may have caused.


Today we are entering the public beta phase of MathJax v2.3. This release includes a number of new features and increased stability ([see below for details](#new-in-v2.3)).

The beta is available via our CDN at [http://beta.mathjax.org/mathjax/latest/MathJax.js](http://beta.mathjax.org/mathjax/latest/MathJax.js) which you can load it in place of the version you are currently using; we also provide access [via a stable https address](https://cdn.mathjax.org/mathjax/latest/MathJax.js).

**_Please note_** that the address for the beta has changed compared to previous beta releases -- the beta release now has its own subdomain.

Alternatively, you can get a [ZIP archive](https://github.com/mathjax/MathJax/archive/v2.3-latest.zip) to use locally or you can check out the `v2.3-beta` branch of MathJax by using the commands

    git clone git://github.com/mathjax/MathJax.git MathJax-2.3
    cd MathJax-2.3
    git checkout v2.3-beta

at an appropriate location on your server.

**Remember that this is still beta software**, so if you are not an experienced user, you may want to wait for the official 2.3 release.  We do not recommend that you use the 2.3-beta version for production environments, but do encourage you to test your sites with it.

If you are linking to [http://cdn.mathjax.org/mathjax/latest/MathJax.js](http://cdn.mathjax.org/mathjax/latest/MathJax.js), note that at the point of the official release of v2.3, the address will begin to serve MathJax v2.3. You can also continue to use v2.2 by linking to [http://cdn.mathjax.org/mathjax/2.2-latest/MathJax.js](http://cdn.mathjax.org/mathjax/2.2-latest/MathJax.js) instead — and you can change to that version at any point (it is available now). Once the official v2.3 release is made, the v2.3-beta address will be removed from the CDN.

The official release of v2.3 should occur within the next three weeks, but we want you to be able to start to test out the v2.3 features now.  Please report any bugs you find to the issue tracker at [https://github.com/mathjax/MathJax/issues](https://github.com/mathjax/MathJax/issues).

Thanks for your continuing interest in MathJax.  We hope that this release makes your MathJax experience even better.

The MathJax Team.

***

##  New in MathJax v2.3  <a name="new-in-v2.3"> </a>

For the list of new features and bug fixes please check the [release milestone](https://github.com/mathjax/MathJax/issues?milestone=1&state=closed).

### New webfonts

The major focus of MathJax v2.3 are additional webfonts options. Due to font and browser limitations, supporting math fonts is a difficult task. Until now, MathJax only provided its own MathJax/TeX fonts, derived from Knuth's Computer Modern fonts, as web-based fonts, though it also supports STIX fonts when they are installed locally.

MathJax v2.3 now adds six new webfonts derived from **STIX, Neo Euler, Asana, Gyre Pagella, Gyre Termes, and Latin Modern**. This is a major improvement in both functionality, Unicode coverage and typographical options.

To configure MathJax to use these fonts, you can follow our existing documentation. For HTML-CSS output, the configuration option is `webFont` ([see the docs](http://docs.mathjax.org/en/latest/options/HTML-CSS.html)) and for SVG output the option is `font` ([see the docs](http://docs.mathjax.org/en/latest/options/SVG.html)). The possible values are

* `TeX`
* `STIX-Web`
* `Asana-Math`
* `Neo-Euler`
* `Gyre-Pagella`
* `Gyre-Termes`
* `Latin-Modern`

So for example, configuring the STIX-web fonts in HTML-CSS would work as follows:

    MathJax.Hub.Config({
      "HTML-CSS": {
        availableFonts: [], preferredFont: null, // force Web fonts
        webFont: "STIX-Web"
      }
    });


**Please report any issues you find on [our issue tracker](https://github.com/mathjax/mathjax/issues) .** Note that there are [minor issues](https://github.com/mathjax/MathJax/issues?milestone=1&state=open) which will be fixed in the final release.

### Localization improvements via TranslateWiki.net

MathJax has been accepted into [TranslateWiki.net](https://translatewiki.net/wiki/Main_Page). You can find the MathJax project page at [https://translatewiki.net/wiki/Translating:MathJax](https://translatewiki.net/wiki/Translating:MathJax). We are very grateful for the generous support from the TWN team and the TWN community.

If you would like to help translate MathJax, simply [join TranslateWiki.net](https://translatewiki.net) and get started using its intuitive user interface. (And while you're there, check out if you can't help other projects as well!)

Thanks to the contributions from [TranslateWiki.net volunteers](https://translatewiki.net/wiki/Translating:MathJax) (**you are all awesome!**) MathJax v2.3-beta includes:

*   Improvements to the French and German translations.
*   New languages are available: Persian, Hebrew, Italian, Japanese, Macedonian, Polish, Brazilian Portuguese, Slovenian, Ukrainian.
*   New partial translations: Breton, Min Dong Chinese, Czech, Spanish, Finnish, Galician, Interlingua, Korean, Luxembourgish, Dutch, Portuguese, Russian, Swedish, Simplified Chinese.
*   New test page [test/localization.html](http://beta.mathjax.org/mathjax/latest/test/localization.html) and message documentation to help localizers.
*   Support for RTL error messages (with special thanks to [ebraminio](https://github.com/ebraminio) and [amire80](https://github.com/amire80)).

### MathML-related improvements

MathJax's "Show Math as" menu will now expose the [MathML annotation features](http://www.w3.org/Math/draft-spec/chapter5.html#mixing.semantic.annotations) (annotation and annotation-xml). Since many MathML authoring tools provide such annotations, this allows users to access embedded representations such as TeX, CAS syntax, and other descriptions.

There are also two new preview options for the MathML input mode: `mathml` (now the default) and `altimage` which will show the original MathML and an alternative image respectively. To configure these new options, simply follow [the mml2jax documentation](http://docs.mathjax.org/en/latest/options/mml2jax.html). For example, the `altimage` option would look as follows:

    MathJax.Hub.Config({
      mml2jax: {
        preview: "altimage"
      }
    });

The new default (`mathml`) will improve the user experience as the original MathML remains in the page until MathJax inserts its output (eliminating "gaps" in the rendering). For more information on the MathML `altimg` attribute, see the [MathML specification](http://www.w3.org/Math/draft-spec/chapter2.html#interf.toplevel.atts).

Finally, MathJax v2.3 implements new workarounds to improve the Native MathML output in Webkit and Gecko. We hope this enables more people to leverage the advantages of the Native MathML output.

### Miscellaneous improvements

#### Font related improvements

Besides adding new webfonts for MathJax output itself, we have improved the interaction with the surrounding content. We have developed a new extension `MatchWebFonts`. This extension is designed for authors using webfonts for the content surrounding MathJax output. This works around a basic problem of webfonts -- a missing API. Webfonts are often delayed and the browser will substitute another font until the arrival; unfortunately there is no signal for when the font arrives. Since the arrival of the webfonts can significantly change ex and em sizes (and MathJax checks these to match them with its own font size), this MathJax extension will check for changes of em and ex sizes (indicating the arrival of webfonts) and rerender equations if necessary. You can configure the extension as follows:

    MathJax.Hub.Config({
     extensions: ["matchwebfonts.js"],
     MatchWebFonts: {
        matchFor: {
          "HTML-CSS": true,
          NativeMML: true,
          SVG: true
        },
        fontCheckDelay: 500,          // initial delay for the first check for web fonts
        fontCheckTimeout: 15 * 1000  // how long to keep looking for fonts (15 seconds)
      }
     });


We also added an option `matchFontHeight` to disable font matching directly. This can be useful if you are certain that matching is not needed, e.g., if you are using the same font for MathJax and the surrounding text. The default setting is

    MathJax.Hub.Config({
      "HTML-CSS": {matchFontHeight: true},
      NativeMML: {matchFontHeight: true},
      SVG: {matchFontHeight: true}
    });


You can deactivate font matching for each output individually.

#### New configuration method

We have added a new configuration method. In any Javascript code executed before loading MathJax.js, the author can create a variable

    window.MathJax = {
      author config
    });

and this will be used to configure MathJax at startup. This will essentially produce the same effect as

    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      author config
    });
    </script>


Note, however, that a `text/x-mathjax-config` block can include more than just a `MathJax.Hub.Config()` call. Since it allows executation of arbitrary code, you can register message hooks, for example, or perform other synchronization functions with MathJax.

To allow similar functionality when setting the MathJax variable, you can use the `AuthorInit` property to store a function that will be executed just before MathJax's "Begin" startup signal is posted.

    window.MathJax = {
      AuthorInit: function () {
         ... initialization code ...
      }
    }

When the AuthorInit function is called, the MathJax objects are already created and thus you can for example already use `MathJax.Callback` to synchronize your code (e.g. listening signals). As you can see in http://docs.mathjax.org/en/latest/startup.html, this happens a bit before "text/x-mathjax-config" so it will allow for finer control (e.g. your can now really add listener for the "Begin" and "Begin Config" signals before they happen, say to measure the exact time between "Begin" and "End"). In particular, you can now modify the startup sequence; for example, the upcoming version of the MediaWiki Math extension will use this to replace MathJax's resource loader with its own resource loader.

#### Bower package

MathJax is now available as a [Bower package](http://bower.io/) -- thanks to [koodough](https://github.com/koodough) and [tarjei](https://github.com/tarjei) for their contributions!
