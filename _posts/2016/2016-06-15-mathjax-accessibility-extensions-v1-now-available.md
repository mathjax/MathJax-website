---
layout: post
title: MathJax Accessibility Extensions v1.0 now available
date: 2016-06-15
categories:
- News
author:
  first_name: Peter
  last_name: Krautzberger
---

The MathJax Consortium is pleased to announce the release of the MathJax Accessibility Extensions v1.0. The Consortium is grateful for the support from the [Alfred P. Sloan Foundation](http://www.sloan.org/) in this project.

The MathJax Accessibility extensions provide several tools and features that enable universal rendering of mathematics on the web. They enhance rendering both visually and aurally. In particular:

* An innovative responsive rendering of mathematical content through collapsing and exploration of subexpressions.
* An aural rendering tool providing on-the-fly speech-text for mathematical content and its subexpressions using various rule sets.
* An exploration tool, allowing for meaningful exploration of mathematical content including multiple highlighting features and synchronized aural rendering.

### Overview

The MathJax Accessibility extensions currently include the following  components:

* The Accessibiltiy Menu Extension, `accessibility-menu.js`, a lightweight (<1kb zipped) extension to extend the MathJax Menu with opt-in functionality for assistive features.
* The Explorer Extension, `explorer.js`, which provides speech-text generation as well as expression exploration and highlighting functionality.
* The Auto-collapse extension, `auto-collapse.js`, which provides a responsive rendering mode that automatically collapses subexpressions to fit equations on smaller screens.
* The Collapsible Extension, `collapsible.js`, an extension that adds the ability to manually collapse expressions based on estimates of the complexity of the expressions and their subexpressions [used by `auto-collapse.js` and `explorer.js`].
* The Semantic-Enrichment Extension, `semantic-enrich.js`, which coordinates between MathJax and `mathjax-sre.js` to enrich MathJax's internal representations with semantic information about the expressions [used by all the extensions above].
* The MathJax SRE Extension, `mathjax-sre.js` (and its components), a custom build of [speech-rule-engine](https://github.com/zorkow/speech-rule-engine/), providing semantic enrichment and speech-text generation.

### Quick start

The easiest way to get started is by adding the Accessibility Menu Extension to your MathJax configuration. This adds very little load to your site while providing your visitors with an accessible opt-in for all features.

Future MathJax releases will integrate the Accessibility Menu Extension which will automatically enable this opt-in for most sites using MathJax. For now (MathJax v2.6 and below), you will need to [load the extensions from our third party extension repository](http://docs.mathjax.org/en/latest/options/ThirdParty.html#mathjax-third-party-extension-repository).

To load the Accessibility Menu Extension, you set the custom configuration path and add the extensions to your configuration's `extensions` array, e.g., add

```html
<script type="text/x-mathjax-config">
MathJax.Ajax.config.path["Contrib"] = "https://cdn.mathjax.org/mathjax/contrib";
MathJax.Hub.Config({
  // ...your configuration options...
  extensions: ["[Contrib]/a11y/accessibility-menu.js"]
});
</script>
```

**before** you load `MathJax.js` itself.

By default, the Accessibility Menu will not load any of the other extensions, but merely extends the menu with options for users to opt-in to the other extensions.

Of course, you can activate the sub-extensions by loading them directly in the extensions array or by using the `menuSettings` configuration option, e.g.,

```html
<script type="text/x-mathjax-config">
MathJax.Ajax.config.path["Contrib"] = "https://cdn.mathjax.org/mathjax/contrib";
MathJax.Hub.Config({
  // ...your other configuration options...
  extensions: ["[Contrib]/a11y/accessibility-menu.js"]
  menuSettings: {
    collapsible: true,
    autocollapse: true,
    explorer: true
  }
});
</script>
```

The CodePen example below allows you to test the result.

<p data-height="296" data-theme-id="0" data-slug-hash="yOWrWQ" data-default-tab="html,result" data-user="pkra" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/pkra/pen/yOWrWQ/">MathJax Accessibility | Menu extension</a> by Peter Krautzberger (<a href="http://codepen.io/pkra">@pkra</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## A quick guide for readers

On a site that loads any of the MathJax Accessibility Extensions, you will find three additional items in the top level of the MathJax Menu which control the respective extensions:

* "Collapsible Math" (toggle)
* "Auto-Collapse" (toggle)
* "Explorer" (submenu)

![MathJax Menu with Accessibility Menu options](/images/menu1.png)

If the Explorer Extension is not active, its submenu will only list one toggle "Activate" and a hint that more options will appear in this submenu when the Explorer Extension is active.

![MathJax Menu with inactive Explorer submenu](/images/menu2.png)

If the Explorer Extension is active, you will see a submenu structure exposing all its options:

* Active (toggle)
* (separator)
* Walker (submenu of radio buttons)
  * No Walker
  * Syntax Walker (default)
  * Semantic Walker
* Highlight (submenu of radio buttons)
  * None (default)
  * hover
  * flame
* Background (submenu of radio buttons)
  * Blue (default)
  * Red
  * Green
  * Yellow
  * Cyan
  * Magenta
  * White
  * Black
* Foreground (submenu of radio buttons)
  * Black (default)
  * White
  * Magenta
  * Cyan
  * Yellow
  * Green
  * Red
  * Blue
* (separator)
* Speech Output (toggle)
* Generation (submenu of radio buttons)
  * Eager
  * Mixed
  * Lazy (default)
* (separator)
* MathSpeak Rules
  * Verbose (default)
  * Brief
  * Superbrief
* ChromeVox Rules
  * Verbose
  * Short
  * Alternative

![MathJax Menu with active Explorer submenu](/images/menu3.png)

Let us quickly describe their function:

* "Walker": controls the style of exploration.
* "Highlight": adds a highlight to indicate the complexity measure for subexpressions (especially useful in combination with collapsed expressions)
* "Background/Foreground": set the color for Highlight which is also used when using the walker to explore an expression
* "Speech Output" activates the generation of speech-text in both top-level ARIA labels as well as synchronized speech-text when exploring
* "Generation" determines if the speech output on the outer element provides a short summary, a longer summary or a speech string for the entire expression
* "MathSpeak/ChromeVox Rules": allows you to choose between the different rule sets for speech-text generation.

#### Bookmarklet

If you encounter a page without the Accessibility extension, you can sideload the extensions via a bookmarklet, e.g., the following would load the Accessibility Menu:

```javascript
if(window.MathJax){
  MathJax.Ajax.config.path["a11y"] = "https://cdn.mathjax.org/mathjax/contrib/a11y";
  MathJax.Ajax.Require("[a11y]/accessibility-menu.js");
}
```

Or simply <a href='javascript:if(window.MathJax){ MathJax.Ajax.config.path["a11y"] = "https://cdn.mathjax.org/mathjax/contrib/a11y"; MathJax.Ajax.Require("[a11y]/accessibility-menu.js"); }'> drag this link to your bookmarks</a>.

### A quick introduction to the new responsive rendering

The `auto-collapse.js` and `collapsible.js` Extensions provide a fundamentally new way of rendering mathematics responsively. While MathJax has supported automatic line-breaking since v2.0, we have often seen its limitations, in particular due to authoring practices such as the use of tabular layout or optimization for print media. We felt completely different approaches might be a better fit for [the web's grain](http://frankchimero.com/writing/the-webs-grain/) and this extension is our first attempt at doing so. You can find more thoughts on this problem in [a previous post](https://www.mathjax.org/responsive-equations/).

The idea behind our new rendering mode is simple and, in fact, we stole a page from the accessibility playbook: providing summary information for complex content fragments. The new extensions leverage semantic analysis to identify suitable sub-expressions so that collapsing them will fit the resulting expression on the screen while remaining a meaningful summary. In addition, a simple UI allows you to explore (or collapse) the expressions should you require more details.

The CodePen below should give you a first idea if you're viewing this on a small screen.

<p data-height="265" data-theme-id="0" data-slug-hash="yJOGbK" data-default-tab="html,result" data-user="pkra" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/pkra/pen/yJOGbK/">MathJax Accessibility Extensions | Responsive Rendering</a> by Peter Krautzberger (<a href="http://codepen.io/pkra">@pkra</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script><script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### A quick introduction to `explorer.js`

The most complex feature of the Accessibility Extensions is the Explorer extension. This extension leverages all other extension to enable all users to meaningfully explore an equation. The explorer analyzes the semantic structure of an equation and provides exploration, highlighting, and synchronized speech-text generation.

To start the Explorer, put an equation in focus using <kbd>TAB</kbd> and press <kbd>SHIFT+SPACE</kbd> to start. This will start the highlighting and synchronized speech output both of which can be configured via the MathJax Menu (and of course the MathJax configuration). In the Explorer, you can use the arrow keys to explore the expression: <kbd>UP/DOWN</kbd> will switch between levels and <kbd>LEFT/RIGHT</kbd> will explore each level. You get additional information using <kbd>SPACE</kbd> and, where possible, collapse subexpressions for summary descriptions using <kbd>ENTER</kbd>.

If you do not have a screenreader running, you can switch on subtitles via the MathJax Menu to get an idea for what a screenreader should speak while exploring.

The CodePen below loads the Explorer Extension by default -- try it out!

<p data-height="265" data-theme-id="0" data-slug-hash="VjaqQL" data-default-tab="result" data-user="pkra" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/pkra/pen/VjaqQL/">MathJax Accessibility | Explorer extension</a> by Peter Krautzberger (<a href="http://codepen.io/pkra">@pkra</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Support and Documentation

More documentation on configuring and using the MathJax Accessibility extensions can be found [on GitHub](https://github.com/mathjax/MathJax-a11y/tree/master/docs/README.md).

In short, the extensions work on all modern browsers (IE10+). The exploration features work with MathJax's CommonHTML, SVG, and HTML-CSS output. We have tested numerous combinations of screenreaders, browsers and operating systems and while we cannot claim universal support, we believe most screenreader users should be able to find a suitable setup -- and of course we will continue to improve our support!

If you encounter any issues, please let us know by filing a bug on either the [MathJax-a11y issue tracker](https://github.com/mathjax/MathJax-a11y/issues) or on our main [MathJax issue tracker](https://github.com/mathjax/MathJax/issues).

### Research information

In the course of the research for this project, the MathJax team published several articles and gave a number of presentations. As always, these are (or will be)  listed in the [MathJax documentation](http://docs.mathjax.org/en/latest/misc/articles.html).

<hr>

Thank you for your continued interest in MathJax!
