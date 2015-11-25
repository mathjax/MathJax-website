---
layout: post
title: Static site generation for researchers  | an interview with Wonseok Shin
date: 2014-07-03 09:30:00.000000000 +02:00
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
  _edit_last: '13'
  _rawhtml_settings: '0,0,0,0'
  _cws_is_markdown_gmt: '2014-07-03 16:30:00'
  _cws_is_markdown: '2'
author:
  login: pkra
  email: peter.krautzberger@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

{% include image.html img="images/interview_profile-wonseok_shin.jpg" title="Wonseok Shin" caption="Wonseok Shin is the creator of jemdoc+MathJax" %}

_Here is our fourth interview with interesting people in the MathJax community. This time we had the pleasure to talk to [Wonseok Shin (Stanford University)](http://web.stanford.edu/~wsshin/) about jemdoc and jemdoc+MathJax._

**_You recently extended [jemdoc](http://jemdoc.jaboc.net) to create [jemdoc+MathJax](https://github.com/wsshin/jemdoc_mathjax). Can you tell us a bit about jemdoc and your work on it?_**

[jemdoc](http://jemdoc.jaboc.net) is an open-source static site generator that allows you to create simple websites.  It is composed of just a single Python script, so it is extremely lightweight and portable.

jemdoc was developed by [Jacob Mattingley](https://twitter.com/jem_nz) while he was a Ph.D. student at Stanford University.  I guess he developed jemdoc to create his personal academic website easily.  In fact, jemdoc is most commonly used to create university professors' personal websites that introduce their research and teaching experiences.  (If you google "jemdoc", you will see a bunch of professors' websites.)  It is also being widely used to create university course websites.

In addition to being lightweight and easy to use, the ability to load LaTeX equations has been one of the reasons for jemdoc's popularity in academia.  However, the original jemdoc loads LaTeX equations as PNG images, which can be pixelated on high-resolution displays or upon magnifying the webpage.

I have modified the original jemdoc to support MathJax.  The modified jemdoc is called [jemdoc+MathJax](https://github.com/wsshin/jemdoc_mathjax).   If you are already a jemdoc user, you don't have to change anything in your *.jemdoc files.  By simply replacing jemdoc with jemdoc+MathJax and processing your *.jemdoc files again, you create a new website in which all PNG equation images are replaced with beautiful MathJax-rendered equations.

**_Why choose jemdoc’s markup language over other lightweight markup solutions like markdown or textile and how does jemdoc fit into this ecosystem?_**

To me, it made perfect sense to implement MathJax support in jemdoc than in other markup solutions, because jemdoc is already being widely used in academia, where mathematics is the primary language to communicate ideas and therefore equation rendering is highly demanded.

For general users, the biggest difference between jemdoc and other markup solutions could be that it creates an entire website (including a navigation sidebar) rather than a single webpage.  Therefore, if you want to create an entire website from scratch, jemdoc can be a better choice than other markup solutions.

Being able to generate an entire website makes it very easy to migrate from one web server to another, because you can simply move the HTML files to the new web server.  Again, this is a useful feature for people in academia.  For example, if you create your personal website as an undergraduate in one university and seek for more advanced degrees in another university, you can easily move your entire website from old university's web server to new university's by moving the HTML files.

**_Can you tell us a little bit about your background?_**

I did my Ph.D. degree in Electrical Engineering at Stanford University, and I am currently a postdoctoral scholar in the same university.  I have developed my programming skills through my previous experience as a software engineer at a startup company, and also through my doctoral research in which I studied electromagnetic phenomena by numerical simulation (which involved a lot of programming).

Around the time I was finishing up the Ph.D. degree, I felt a need for a neat personal website to introduce my research more efficiently to my fellow researchers.  I tested several static site generators, and jemdoc stood out with the built-in LaTeX equation support because I needed to use equations to describe my research.  However, I was disappointed with the quality of the rendered equations in jemdoc.  I knew about MathJax already, and really wanted to use it, but failed to find an existing MathJax implementation in jemdoc.  So I spent some time to implement MathJax in jemdoc myself.

Originally, the MathJax support was a personal project that I intended to use only for my personal website.  I uploaded the modified code at Github anyway for my own convenience.  One day a complete stranger who saw my Github repository contacted me and asked if I could teach him how to use MathJax in jemdoc. That was when I realized other people’s interest in using MathJax in jemdoc. So I polished the code, added concrete examples for the additional features I implemented, and named the project jemdoc+MathJax.

**_Who do you see as the primary users for jemdoc+MathJax?_**

The primary users would be the previous jemdoc users.  As I mentioned earlier, you don't have to change anything in your *.jemdoc files.  By simply using jemdoc+MathJax instead of jemdoc to process your *.jemdoc files, you create a new website with nicer-looking equations.

People who want to create a simple website with lots of equations, such as mathematicians, scientists, and engineers in academia, will also find jemdoc+MathJax useful, even if they haven't used jemdoc previously.

**_Mathematical markup is not naturally “lightweight”.  What are your thoughts on the future of mathematical markup on the web?_**

I think mathematical markup will become more popular in the future.  Massive open online courses (MOOCs) such as Coursera and EdX will be major driving forces.  There, students need to submit their homework solutions on the web.  However, assigning math and science homework problems is currently difficult in MOOCs, because most homework problems in these subjects require equations as answers, which are hard to input on the web.  With an easy-to-use mathematical markup system, testing students' knowledge on math and science subjects in MOOCs will become much easier.

**_With static site generators, hosting becomes easy but web-based authoring isn’t straight forward. Any tips for jemdoc users who want the best of both worlds?_**

Unfortunately, there is no web-based authoring system for jemdoc currently.  Using jemdoc requires some familiarity with UNIX-like operating systems.

However, if you have a bit of experience on UNIX-like operating systems, using jemdoc is quite straightforward.  You first write down the contents of webpages in jemdoc's Markup language, which is similar to Markdown, and store them as text files, typically with ".jemdoc" as the filename extension.  (Each .jemdoc file describes a single webpage in your website.)  Then you process the .jemdoc files with jemdoc to convert them to HTML files.  The generated HTML files constitute your website.  You can simply upload the HTML files to your web server's dedicated folder under your account to make your website running.

Detailed usage of jemdoc can be found in jemdoc's official website at [http://jemdoc.jaboc.net](http://jemdoc.jaboc.net).  Note that the official website itself is created completely by jemdoc.

**_What are your (near or long) term plans for your work on jemdoc+MathJax?_**

I use jemdoc+MathJax for my personal academic website, and I don't see a particular feature that I need immediately, partly because jemdoc itself is already a pretty mature system with many useful features.  There were some lacking features such as drawing underscores in the original jemdoc, and I have already added those features in jemdoc+MathJax, whose usage are explained in detail in the example files included in the jemdoc+MathJax package.

I will respond to any bug reports and feature suggestions as much as possible.  Also, jemdoc+MathJax is open-source and the source code is publicly available as a GitHub project at [https://github.com/wsshin/jemdoc_mathjax](https://github.com/wsshin/jemdoc_mathjax).  I hope other people contribute to jemdoc+MathJax, as I did to the original jemdoc, to implement useful features.
