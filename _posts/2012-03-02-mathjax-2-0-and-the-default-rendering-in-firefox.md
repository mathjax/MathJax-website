---
layout: post
title: MathJax 2.0 and the default rendering in Firefox
date: 2012-03-02 06:59:32.000000000 +01:00
categories:
- News
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '12'
  _rawhtml_settings: '0,0,0,0'
  dsq_thread_id: '812340508'
author:
  login: PeterK
  email: info@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

Last Thursday, Frédéric Wang, MathML contributor to Mozilla and Software Test Engineer here at MathJax, wrote a post on his personal blog entitled [MathJax 2.0 no longer uses Firefox MathML support by default :-(](http://www.maths-informatique-jeux.com/blog/frederic/?post/2012/03/01/MathJax-2.0-no-longer-uses-Firefox-MathML-support-by-default-%3A-%28). We thought it would be good to explain the situation here, too.

MathJax v2.0 no longer uses Firefox's native MathML rendering as the default but instead relies on MathJax's HTML-CSS output. Our main reasons for this switch are new features in MathJax v2.0, most prominently equation numbering and automatic line-breaking, that use MathML properties not implemented in Firefox. Since we expect these features to get widespread use, in particular in on-line versions of papers (and their abstracts), it is crucial that they work well in the default configuration of MathJax.

For now, Firefox's native MathML rendering does not support equation numbering and automatic line-breaking. There are also a number of other, less apparent problems with MathML rendering in Firefox that have we identified over the last year, such as printing issues, differences in display spacing, and issues when the STIX fonts aren't installed. All of these make it harder to maintain a consistent set of results for MathJax output when Firefox's MathML renderer is used.

Of course, even though MathJax v2.0 is faster than v1.1, the native MathML rendering is still faster. So we leave the decision to trade consistency for speed to the user. Page authors who wish to set the defaults for Firefox differently can do so and we'd encourage that whenever their content can be rendered accurately by Firefox. Readers who prefer to use the native MathML support of Firefox can still do so by setting the math renderer to NativeMML in the MathJax contextual menu. But since it does entail a potential loss of information (e.g., equation numbers) we no longer make that the default.

We cannot stress enough how encouraging it is to see Firefox's many MathML improvements in recent versions, and the fine work Fred has done in helping to bring that about.

We look forward to revisiting this decision in the future and we hope that Firefox will continue to take the lead in native MathML rendering.