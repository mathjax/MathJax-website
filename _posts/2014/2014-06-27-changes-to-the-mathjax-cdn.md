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
author: Peter Krautzberger
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

See [the MathJax documentation](http://docs.mathjax.org/en/v2.4-latest/start.html#secure-access-to-the-cdn) for more information.