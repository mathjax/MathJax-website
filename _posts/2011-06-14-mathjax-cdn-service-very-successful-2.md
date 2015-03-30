---
layout: post
title: MathJax CDN Service very successful
date: 2011-06-14 08:11:11.000000000 +02:00
categories:
- Headline
- News
tags: []
status: publish
type: post
published: true
meta:
  _rawhtml_settings: '0,0,0,0'
  _edit_last: '8'
  dsq_thread_id: '812339867'
author:
  login: hylkek
  display_name: Hylke Koers
  first_name: Hylke
  last_name: Koers
---

In March of this year, a public MathJax CDN Service was launched so that authors and publishers can use MathJax without having to install MathJax on their own server. The CDN service has seen great uptake right from the beginning and now, after three months, it is serving just under 2,000 domains - and still growing rapidly. 

<table>
<tr>
<td>
![](images/CDN-figs-domains.png)
</td>
<td>
![](images/CDN-figs-calls.png)
</td>
</tr>
</table>

The figures above illustrate CDN uptake since March 20, 2011. Only webpages that have been viewed at least once during a 7-day period are taken into account. Usage has been growing at a fairly steady rate of approximately 20 domains per day since the CDN was launched. For the week ending June 5th, approximately 2000 domains made about 250,000 requests per day to the main JavaScript file `mathjax.js` - adding to more than 10 million requests since the CDN was launched. Overall MathJax usage is even higher, since there are also many local installations of MathJax in use (these are not included in the above figures, as we have no way of monitoring usage on those).

CDN users range from individuals who want to include mathematics on their personal website or blog posts, to universities and scholarly publishers, to large online platforms. Interestingly, the most active users at this moment are Q&A sites, discussion forums, e-learning platforms and test preparation services. Most pages use MathJax with one of the [pre-defined configurations](http://docs.mathjax.org/en/v1.1-latest/config-files.html#common-configurations), which provide an easy and dependable way to configure MathJax for common use cases.

The MathJax CDN, which utilizes Amazon’s CloudFront service, was announced together with MathJax 1.1 in March 2011 (see also [this News post](/mathjax-launches-cdn-service-with-1-1-release/)). A service to the community, the CDN makes it very easy to start using MathJax: just pointing to the CDN installation is enough to use MathJax on a webpage. This also simplifies using MathJax with online publication and blogging platforms like WordPress or Tumblr (see also [this video tutorial](https://www.youtube.com/watch?v=EaaLX_yQAM0)). In addition, the CDN offers very fast download times to readers around the world and ensures that users are always working with the latest version of MathJax, since any patches and bug fixes will be deployed to the CDN as soon as they are  available.

The rapid uptake of the CDN is also reflected in the overall traffic, which is now just above 10 Gb per day. A word of thanks is due to our [sponsors](http://www.mathjax.org#sponsors), who help us cover bandwidth charges and provide the support for continuous testing and development of the MathJax code.