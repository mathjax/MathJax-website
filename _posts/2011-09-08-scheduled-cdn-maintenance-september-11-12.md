---
layout: post
title: Scheduled CDN Maintenance September 11-12
date: 2011-09-08 10:45:40.000000000 +02:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _rawhtml_settings: '0,0,0,0'
author:
  login: robertm
  email: stevenp@dessci.com
  display_name: Robert Miner
  first_name: Robert
  last_name: Miner
---

Over the upcoming weekend of September 11-12, we will be making a modification to the MathJax CDN.  Web sites using the CDN won't be affected, and the CDN service will remain continuously available.  The change is aimed at resolving a problem affecting some users of Internet Explorer.  Technical details are given below.

**Change**

Requests to the MathJax CDN that don't contain an "Accept-Encoding: gzip, deflate" HTTP header will in future be served with uncompressed content.

**Rationale**

Up to now the MathJax CDN has delivered gzip compressed content for all non-image requests, even when the "Accept-Encoding: gzip, deflate" header was absent. This meant that browsers could still receive faster gzip'd responses even if an intermediate proxy (for instance) had stripped the header.

Unfortunately, all versions of Internet Explorer disable gzip handling completely when HTTP 1.1 is disabled. This can occur in several ways, including

1.  when a user does not have administrator privileges, regardless of the

    advanced configuration option "Use HTTP 1.1" setting, or
2.  when the advanced configuration option "Use HTTP 1.1" is disabled, or
3.  when the advanced configuration option "Use HTTP 1.1 through proxy

    connections" is disabled and a HTTP request is made through a proxy.

The upcoming change will maximize the number of users who are able to

receive content from the MathJax CDN.

**Implications**

1.  There is no need to change the way you use the MathJax CDN with your

    pages.
2.  There may be a few users of Internet Explorer who previously could

    not view math in your pages, but now are able to.
3.  There may be a few users who have a slightly slower experience due to

    not receiving gzip'd content from the MathJax CDN.