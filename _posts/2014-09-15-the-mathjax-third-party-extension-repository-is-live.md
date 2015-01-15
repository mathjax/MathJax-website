---
layout: post
title: The MathJax Third Party extension repository is live!
date: 2014-09-15 12:33:21.000000000 +02:00
categories:
- COMM
- Headline
- News
- Technology
tags: []
status: trash
type: post
published: false
meta:
  _wp_trash_meta_status: draft
  _wp_trash_meta_time: '1421235927'
  _rawhtml_settings: '0,0,0,0'
  _edit_last: '13'
author:
  login: pkra
  email: peter.krautzberger@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

With the release of MathJax v2.4, we launched the MathJax Third Party extensions repository, an open repository for extensions and enhancements to MathJax that anyone can contribute to and everyone can use via the MathJax CDN.

### MathJax -- modular by design

Modularity is deeply embedded into MathJax's design. The core functionality consists of highly modular input, internal, and output components. Each of these can be modified by an extension system using the [MathJax API](http://docs.mathjax.org/en/latest/api/index.html). In fact, the majority of MathJax functionality is implemented in the form of over 30 core extensions.

### Your extension, available for everyone

The MathJax Third Party extension repository is hosted [on Github at mathjax/MathJax-third-party-extensions](https://github.com/mathjax/MathJax-third-party-extensions) and mirrored to [cdn.mathjax.org/mathjax/contrib](http://cdn.mathjax.org/mathjax/contrib). At the time of writing the following extension are available:

*   `counters`, TeX-input extension for counters
*   `everymath`, TeX-input extension to add prefixes to all equations
*   `forloop`, TeX-input extension for loops in TeX macros
*   `forminput`, TeX-input extension for adding HTML input forms to MathJax output
*   `knowl`, TeX- and MathML-input extension for adding `knowl.js` snippets.
*   `longdiv`, TeX-input extension for long division notation
*   `modifymenu`, extension to simplify modifying the MathJax menu
*   `preamble`, TeX-input extension for an alternative preamble
*   `sqrtspacing`, an output extension adding padding after roots
*   `toggles`, TeX-input extension, implementing toggle macros akin to etoolbox
*   `xyjax`, TeX-input extension implementing xypic

As a page author, you can easily load extensions from the repository alongside MathJax. To do so, first add the third party extension repository to your MathJax configuration, e.g., by adding the follwing to your configuration script:

    <script type="text/x-mathjax-config">
      MathJax.Ajax.config.path["Contrib"] = "//cdn.mathjax.org/mathjax/contrib";
    </script>
    `</pre>

    Then you can load extensions from the Third Party Extension repository using the MathJax Configuration, e.g., you could load the [xyjax](https://github.com/sonoisa/XyJax) extension via

    <pre>`<script type="text/x-mathjax-config">
      MathJax.Hub.Config({
        extensions: ["[Contrib]/xyjax/xypic.js"]
      });
    </script>

For further details, see [the documentation](http://docs.mathjax.org/en/latest/options/ThirdParty.html).

### Make your own extensions

MathJax makes it easy to add your own extensions. From simple extensions containing TeX macros to complex graphical extensions like xyjax, [MathJax's APIs](http://docs.mathjax.org/en/latest/api/index.html) allows devlopers to add functionality easily and consistently.

For an introduction, check out our [extension writing tutorial](http://docs.mathjax.org/en/latest/extension-writing.html) in our documentation. If you have any questions about extension writing, head over to the [MathJax User Group](http://groups.google.com/forum/#!forum/mathjax-users)