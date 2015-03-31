---
layout: post
title: MathJax v2.1 now available
date: 2012-10-22 18:45:15.000000000 +02:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _rawhtml_settings: '0,0,0,0'
  _cws_is_markdown: '1'
  _edit_last: '12'
  dsq_thread_id: '895984437'
author:
  login: PeterK
  email: info@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

After a successful [beta testing](http://www.mathjax.org/mathjax-v2-1-beta-now-available-on-the-cdn/), we're happy to officially release MathJax v2.1.

MathJax v2.1 is available on the CDN, and for download from GitHub or via the download page at [docs.mathjax.org](http://docs.mathjax.org).

Version 2.1 is available on the CDN at

> [http://cdn.mathjax.org/mathjax/2.1-latest/MathJax.js](http://cdn.mathjax.org/mathjax/2.1-latest/MathJax.js)

and on **12pm PDT, Tuesday, Oct 23, 2012** the files at the

> [http://cdn.mathjax.org/mathjax/latest/MathJax.js](http://cdn.mathjax.org/mathjax/latest/MathJax.js)

address will be switched over the v2.1, but it may take some time for them to propagate out to the distributed cloud servers.

During the time that the files are making their way out to the CDN's servers, there may be a mixture of files in a browser cache, and so users may need to clear their cache and restart their browser in order to get a consistent version of the files.

If you are a page author and concerned about this, you can change (temporarily) to the `mathjax/2.1-latest` URL instead of `mathjax/latest` since that is a new address that will not have any cached older versions to worry about. You can switch back to `mathjax/latest` after a day or two when the new version has migrated to all the locations in the cloud.

See [http://docs.mathjax.org/en/latest/whats-new-2.1.html](http://docs.mathjax.org/en/latest/whats-new-2.1.html) for details about the changes in v2.1, and some caveats about the effect of these changes on existing sites.

We anticipate a smooth upgrade from v2.0 to v2.1, but as always, let us know on the [bug tracker](http://github.com/mathjax/mathjax/issues) if you experience problems with this new version of MathJax.  Thank you for your continued support.

The MathJax Team.