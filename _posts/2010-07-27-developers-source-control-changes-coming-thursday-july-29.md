---
layout: post
title: 'Developers: Source Control Changes Coming Thursday July 29'
date: 2010-07-27 15:53:38.000000000 +02:00
categories:
- Headline
- News
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '3'
  _wp_old_slug: ''
  _rawhtml_settings: '0,0,0,0'
author:
  login: robertm
  email: stevenp@dessci.com
  display_name: Robert Miner
  first_name: Robert
  last_name: Miner
---

The MathJax 1.0 release will be taking place the first week in August, and in preparation, we will be making some changes to the MathJax source control layout on Thursday, July 29.  Developers that obtain MathJax directly from source control using svn should be aware they may to need to make changes to paths and directories on their own systems as a result.

There will be two significant changes taking place.  First, we will be introducing three top-level directories to separate the main development line from the released code base, and future side development lines.  Thus, the current repository structure of

<pre style="padding-left: 30px;">/mathjax/...</pre>

will become

<pre style="padding-left: 30px;">/trunk/mathjax/...
/tags
/branches</pre>

after the change.  Similarly, when 1.0 is available, the released code will be placed in a /tags/mathjax-1.0 directory in the repository.

The second significant change will accommodate both compressed (or 'minified') and uncompressed versions of the JavaScript files. The compressed versions will be located in their present locations, while "unpacked" versions of the files in a given directory will be located in an "unpacked" subdirectory.  Thus

<pre style="padding-left: 30px;">/trunk/mathjax/MathJax.js</pre>

will be a compressed file with whitespace removed and so on, while the uncompressed version will be located at

<pre style="padding-left: 30px;">/trunk/mathjax/unpacked/MathJax.js</pre>

For convenience during development, the code will also be modified so compressed versions of files refer to compressed versions, while the unpacked versions refer to other unpacked files.

**Note:** Because the font.zip archive also contains some JavaScript files, the changes to accommodate packed and unpacked JavaScript mean that developers will also have to refetch and unzip font.zip to install MathJax 1.0.

Questions should be directed to the [MathJax Forums](https://sourceforge.net/projects/mathjax/forums "MathJax Forums").