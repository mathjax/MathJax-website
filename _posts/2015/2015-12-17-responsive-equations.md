---
layout: post
title: Responsive Equations
date: 2015-12-17
author: Peter Krautzberger
categories:
- News
---

<script async src="https://assets.codepen.io/assets/embed/ei.js"></script>

This year we are benefiting from a grant from the [Alfred P. Sloan Foundation](http://www.sloan.org) to work on enriching MathML with semantic information. One of the most awesome things about this work is that [Volker Sorge](https://www.cs.bham.ac.uk/~vxs/) joined our team. Volker is of course known for his implementation of math support in Google ChromeVox [back in 2013](https://www.youtube.com/watch?v=HVviF06S1T8) and his work on making [chemical diagrams accessible](http://progressiveaccess.com/chemistry/index.php).

Now semantic information in itself is pointless without applications that can actually use it. But of course that's what we're always after at MathJax: building the best tools for math on the web. So in this post we want to share an application coming out of this project that's very dear to our hearts: **making equations truly responsive**.

## Responsive what?

We probably don't have to explain what [responsive web design](https://en.wikipedia.org/wiki/Responsive_web_design) is and we probably should leave that to [smarter](http://alistapart.com/article/responsive-web-design) [people](http://abookapart.com/products/responsive-web-design). While responsive design is firmly established for layout in general, individual content fragments can be difficult to handle. But of course that's just another challenge and people have been exploring responsive rendering of complex fragments like [responsive tables](http://zurb.com/playground/projects/responsive-tables/index.html), [responsive SVG](http://www.smashingmagazine.com/2014/03/rethinking-responsive-svg/) and, of course, responsive images (not just `<picture>`/[picturefill](http://scottjehl.github.io/picturefill/) but also [automated cropping](https://github.com/jwagner/smartcrop.js/)). These examples share a common theme, what you might call a search for the [grain of the web](http://www.frankchimero.com/writing/the-webs-grain/).

## What are responsive equations for?

We wanted to explore what this notion can mean for fragments that happen to be math. Since that's an incredibly complex area, there are various ways to approach this problem. We decided that we wanted to handle one particular use case but handle that use for any kind of math fragment.

In our case, we focused on what we'd dub **casual reading**. That is, the situation where you skim through a larger piece of content, such as a list of recent publications (e.g., an arXiv news feed) or you're scanning a paper, e.g., to look up a particular snippet, equation, theorem.

In that situation, when screen real estate is at a premium, you don't want every equation rendered in all its glory -- it just gets in the way of your goal. Rather, you need less visual noise to efficiently reach the particular goal of your casual reading.

Still, you also don't want math fragments to simply be dropped (like you might experience in a feed reader or an email today) because even when it's "noise" equations add structure to what you're reading -- besides, it might be your specific target (e.g., a labeled equation).
Of course, that's actually a pretty common problem these days. The same is true for maps on the web, where a zoomed-out view shouldn't be filled with all the details and yet you need to be able to access that level of detail should you need to, and finally the same is true for aural rendering where you don't need a long, arduous voicing of every equation but you need a quick overview of the content.

Now other use cases will require very different approaches, so we hope we get a chance to explore them in the future -- and to see more people try out other approaches. Before we dive into our approach for handling this use case, let's take a look at the most basic form of responsive rendering: line-breaking.


## The problem with line-breaking equations

MathJax has been supporting automatic line-breaking since v2.0 and from our experience there are two major problems with line-breaking, one fundamental and one practical. To see these problems in action, let's pick two real world examples from [math.stackexchange](http://math.stackexchange.com/a/1285149).

In [the first pen embedded below](http://codepen.io/pkra/full/YwKmPM), the first equation is simply very very long. You can use the slider to resize the container.

<p data-height="400" data-theme-id="0" data-slug-hash="YwKmPM" data-default-tab="result" data-user="pkra" data-preview="true" class='codepen'>See the Pen <a href='http://codepen.io/pkra/pen/YwKmPM/'>Responsive Equations: Linebreaking 1/2</a> by Peter Krautzberger (<a href='http://codepen.io/pkra'>@pkra</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<a href="http://i.imgur.com/nXQ4GTV.jpg"><img class="well img-responsive center-block" alt="linebreaking, but iterated" src="http://i.imgur.com/nXQ4GTV.jpg" /></a>

In this case you run into a very fundamental problem on smaller screens: this single equation suddenly spreads over a lot of lines. If you use the slider to shrink the container to 350px (roughly what you get in an iPhone 5/6 for example), the equation spreads over 4-5 lines, taking up half the viewport; on an "ancient" device like the iPhone 4 this takes up 6 lines and the entire viewport. This kind of excessive line-breaking on small screens reduces readability of the expression quite quickly because even with the best breakpoints, it will be difficult to follow the structure, let alone in the context of the surrounding context.

Now you might say that we rigged this example since it won't even fit on a printed page easily. That's true but the usual reaction would be to add manual line-breaks which is problematic in itself but more so because you would probably do what the equation [the second pen below](http://codepen.io/pkra/pen/YwKmPM/) does: align the parts of the equation.

<p data-height="622" data-theme-id="0" data-slug-hash="xZwMYy" data-default-tab="result" data-user="pkra" data-preview="true" class='codepen'>See the Pen <a href='http://codepen.io/pkra/pen/YwKmPM/'>Responsive Equations: Linebreaking 2/2</a> by Peter Krautzberger (<a href='http://codepen.io/pkra'>@pkra</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<a href="http://i.imgur.com/TFKYEC0.jpg"><img class="well img-responsive center-block" alt="linebreaking, in table cells" src="http://i.imgur.com/TFKYEC0.jpg" /></a>

That's were we hit a practical problem. On the one hand, CSS does not provide the means to [align at a character](https://drafts.csswg.org/css-text-4/#character-alignment). On the other hand, authoring practices are still rooted firmly in print layout so most authors (and authoring tools) end up using table structures for this, just as in the second pen. In addition, the quality of automated line-breaking depends highly on the quality of the original source -- and unfortunately very little math content in the wild is crafted carefully or with the web in mind.

As the saying goes, now you have two problems. You still have to line-break long expressions but now you have to solve the problem of responsive tables as well. As you can see if you play around with the slider, the result is somewhat depressing: each cell is line-broken individually, leading to even more clutter, and the table structure cannot be broken at all, making responsive design essentially impossible.


### There must be another way

Since we already support line-breaking and we know far too much about its painful limitations, we were looking for a fundamentally new way, a more suitable way for rendering equations that could overcome these problems.

Focusing on casual reading, we took a page out of the assistive technologies playbook: summarization. Screenreaders and other assistive technologies (try their best to) summarize the (often chaotic collection of) content fragments in a page so that you can skim through the structure of a page efficiently and dive in once you reach the part you're looking for. To give a simple example, a list would be announced with its type (ordered, unordered etc), alongside its number of list items instead of just starting to read out the first item and proceeding down the list. That way you can quickly browse for example a menu or a list of article abstracts. If you want to get a quick overview of the kind of things screenreaders accomplish, [check out webaim's basic overview](http://webaim.org/techniques/screenreader/#skimming).

<a href="http://i.imgur.com/YBYQ6hH.jpg"><img class="well img-responsive center-block" alt="what if I told you, equations can collapse?" src="http://i.imgur.com/YBYQ6hH.jpg" /></a>

Inspired by this well-established approach, we went after visually summarizing an expression. To do so, we have to do quite a bit of work. First, we need to identify meaningful substructures (that's where the semantic enrichment comes in). Next, we need to calculate what individual subexpressions add in terms of overall size; instead of the heavy DOM duty of measuring things, we could use the semantic information to estimate subexpressions size and complexity efficiently as well as the relationship between them (e.g., several summands). Next, we have to actually collapse the subexpressions to fit in the viewport while reducing clutter at the same time; we do this by generating several versions of the expression with various amounts of subexpressions replaced by meaningful placeholders, such as a **Σ** if we're collapsing a sum of subexpressions. Alongside this, we also provide two highlighting modes that indicate how much content was collapsed.

Finally, we obviously need an interface for exploration so that you can dive into the expression when you need to; we do this using standard MathML maction elements set to `toggle`; not only does MathJax have these built-in already but there's a good chance that other renderers can process it as well. Finish up, we're throwing in some width detection, so that when you resize the viewport, the expressions unfold to make the most of the available space.

The result is a highly compact, clutter-free presentation of the original content that fits naturally while providing the identical structure. This allows you to casually skim through a page while still getting a decent idea for the visual structure and complexity of the content you're passing by, and being ready to provide more details.

You can check out the result for both examples in the pens ([one](http://codepen.io/pkra/pen/XXrQvG) and [two](http://codepen.io/pkra/pen/eJpxVV)) below. But perhaps even better, here's [another real-world example](http://mathjax.github.io/MathJax-RespEq/Semantics-Lab/Struik.html) of an actual document (fragment) which demonstrates how the cumulative effect of the collapse helps within larger fragments.

<p data-height="450" data-theme-id="0" data-slug-hash="XXrQvG" data-default-tab="result" data-user="pkra" data-preview="true" class='codepen'>See the Pen <a href='http://codepen.io/pkra/pen/XXrQvG/'>Responsive Equations: Collapse 2/2</a> by Peter Krautzberger (<a href='http://codepen.io/pkra'>@pkra</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

<p data-height="450" data-theme-id="0" data-slug-hash="eJpxVV" data-default-tab="result" data-user="pkra" data-preview="true" class='codepen'>See the Pen <a href='http://codepen.io/pkra/pen/XXrQvG/'>Responsive Equations: Collapse 2/2</a> by Peter Krautzberger (<a href='http://codepen.io/pkra'>@pkra</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

## Wait, there's more!

Really the most important part from our point of view is this: even though we're only covering this particular use case of casual reading, we handle it in all generality. In other words, you can try it out yourself with any content you want! There's no need to carefully massage your content to make it work. This is MathJax -- it just works.

So grab our demo ([MathML input](https://mathjax.github.io/MathJax-RespEq/Semantics-Lab/Semantics-Lab-MML.html) or [TeX input](https://mathjax.github.io/MathJax-RespEq/Semantics-Lab/Semantics-Lab-TeX.html) if you're into that) and throw your stuff at it. Or use the demo of the document fragment and throw your own documents at it.

## We still got work to do.

You'll probably have noticed that one issue is performance. That's mainly a problem of this demo. We haven't optimized much here, so the demo is doing all the hard work on the fly. That includes the heavy lifting of semantically analyzing MathML, then using that information to rank the potential of a collapsed subexpression, as well as generating the corresponding MathML (with an exponentially growing number of substructures), and then rendering that big hot mess of `maction` elements. Most of this can actually be done in pre-production so we're going to work on enabling that in the next iteration.

And of course what we're most eager to do is to explore other use cases such as responsive equations for improved accessibility as well as for education (domain-specific) purposes. Fingers crossed that we'll get a chance to do so next year!

## So you want to talk tech

If you're interested in the gritty details, then you want to head over to [our developer wiki on GitHub](https://github.com/mathjax/MathJax/wiki/Semantic-Enrichment-project) to learn more about the semantic enrichment project, dive into the [GitHub repository for these demos](https://github.com/mathjax/MathJax-RespEq), explore our [sister project SRE](https://github.com/zorkow/speech-rule-engine/), check out [our workshop paper](https://github.com/mathjax/papers/tree/master/MathUI15) from the CICM MathUI workshop this year, or simply write us an email on our [developer mailing list](mailto:mathjax-dev@googlegroups.com).
