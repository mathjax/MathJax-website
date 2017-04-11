---
layout: post
title: MathJax CDN shutting down on April 30, 2017. <br> Alternatives available.
date: 2017-03-31
author: Peter Krautzberger
categories:
  - News
---


**The MathJax CDN hosted at [cdn.mathjax.org](cdn.mathjax.org) will be shutting down on April 30, 2017. <br> Current and future releases available on other CDN providers.**

**Last Update: 2017/04/10** Please check for updates marked *[Updated 2017/04/10]*.


## Background

Our CDN has been an important part of MathJax's history. When MathJax made its [first public release in 2010](https://www.mathjax.org/mathjax-beta-released/), hosting a library like MathJax was a complex challenge. The CDN [launched a year later](https://www.mathjax.org/mathjax-launches-cdn-service-with-1-1-release/) and helped resolve this difficulty, enabling MathJax to quickly become the gold standard for rendering mathematics on the web.

Over the past 6 years, the CDN has grown steadily each year. From 22 Million monthly users (creating 100 Million request and 1.3TB traffic) in late 2011 to 179 Million monthly users (creating 3.3 Billion requests and 70TB traffic) last month. We switched CDN providers several times to improve performance and reduce costs. In the last three years we could keep up with this growth thanks to support from Google (providing free storage on Google Cloud Storage) which we combined with CloudFlare.

Recently, CloudFlare informed us that we need to upgrade our CloudFlare plan at a significantly increased rate. We greatly appreciate how CloudFlare has worked with us to find a suitable solution. Unfortunately, we do not see an affordable way to keep the CDN. This gave us the opportunity to reevaluate our need for hosting our own CDN, especially in the light of existing and well-known CDNs for open source software.

The MathJax Consortium and its team have come to the decision that our resources are best spent by focusing them on development and so we will retire our self-hosted CDN services at `cdn.mathjax.org` and `beta.mathjax.org` **on April 30, 2017**. 

We are proud of what the MathJax CDN has accomplished for mathematics on the web and we are grateful for everyone who has made use of it. We hope we can help everyone migrate to a new setup quickly and efficiently over the coming weeks.

We believe there will be no loss to the community thanks to the many good alternatives that exist - we outline several options below.


## Alternative CDN providers

The easiest way for most site owners will be to simply switch to another CDN provider. 

**We recommend** [cdnjs](https://cdnjs.com) which also uses CloudFlare for delivery (and on the higher "enterprise" level!). We have been in touch with cdnjs's maintainers and will help push future MathJax releases to cdnjs.

For example, if you have been using the latest MathJax version (v2.7.0) change

```
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/2.7-latest/MathJax.js?...">
</script>
```

to 

```
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?...">
</script>
```

<!--
**[Updated 2017/04/10]** Other free CDN providers include
  * [rawgit](https://rawgit.com), e.g., `https://cdn.rawgit.com/mathjax/MathJax/2.7.0/MathJax.js`.
  * [jsdelivr](https://jsdelivr.com), e.g., `https://cdn.jsdelivr.net/mathjax/2.1/MathJax.js`.
-->

**Note** If you have been using `https://cdn.mathjax.org/mathjax/latest/`, we suggest to switch to a fixed version going forward as this represents best practices to avoid unexpected changes.  That is, you will have to change the address manually to a higher number when new versions become available.

**[Updated 2017/04/10]** 

**Note** Many CDN providers offer APIs that can query which versions of a library are available. This can be used to dynamically load the latest version of MathJax; [this example](https://codepen.io/pkra/pen/GWePxW) shows a very basic example.

**Note** The shutdown includes `beta.mathjax.org`.

## Temporary redirect starting May 1, 2017

**[Updated 2017/04/10]**

We will implement a temporary redirect on `cdn.mathjax.org` to redirect users to cdnjs.

**Note** This is a temporary stopgap. While most sites should continue to work as usual, this will not work in all edge cases, e.g., custom configurations with hard-coded references to `cdn.mathjax.org`, sites with security policies that whitelist only `cdn.mathjax.org`. 

We recommend switching to another CDN provider or your own copy of MathJax as soon as possible.


## Install a local copy

[Our documentation page on installing MathJax](http://docs.mathjax.org/en/latest/installation.html) explains how to install MathJax locally. 

If you want to share your installation across (sub)domains, keep in mind that MathJax uses webfonts which are subject to same-origin restrictions; see our [notes about shared installations](http://docs.mathjax.org/en/latest/installation.html#notes-about-shared-installations) for more details. If you are looking into hosting MathJax via a cloud provider, you can also check our developer wiki [on how we set up MathJax on Google Cloud Storage](https://github.com/mathjax/MathJax/wiki/CDN-Hosting-at-Google-Cloud-Storage).

### Optimization

A common concern with local installations is the size of a complete copy of MathJax, in particular the ~29,000 PNGs in `fonts/HTML-CSS/TeX/png/`. These so-called "image fonts" are only relevant for the HTML-CSS output and in browsers where webfonts fail. Nowadays, there are extremely few edge cases where the "image fonts" could provide a benefit (e.g., users blocking webfonts) so it is usually safe to remove them. We generally recommend switching to the CommonHTML and SVG outputs since the HTML-CSS output will be dropped from v3.0.

**Note.** Both `mathjax` on NPM and `components/mathjax` on Bower do not include the image fonts.

In addition, most sites only require a fraction of MathJax's functionality - usually 1 input + 1 output is sufficient. This allows further trimming of local installations, down to a few megabytes. Reducing the MathJax installation to the relevant parts is easily done either manually (using [our old guide](https://github.com/mathjax/MathJax-docs/wiki/Guide:-reducing-size-of-a-mathjax-installation/1814429ed1e97bfb7675c0fd400804baa9287249)) or automated, e.g., using our [MathJax-grunt-cleaner](https://github.com/mathjax/MathJax-grunt-cleaner). 

**Note.** If you remove features that can be accessed via the MathJax Menu (e.g., output options), we recommend disabling the relevant controls in the Menu; see the [Menu configuration options](http://docs.mathjax.org/en/latest/options/MathMenu.html) for more information.

### Third party extensions 

MathJax's [third party extensions](https://github.com/mathjax/MathJax-third-party-extensions) are not yet available on alternative CDNs but we are working on adding them to cdnjs to ensure a smooth transition. We will update the community and our documentation once it is ready.

In the mean time, you can easily set up your own copy and follow our [documentation for loading third party extensions](http://docs.mathjax.org/en/latest/options/ThirdParty.html#custom-extension-path-configuration).


## Next steps

Throughout the next month, we will regularly alert the community through mathjax.org, our mailing lists, and social media. We will also update our documentation with new CDN recommendations.

If you can help us spread the word so that as few sites or tools as possible are affected, we would be most grateful!

Thanks again for your continued interest in MathJax!

The MathJax Team.