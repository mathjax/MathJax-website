---
layout: post
title: Making math on Wikipedia more awesome  | an interview with Moritz Schubotz
date: 2015-03-20
categories: COMM
author:
  first_name: Peter
  last_name: Krautzberger
---

{% include image.html img="images/interview_profile_mediawiki.jpg" title="Moritz Schubotz" caption="Moritz Schubotz maintains the MediaWiki Math Extension" %}
            
_We haven't done one of these in ages! Here's our fifth interview with interesting people in the MathJax community. This time we had the pleasure to talk to [Moritz Schubotz](http://moritzschubotz.de/) (Technische Universität Berlin) about math on Wikipedia._

**You are the volunteer lead on MediaWiki's Math Extension. Can you tell us a little bit about the Math Extension?**

The [Math Extension](https://www.mediawiki.org/wiki/Extension:Math) is the MediaWiki component responsible for rendering mathematical expressions. In order for Wikipedia editors to enter formulae they will need to employ the MediaWiki LaTeX dialect [texvc](http://www.formulasearchengine.com/texvccheck).

**The extension offers a lot of options already. What is different about your new work?**

The original extension version “Math 1.0,” forced users to select from one of several rendering options and required administrators to configure and install Math extension dependencies, which was rather time consuming. In the latest version “Math 2.0” the new MathML rendering mode provides “robust, scalable, fast, and accessible math rendering for Wikipedia” and also supports private wikis. Furthermore, it no longer requires any configuration by either administrators or users. It uses a new rendering backend, which can be hosted on a different server. In [our Mathoid paper](http://link.springer.com/chapter/10.1007%2F978-3-319-08434-3_17), Gabriel Wicke and I explain why this new rendering mode is preferred.

**Can you tell us a little bit about your background and the history of the project?**

After having completed my Diplom (equivalent to a Master’s degree) in Physics, I started my PhD studies in Computer Science with a focus on Math Search. Since Wikipedia contains most of the Mathematical World Knowledge and the articles are written in a quite uniform, continuously improving language and style, the Wikipedia corpus is a great corpus to test new search and information retrieval methods. Since neither PNG images nor the TeX source are suitable for math search, I changed the math to output MathML as well. As a hobby project, I kept working on the Math Extension, in order to contribute to Wikipedia and transform my research prototype into production software.

**The Wikipedia community can be challenging given the different groups involved (Wikimedia Foundation, MediaWiki community, and the Wikipedia editors). What has your experience been like?**

First and foremost I have to state that every employee of the Wikimedia Foundation (and its chapters) that I have met have been extremely helpful and friendly. However, the Foundation is a fast growing organization with an extraordinarily huge and heterogeneous community with different interests. While I wish that one employee would be assigned to do code review for the Math Extension once in a while, I have to respect the [Funds Dissemination Committee](https://meta.wikimedia.org/wiki/Grants:APG/Funds_Dissemination_Committee) decision not to fund math search related efforts. My volunteer predecessors who tried to take care of the Math Extension before I joined resigned at some point in time since their proposed improvements did not end up in the production system. In contrast to them, I’m in a more comfortable situation to have two individuals, Frédéric Wang and Gabriel Wicke who are enthusiastic about conducting code reviews on a volunteer basis.

**How have the responses to the new Math Extension been so far? Any surprises?**

No, no surprises. The new rendering looks different, i.e., the specification for spaces and font sizes in MathML (that’s the new output) are slightly different from TeX. That people discuss which version looks better was therefore expected. Furthermore, there are some bugs that have been discovered. But I think this is normal when a new feature is launched on Wikipedia sized websites.

**What are your near and long term plans for the future of MediaWiki Math Extension?**

The near future plan certainly is to enable the new rendering mode for unregistered visitors as well. Before we can do that some issues need to be resolved. I think there are good chances that this will happen in 2015.

**Are there any other projects of yours people should keep an eye on?**

There is also the [MathSearch Extension](https://www.mediawiki.org/wiki/Extension:MathSearch), but this is still a research prototype. However, even today this extension indexes all formulae in your wiki, provides a search interface and tries to automatically infer identifier semantics from the surrounding text contents. For those who may be interested, have a look at demo [demo.formulasearchengine.com](http://demo.formulasearchengine.com).
