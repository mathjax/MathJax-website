---
layout: post
title: MathJax v2.2 beta now available
date: 2013-05-03 12:09:19.000000000 +02:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _cws_is_markdown: '2'
  _cws_is_markdown_gmt: '2013-05-03 20:13:10'
  _rawhtml_settings: '0,0,0,0'
  _edit_last: '12'
  dsq_thread_id: '1258962841'
author:
  login: PeterK
  email: info@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

Today we are entering the public beta phase of MathJax v2.2. This release includes a number of new features and increased stability with over 40 bug fixes. It is available at [cdn.mathjax.org/mathjax/2.2-latest/MathJax.js](http://cdn.mathjax.org/mathjax/2.2-latest/MathJax.js) which you can load in place of the version you are currently using.  Alternatively, you can get a [ZIP archive](https://github.com/mathjax/MathJax/archive/v2.2-latest.zip) to use locally or you can check out the v2.2-beta branch of MathJax by using the commands

    git clone git://github.com/mathjax/MathJax.git MathJax-2.2
    cd MathJax-2.2
    git checkout v2.2-beta
    `</pre>

at an appropriate location on your server.

**Remember that this is still beta software**, so if you are not an experienced user, you may want to wait for the official 2.2 release.  We do not recommend that you use the 2.2-beta version for production environments, but do encourage you to test your sites with it.

If you’re linking to [http://cdn.mathjax.org/mathjax/latest/MathJax.js](http://cdn.mathjax.org/mathjax/latest/MathJax.js), note that at the point of the official release of v2.2, the address will begin to serve MathJax v2.2. You can also continue to use v2.1 by linking to http://cdn.mathjax.org/mathjax/2.1-latest/MathJax.js instead — and you can change to that version at any point (it is available now). Once the official v2.2 release is made, the v2.2-beta address will be removed from the CDN.

The official release of v2.2 should occur within the next two weeks, but we wanted you to be able to start to test out the v2.2 features now.  Please report any bugs you find to the issue tracker at [https://github.com/mathjax/MathJax/issues](https://github.com/mathjax/MathJax/issues).

Thanks for your continuing interest in MathJax.  We hope that this release makes your MathJax experience even smoother.

The MathJax Team.

# New in MathJax v2.2

This release improves overall stability by fixing over 40 bugs.  For a complete list of bugs that were fixed, please check our [issue tracker](https://github.com/mathjax/mathjax/issues?labels=Merged&state=open).

## Localization.

MathJax now offers a full localization module. Page authors can specify a locale when loading `MathJax.js`, e.g., to set French use

    <script type="text/javascript"
        src="http://cdn.mathjax.org/mathjax/2.2-latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML&locale=fr">
    </script>


Your readers can switch the language manually via the new Language item in the MathJax contextual menu.

The beta release includes English (default), French and German locales and we hope our community will help us to add more languages during the beta phase. We will post more information on the translation process and the configuration options in an upcoming post.

## Safe-mode extension.

MathJax provides a powerful HTML-extension. However, on sites with user-generated content, commands like \href and \css can have negative side effects. For example, \href can specify any url protocol, including javascript, while \css can be used to modify any CSS, including a site's user interface. The new safe extension gives page authors an easy way to restrict such commands.

To load the extension, simply add it when loading `MathJax.js`, e.g.,

    <script type="text/javascript"
        src="http://cdn.mathjax.org/mathjax/2.2-latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML,Safe.js">
    </script>

For the configuration, you can set the options in your configuration block. The basic configuration consists of the following block:

    MathJax.Hub.Config({
        Safe: {
            allow: {
                URLs: "safe",     
                classes: "safe", 
                cssIDs: "safe",  
                styles: "safe",   
                fontsize: "all",   
                require: "safe"
            }
        },
    });

Values can be "all", "safe", or "none", where "all" enables the standard MathJax behavior, "safe" imposes solid restrictions while leaving basic functionality intact and "none" blocks the feature completely.

For full details on all configuration options, check [the source](https://github.com/mathjax/MathJax/blob/v2.2-latest/unpacked/extensions/Safe.js).

## Commutative diagrams via the AMScd extension.

The well known LaTeX package for commutative diagrams is now available. To load the extension, you need to add it to the TeX block as, e.g.,

    TeX: {
      extensions: ["AMScd.js", ...]
    }

For how to write commutative diagrams, please refer to the [original documentation](http://mirrors.ctan.org/macros/latex/required/amslatex/math/amscd.pdf) for now.

## Experimental ContentMathML extension.

This experimental extension adds ContentMathML support to MathJax. To load the extension, you have to add it to the MathML block of your configuration, e.g.,

    MathML: {
      extensions: ["content-mathml.js", ...]
    }

For documentation on ContenMathML, please see the [MathML specification](http://www.w3.org/Math/draft-spec/chapter4.html).