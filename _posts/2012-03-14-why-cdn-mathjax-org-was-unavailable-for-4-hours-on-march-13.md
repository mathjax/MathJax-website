---
layout: post
title: Why cdn.mathjax.org was unavailable for 4 hours on March 13
date: 2012-03-14 10:29:00.000000000 +01:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '12'
  _rawhtml_settings: '0,0,0,0'
  dsq_thread_id: '812338330'
author:
  login: PeterK
  email: info@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

As you may have noticed, we've had some technical difficulties at MathJax.org yesterday morning. These difficulties were resolved within a few hours and the CDN was available again around noon Eastern time (~16.00 UTC, March 13).

### Timeline

On March 13, our webhost upgraded the server hosting www.mathjax.org; this changed the IP-address of the server. The DNS change we had scheduled to accommodate the switch did not take place as planned. Unexpectedly, the downtime of the webserver also affected the CDN. While we identified what caused this problem, we set up a temporary CDN to help users that needed an immediate workaround.

Around noon Eastern time, we were able to update the DNS configurations and, with the changes propagating, both www.mathjax.org and cdn.mathjax.org came back online.

### Our reaction

Over the next couple of days, we will restructure the CDN to avoid similar problems in the future. Currently, we provide the CDN through Amazon CloudFront while the point of origin for the CDN is still located on the server that also hosts www.mathjax.org. This was the reason why the DNS problems for mathjax.org caused problems for the CDN on Amazon CloudFront.

In the future, the origin and the distribution system for the CDN will be hosted at the same service so as to guarantee reliability and eliminate the cause of yesterday's downtime. We will also re-design our internal procedures for such emergencies: we will improve the monitoring of the CDN (making this information publicly available) and ensure that every team member is able to respond to such problems.

It's very important to us to stress that we consider the stability of the MathJax CDN to be of utmost importance to the MathJax project. We're determined to ensure its performance and reliability in delivering MathJax to thousands of sites.

We sincerely apologize for any inconvenience this caused.

The MathJax Team.