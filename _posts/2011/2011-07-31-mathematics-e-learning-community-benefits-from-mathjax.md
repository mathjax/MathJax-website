---
layout: post
title: Mathematics E-learning Community Benefits from MathJax
date: 2011-07-31
categories:
- News
tags: []
status: publish
type: post
author:
  first_name: Hylke
  last_name: Koers
---

## Introduction

MathJax is experiencing a rapid growth in the domain of online learning resources. Usage of the MathJax CDN service (see also [this News post](/mathjax-cdn-service-very-successful-2/) from June 2011) indicates that the MathJax user base is growing and diversifying, particularly in the domain of online learning resources. This article investigates this development, surveying the landscape of mathematical e-learning websites and discussing how MathJax is helping online educators to teach mathematics on the web.

A search of the web readily brings up a vast number of websites trying to help people better understand mathematics. These sites are diverse in character and contribute to math education in many ways. There are, for example, personal blogs where people share their insights, there are discussion groups and mathematics Q&A sites where students can ask questions to their peers, and there are organizations offering complete online courses or testing services. Yet all of these share the need for a high-quality, dependable display solution for online mathematics. _“It’s a million times easier to understand a question, or an answer, when it is typeset properly”_, as put by Antonio Salazar Cardozo, Chief Software Engineer for OpenStudy.

MathJax brings crisp mathematics display to students on their favorite viewing device, be it a browser, tablet, or smartphone. In addition, it allows students to copy-and-paste a mathematical expression into other applications so they can visualize it or play around with an equation in a computer algebra system. MathJax also helps readers with poor vision, dyslexia, or learning disabilities to access mathematical content. All of this functionality – combined with ease of use and consistent, professional development and testing practices – has motivated an increasing number of educational websites to start using MathJax.

MathJax usage data from the MathJax CDN suggests a broad classification of the math e-learning landscape, into four different categories:

*   (Mostly) static knowledge resources, for learning or reference
*   Interactive questions and exercises websites
*   Social e-learning sites, where people can discuss their math problems
*   Learning management and homework assignment systems

This is of course a rough categorization, and many websites combine two or more types of functionality or take other novel approaches, but it is a useful way to divide the math e-learning zoo into parts and describe the various ways in which MathJax is being used.

## Static knowledge resources

The first category consists of mostly static knowledge resources such as online glossaries, subject encyclopedias, and online textbooks. That could be a collection of separate “knowledge chunks”, but also self-contained courses spanning a range of topics in mathematics. Examples of MathJax-enabled websites in this category include [17calculus](http://17calculus.com/), collecting information about topics in college calculus, and [Connexions](http://cnx.org/), a wide knowledge repository collecting knowledge modules well suited for educational purposes.

[Wikipedia](http://www.wikipedia.org/), the most famous of online encyclopedias, does not (yet?) have built-in support for MathJax. However, it does offer registered users the choice to display mathematics as LaTeX source, and this feature makes it possible to use MathJax with the majority of equations. A script that achieves this was developed by a member of the Wikipedia user community, and published together with instructions on [this Wikipedia user page](http://en.wikipedia.org/wiki/User:Nageh/mathJax).

Websites featuring self-contained course material include [“One Mathematical Cat, Please!”](http://www.onemathematicalcat.org/), offering a complete online Algebra I curriculum, and [Flat World Knowledge](http://www.flatworldknowledge.com/), a leading publisher of free and open textbooks. Also, universities are increasingly making their educational material available to a broad audience by publishing course material on the web. An example of this, again using MathJax, is the [Telmme](http://www.telmme.nl/) initiative of three technical universities in The Netherlands that help prepare prospective students.

Websites in the “mostly static” category typically choose MathJax because of the excellent integration of mathematics into the surrounding material, and because of its broad support across browsers and mobile viewing devices. _“Before MathJax, the obstacles [to use MathML] were insurmountable for a typical user: use a PC, not a Mac; use IE (no other browser); download a plug-in; possibly download some math fonts. Now, users don’t need to do anything – it just works, the mathematics is beautiful, and usage of my site has soared”_, says Dr. Carol J. V. Fisher, creator of “One Mathematical Cat, Please!”

## Interactive questions and exercises websites

The second category collects dynamic websites that offer questions and exercises with which students can practice their mathematical knowledge and skills. Some interesting websites out of the big collection (again focusing on websites using MathJax) include [Arithmetic Warm Ups](http://web.archive.org/web/20110925172804/http://arithmeticwarmups.com/) and [math.ly](http://math.ly/), but perhaps the best-known website in this category is the [Khan Academy](http://www.khanacademy.org/). Growing out of a personal family tutoring endeavor, the Khan Academy now offers more than 2,400 educational videos ranging from algebra to finance. These videos are complemented with online exercises, so that students can bring new concepts into practice right away. In these exercises, MathJax is used to display more complicated mathematics such as exponentials. _“We’re happy we have MathJax available to us”_, says Ben Kamens, Lead Developer at the Khan Academy.

The questions that are offered to students on this kind of websites may be drawn from a pool of pre-generated questions, but they can also be generated on the fly. The latter helps to avoid repetition, presenting students with an unlimited collection of fresh problems. Because it renders mathematics dynamically, MathJax can be easily used together with a problem-generation engine to deal with math display, as may be seen in the 250+ online exercises on “One Mathematical Cat, Please!” (see, for example, [this exercise](http://www.onemathematicalcat.org/algebra_book/online_problems/exp_laws_multi.htm) about exponents).

Still in the category of questions and exercises, there is also growing interest in MathJax amongst Test Preparation Services. Several organizations in this area are now using MathJax or conducting tests. Here MathJax is often integrated into an automatic testing and grading system. These products are usually subscription-based, and so publicly available demos are scarce. Still, interest is growing and feedback has been very positive: _“MathJax has been working extremely well for us and has helped us solve many of the problems we were experiencing with other tools we’d tried in the past”_, comments Joshua Stark, Product Manager at [Revolution Prep](http://www.revolutionprep.com/).

## Social e-learning sites

A third broad category of online math learning resources that can be recognized are blogs, Q&A sites and discussion forums – social websites that are mostly aimed at interaction between students to discuss and solve specific problems. Some math-oriented discussion sites like the [Mathematics section](http://math.stackexchange.com/) on Stack Exchange and [Physics Forums](http://www.physicsforums.com/) are very popular – so popular, in fact, that they are amongst the largest users of the MathJax CDN service.

Another popular initiative in this category is [OpenStudy](http://openstudy.com/), a social learning network where students can ask questions, give help, and connect with other students. Used by a number of academic organizations such as MIT OpenCourseWare, the Mathematics section of OpenStudy has over 15,000 registered students.

OpenStudy is an interactive platform, and so students also need to be able to write mathematics online. To enable their users to easily write down an equation, the OpenStudy platform has developed a built-in MathJax-based equation editor, and is also supporting inline LaTeX through MathJax. While both options are used extensively, the equation editor is found easiest to use by new users while the possibility to use inline LaTeX is highly valued by the platform’s power users. Antonio Salazar Cardozo, Chief Software Engineer for OpenStudy, finds that MathJax is helping students to communicate effectively and efficiently. _“Less work for the helpers and askers means the askers get their answers faster and the helpers can help more people”_, he comments.

## Learning management and homework assignment systems

The fourth, and last, category that is highlighted in this article are the integrated homework assignment and/or learning management systems such as BlackBoard, Desire2Learn, WebAssign, JoomlaLMS, and many others. There has been growing interest recently in MathJax from this community. [WebAssign](http://www.webassign.net/), in particular, has become involved with the MathJax project as a [MathJax Supporter](https://www.mathjax.org/#modal-sponsorship) (see [this News post](http://www.mathjax.org/webassign-becomes-a-mathjax-supporter/)), and their development team has integrated MathJax into a new feature called “Show My Work”, which allows students to create richly formatted documents that include high-quality mathematical typography directly from within a browser. Crucial to this application is MathJax’s flexibility and broad support across browsers and mobile viewing devices.

Although MathJax is not integrated into the BlackBoard product suite, it is possible to use MathJax with BlackBoard by linking to the MathJax CDN in content items. Interestingly, this possibility was pioneered by the community and advertised on Twitter and the blogosphere. In response to this interest, a tutorial video [“How to use MathJax with BlackBoard”](https://www.mathjax.org/video-tutorial-using-mathjax-in-blackboard-released/) has been published on the MathJax website.

## Conclusion

While this finalizes the survey of online mathematics learning tools in terms of the four categories recognized in this article, the overview is by no means complete and there are other interesting ways to look at mathematics e-learning as well. The variety of people and organizations behind educational websites is huge, ranging from individuals wanting to share their knowledge to organizations offering bespoke solutions to their clients; sometimes free of charge, sometimes with paid-for services in addition to free content, and sometimes requiring a paid-for subscription. There is also a large geographical diversity: MathJax is used on (educational) websites around the globe, often showing mathematical notation integrated into texts written in a local language. Finally, in many cases the interest in MathJax is propelled by the user community, whose members are actively exploring how MathJax can be used on their favorite online platform.

Apart from the websites outlined in the above, there are many other valuable online resources in math education. Teachers, in particular, may be interested in the (MathJax-enabled) [MathDL Loci](http://www.maa.org/about-maa/maa-history/mathdl) publication platform from the MAA, which hosts articles of interest to mathematics teachers, including modules for use in the classroom. Many other websites using MathJax are listed on the [“MathJax in Use”](http://docs.mathjax.org/en/latest/misc/mathjax-in-use.html) section on the MathJax homepage, which is updated regularly.
