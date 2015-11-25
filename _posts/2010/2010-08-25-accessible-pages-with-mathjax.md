---
layout: post
title: 'Accessible Pages with MathJax'
date: 2010-08-25
categories:
- News
status: publish
type: post
published: true
author:
  first_name: Neil
  last_name: Soiffer
---


MathJax was design with accessibility in mind and has several powerful features to make math easier to see and read, both for ordinary users as well as those with print and learning disabilities. Two accessibility features, the ability to scale all math in a page or zoom in on a particular equation, are built in to MathJax. In addition, MathJax works with [MathPlayer](http://www.dessci.com/en/products/mathplayer) to make math accessible to screen readers, to screen magnifiers, and to learning disability software.

## Built in Accessibility Features

Because math notation is hierarchical and 2-dimensional, deeply nested subexpressions are often hard to see clearly, especially at screen sizes and resolutions. To help with this problem, MathJax provides two features for enlarging math expressions. The first is the ability to scale all equations in a page by a constant factor, for example, making them display at 150% of their normal size. This can be handy on pages with a small default font size, but it is also a bit jarring. So MathJax also provides the ability to zoom in on a single equation on demand.

As with many MathJax capabilities, page authors can add MathJax configuration code to a page to set a default equation scaling factor for all readers, or individual readers can set a scale factor for a single site by using the right-button context menu. The following picture illustrates how to change to scale of all equations in a page using the context menu. The configuration code an author would add to a page to make a larger scale the default is [described in the MathJax documentation](http://docs.mathjax.org/en/v1.1-latest/options/HTML-CSS.html).

![right context menu for scaling all equations](/images/scale-all-math.png)

To zoom individual equations, readers must choose a mechanism to trigger the zoom. For example, one might want to zoom an equation by merely hovering the mouse pointer over it. Another choice might be to zoom when holding down SHIFT and clicking, and so on. By default, no zoom trigger is set, so to turn on zooming, bring up the context menu by right-clicking (if you are using Windows) or control-clicking (if you are using MacOS) on a MathJax equation, and then choosing the Settings ⇨ Zoom Trigger menu, and selecting the options you prefer. Note that the Settings ⇨ Zoom Factor menu also allows you to change how much an equation zooms.

![right context menu for zoom trigger](/images/zoom-trigger.png)

Instructions for authors wishing to configure MathJax to have a zoom trigger by default are [described in the MathJax documentation](http://docs.mathjax.org/en/v1.1-latest//options/hub.html) (see the `menuSettings` option).

## Using MathJax with MathPlayer for Greater Accessibility

MathPlayer is an add-on to Internet Explorer that provides native rendering of math notation encoded in MathML format in web pages when it is installed. MathPlayer can convert math to speech and can also highlight the math as it is spoken, and works with other assistive technology software such as screen readers, screen magnifiers, and learning disability software. The result is industry-leading math accessibility for individuals with print and learning disabilities. A list of [Assistive Technology (AT) software that works with MathPlayer](http://www.dessci.com/en/solutions/access/atsupport.htm) and other math accessibility information be found at the [Design Science accessibility web site](http://www.dessci.com/en/solutions/access/).

Since MathJax can convert TeX to MathML, the combination of MathJax and MathPlayer can make many more web pages, blogs, and wikis accessible. The example shown below is written in TeX and is accessible if you are reading this using IE+MathPlayer:

\\[ x=\frac{-b \pm \sqrt {b^2-4ac}}{2a} \\]

### To Make a Page Accessible with MathJax and MathPlayer

To make a page accessible, MathPlayer needs to be responsible for rendering math in the page. By default, MathJax attempts to render MathML markup itself, and thus, in order to work together with MathPlayer, MathJax needs to know to pass MathML markup on to MathPlayer for accessible rendering. There are two ways that this can be done.

The author of a page can add markup to a page to configure MathJax, so that MathML is passed on to the browser whenever that is possible by default. In this mode, MathJax will detect when MathPlayer is installed in IE (or when a reader is using another MathML-capable browser) and in these cases, pass the MathML on for processing. The other option is that an individual reader can use the MathJax context menu to tell MathJax to use the MathML renderer if it isn’t already. With this method, an individual user can ensure MathJax and MathPlayer will work together, regardless of the default behavior determined by the page author.

#### For Users

For use with MathPlayer, set MathJax to use “MathML” as the renderer as shown below:

![right context menu for selecting MathPlayer as the renderer](/images/format-with-mathml.png)

MathJax will remember these setting for a web site, but you will need to do this again when you visit another site.

#### For Authors

If you are an author of a web page, you can ensure MathPlayer will make math accessible when available by configuring MathJax so that it uses a native MathML renderer when one is present and in other cases falls back on MathJax doing the rendering otherwise. To do this, you need to use the [MMLorHTML](http://docs.mathjax.org/en/v1.1-latest/options/MMLorHTML.html) configuration file to prefer native MathML in IE (and Firefox) as described in the MathJax documentation.
