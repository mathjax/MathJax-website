---
layout: post
title: MathML Development Roadmap
date: 2010-02-11 16:54:17.000000000 +01:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
author:
  login: robertm
  email: stevenp@dessci.com
  display_name: Robert Miner
  first_name: Robert
  last_name: Miner
---

Basic MathML support is now enabled in the development version of MathJax.  The new functionality is currently only available to developers via the source control repository at [mathjax.sourceforge.net](http://mathjax.sourceforge.net).  A new beta distribution of MathJax containing the new functionality will be posted in the next several weeks.

During the last month or so, the primary development focus has been on bug fixing, and filling in a few gaps in the MathJax TeX support.  Going forward, the focus will be on completing support for MathML.  The initial phase will add a new display method to pass MathML code through to browsers with native MathML rendering capabilities.  This is expected to take a few weeks.  The second, longer phase will involve revisiting the HTML+CSS display engine, and extending it to accommodate the additional features in MathML not currently implemented.  At present, the HTML+CSS display engine only implements layout features common to both TeX and MathML. This phase is expected to take about 2 months.