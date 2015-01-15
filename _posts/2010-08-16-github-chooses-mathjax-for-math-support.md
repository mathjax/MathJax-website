---
layout: post
title: GitHub Chooses MathJax For Math Support
date: 2010-08-16 08:04:04.000000000 +02:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _wp_old_slug: ''
  _edit_last: '5'
  _rawhtml_settings: '0,0,0,0'
  dsq_thread_id: '812339233'
author:
  login: caseys
  email: caseys@mathjax.org
  display_name: Casey Stark
  first_name: Casey
  last_name: Stark
---

Software development project hosting sevice [GitHub](http://github.com) announced last week that its new wiki system uses MathJax to provide math support. The new wiki is called [gollum](http://github.com/github/gollum/) and you can read [their post](http://github.com/blog/699-making-github-more-open-git-backed-wikis) for more information on the release. 

GitHub's adoption of MathJax is a strong vote of confidence. GitHub has a vibrant developer community, and we expect the exposure MathJax receives as part of gollum will lead to its use in other significant web applications.

MathJax has previous been integrated with a variety of wiki platforms, but only as a modification to an individual installation.  By contrast, gollum incorporates MathJax support directly, so anyone setting up a gollum instance will automatically have math support. To do this efficiently, the GitHub team has made use of a MathJax feature that allows all gollum installations to share a single copy of the MathJax fonts, in this case, hosted on Amazon's S3 cloud storage service.