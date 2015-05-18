---
layout: post
title: Upcoming changes to the CDN
date: 2012-05-07 06:25:43.000000000 +02:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _cws_is_markdown: '1'
  _edit_last: '12'
  _rawhtml_settings: '0,0,0,0'
  dsq_thread_id: '812340504'
author:
  login: PeterK
  email: info@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

We would like to announce a few minor changes to the MathJax CDN.

### Switching providers.

On Sunday, May 13, 2012, we will switch CDN providers from Cloudfront to Rackspace. We expect no downtime. You will only have to change your setup if you've been using a beta version or https-access to the CDN.

### Retiring beta versions.

At the time of the switch, the CDN will stop serving the currently available beta-version of MathJax -- `v1.1-beta`, `v1.1a-beta` and `v2.0-beta`.

If you're using a beta version, you should change your configuration to point to `v1.1-latest` and `v2.0-latest` which serve the same content as their respective betas. See the documentation for details on [loading MathJax from the CDN](http://docs.mathjax.org/en/v2.0-latest/configuration.html#loading-cdn).

### Change of encrypted CDN access

If you are currently accessing the CDN via https, e.g.

`https://d3eoax9i5htok0.cloudfront.net/mathjax/latest/MathJax.js`

you should switch to the new stable address at

`https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js`

Note that the old https address will remain active for the next few weeks.

### Testing

You can already test the Rackspace CDN at e.g.

`http://c328740.r40.cf1.rackcdn.com/mathjax/latest/MathJax.js`

This is also a stable address.

If you have any question or encounter any issues, please let us know in the comments or on the [MathJax User Group](http://groups.google.com/group/mathjax-users/).

The MathJax Team.