---
layout: post
title: Changes to the MathJax CDN
date: 2014-06-27 05:43:29.000000000 +02:00
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
  dsq_thread_id: '2799490230'
  _oembed_6999ce9317d0df3887ea91f5486011ff: "{{unknown}}"
  _oembed_ce5628ff2fd23954ed9848d7e8aeebdc: "{{unknown}}"
  _edit_last: '13'
  _rawhtml_settings: '0,0,0,0'
  _cws_is_markdown_gmt: '2014-06-27 12:43:29'
  _cws_is_markdown: '2'
  _oembed_01a12f5e9e587140e1d10e9ae35378ee: "{{unknown}}"
  _oembed_a09db5a3b8a8f15e7968d3dd05497466: "{{unknown}}"
author:
  login: pkra
  email: peter.krautzberger@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

With the release of MathJax v2.4, we have switched CDN providers. The MathJax CDN is now combining Google Cloud Storage and CloudFlare.

The majority of page authors and developers will not have to do anything -- _http://cdn.mathjax.org_ continues to work as expected.

However:

## Important changes for SSL users

The MathJax CDN now provides SSL access at `cdn.mathjax.org`.

**NOTE: The direct Rackspace address will be retired on July 31, 2014.**

If you have been using the address

> https://c328740.ssl.cf1.rackcdn.com/...

you should switch to

> https://cdn.mathjax.org/...

See [the MathJax documentation](http://docs.mathjax.org/en/latest/start.html#secure-access-to-the-cdn) for more information.