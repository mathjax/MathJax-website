---
layout: post
title: MathJax version 2.0 now available
date: 2012-02-26 12:57:25.000000000 +01:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '12'
  _rawhtml_settings: '0,0,0,0'
  dsq_thread_id: '812340388'
author:
  login: PeterK
  email: info@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

MathJax v2.0 is now available on the CDN, and for download from GitHub or the download page at [docs.mathjax.org](http://docs.mathjax.org/en/latest/installation.html).

Version 2.0 is available on the CDN at

> [http://cdn.mathjax.org/mathjax/2.0-latest/MathJax.js](http://cdn.mathjax.org/mathjax/2.0-latest/MathJax.js)

and the files at the

> [http://cdn.mathjax.org/mathjax/latest/MathJax.js](http://cdn.mathjax.org/mathjax/latest/MathJax.js)

address have been switched over the v2.0 as well, but it will take some time for them to propagate out to the distributed cloud servers.

During the time that the files are making their way out to the servers, there may be a mixture of files in your users' caches, and so they may need to clear their cache and restart their browser in order to get a consistent version of the files.  If this turns out to be problematic for you, you can change (temporarily) to the `mathjax/2.0-latest` URL instead of `mathjax/latest` since that is a new address that will not have any cached older versions to worry about.  Change back after a day or two when the new version has migrated to all the locations in the cloud.

See [http://docs.mathjax.org/en/v2.0-latest/whats-new-2.0.html](http://docs.mathjax.org/en/v2.0-latest/whats-new-2.0.html) for details about the changes in v2.0, and some caveats about the effect of these changes on existing sites.

We anticipate a smooth upgrade from v1.1 to v2.0, but as always, let us know if you experience problems with this new version of MathJax.  Thank you for your continued support.

Davide Cervone

MathJax developer
