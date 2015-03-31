---
layout: post
title: Markdown authoring as webapp | an interview with StackEdit
date: 2013-10-18 10:48:36.000000000 +02:00
categories:
- COMM
tags:
- Benoit Schweblin
- markdown
- StackEdit
status: publish
type: post
published: true
meta:
  _cws_is_markdown: '2'
  _cws_is_markdown_gmt: '2013-10-18 17:48:36'
  _rawhtml_settings: '0,0,0,0'
  _edit_last: '12'
  dsq_thread_id: '1872597582'
author:
  login: PeterK
  email: info@mathjax.org
  display_name: Peter Krautzberger
  first_name: Peter
  last_name: Krautzberger
---

{% include image.html img="images/interview_profile_stackedit.jpg" title="Benoit Schweblin" caption="Benoit Schweblin is the creator of StackEdit" %}

_It's fun [to be interviewed](http://www.mathjax.org/introducing-comm-interview-at-fidus-writer/) but even more to turn the tables. As part of our still fresh COMM category, we had the pleasure to talk with Benoit Schweblin, the creator of [StackEdit](http://benweet.github.io/stackedit/)._

**_You recently started [StackEdit](http://benweet.github.io/stackedit/), a markdown editor web app. How did you come up with the idea?_**

I started to develop StackEdit six months ago since I couldn't find a proper way to write posts on my Blogger web site using a simple markup language. I tried to think of a pleasant editor that I could use on different platforms, allowing me to write documents off-line and later I realized that I could do something more generic, interacting with other on-line services like WordPress or GitHub.

**_Why choose markdown as a lightweight markup language?_**

The markdown language has become fashionable and is widespread today. As a developer I was already using Markdown on StackOverflow, and I liked the embedded editor they used on their web site. The choice wasn't that difficult.

**_Aren't there enough markdown editors out there already?_**

StackEdit combines different functionalities like Markdown Extra or MathJax support. It's also a blogging client and a Google Drive application. Existing editors, even non-free, do not provide all of these features. I could have worked on an existing open source project but I had many ideas that didn't fit in what I found at the time.

**_Can you tell us a little bit about your background?_**

I'm French, I'm 30, I grew up in Paris and today I work in Dublin for a software company as lead developer. I use to work on back-end with JavaEE technologies but I'm not limited to that as you usually have to take a look at the client side when you work with web technologies. Moreover, HTML and JavaScript are not very young, so I'm really used to these technologies as well.

**_How has the response to StackEdit been so far? Any interesting surprises when it comes to your users?_**

People usually like StackEdit because it's polished, easy to use, and powerful (I'm just citing...). The surprise for me is to see many different people, with different languages, ages, professions, using StackEdit for different purposes. Feedback from such a diverse group is really important. I try to satisfy everyone, but one thing I regret is that there are not so many women using it!

**_A lot of people consider math support too difficult or cumbersome in a lightweight editor. Why did you decide to add math support and how has the experience been for you as a developer?_**

Supporting math in StackEdit is something that users asked for. I didn't know about MathJax until a few months ago, however integrating it was something very straight forward and I had a concrete example with the web site [math.stackexchange.com](http://math.stackexchange.com). Today, MathJax is a real benefit as it allows StackEdit to be used by new categories of users like teachers and students.

**_Privacy and control over one's data are a hot topic for many these days. How does a pure web app like StackEdit deal with these issues?_**

Today's standards like OAuth2 are very convenient for a web application like StackEdit. They simplify access to users data and are well accepted by the users. Still, there are some concerns that have to be addressed in StackEdit. For instance, some people don't want to give StackEdit permission to access all their files in Google Drive or Dropbox. That's a fair discussion.

**_What are your (near or long) term plans for the future of StackEdit?_**

Keep on going, as long as users are not fully happy! StackEdit is just surfing the wave of Markdown and web writing. I hope it will continue.

**_Thank you for the interview! StackEdit is really taking markdown editing to a new level and we hope it has a long future ahead!_**