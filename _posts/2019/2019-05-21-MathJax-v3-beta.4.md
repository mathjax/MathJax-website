---
layout: post
title: MathJax v3 beta.4 released
date: 2019-05-21
categories:
- News
status: publish
type: post
published: true
author: Davide P. Cervone
---

The MathJax team has been working hard on a major rewrite of MathJax from the ground up, with the goal of modernizing MathJax's internal infrastructure, bringing it more flexibility for use with contemporary web technologies, making it easier to use with NodeJS for pre-processing and server-side support, and making it faster to render your mathematics. We have made headway in all these areas and we are pleased to announce the fourth public [beta release of MathJax v3](https://github.com/mathjax/mathjax-v3/releases/tag/3.0.0-beta.4).

## Where to Find the Beta Release

The code for the release is available in the [beta](https://github.com/mathjax/mathjax-v3/tree/beta) branch of the [MathJax v3](https://github.com/mathjax/mathjax-v3) github repository.

The [mj3-demos repository](https://github.com/mathjax/mj3-demos) includes examples of how to use MathJax v3 in web browsers, including interactive examples, custom configurations, custom tex extensions, and custom builds that you can use as a starting point for your own projects.  See the instructions in that repository for more details.

The [mj3-demos-node repository](https://github.com/mathjax/mj3-demos-node) includes examples for how to use MathJax v3 in NodeJS applications, and includes sample tools and examples of how to use a number of MathJax v3's features.

## What's Included in MathJax v3

This beta version includes two input processors (TeX and MathML) and two output processors (CommonHTML and SVG).  Other input and output processors (e.g., AsciiMath input) will be added in the future.

The current TeX input processor has all the core functionality of the MathJax v2 TeX input, and nearly all the extensions that are now available in v3.

The CommonHTML and SVG output implement all the MathML elements that they do in v2, but do not yet include support for line breaking (neither automatic nor explicit ones); this will be implemented in a later version.  Both output renderers currently only support the MathJax TeX font; other fonts will be added in the future.

## What's New

This beta includes a number of important improvements over the beta.3 version.  

### MathJax Components

The biggest change is the ability to create MathJax "components" that can be dynamically loaded by MathJax as needed (much as could be done in version 2).  This allows portions of MathJax to be bundled together into components that include most or all of what you need to run MathJax, but still allows less-used pieces to be loaded on demand later when needed.  This is similar to v2's combined configuration files and TeX extensions.  

The main goal of these components is to use them for the delivery of MathJax from the CDNs that host MathJax.  This allows you to customize the MathJax components that you use without having to have (as single files on the CDN) every possible combination of parts that anyone would need packaged together.  We will provide a number of all-in-one packages that include an input and output jax together with the data for a font to be used, but also will provide separate components for the individual input and output jax, fonts, TeX extensions, and so on, so that you can mix-and-match them as needed.  

MathJax components can be used in the browser as well as on the server in `NodeJS` applications, so browser and server-side applications can use the same code base and configurations.  Components can be combined together into larger packages, either with other MathJax components, or with your own code, via `webpack`, for example.  

Moreover, the tools for building components are available so that you can create your own custom components that you can serve from your own website if you have special needs not addressed by the CDN.  For example, authors writing TeX extensions for MathJa can create their own components that can be loaded into MathJax from a different server even if the core MathJax is loaded from a CDN.

Although components are a convenient way of working with MathJax, those writing `NodeJS` scripts that use MathJax need not use the components as we have packaged them at all; they can continue to import MathJax into their projects directly, as in previous beta versions.

### Configuring Components

The component system described above can be configured using a global variable `MathJax` that you set before loading the main MathJax component that you are planning to use.  The `MathJax` variable specifies configuration blocks for the various components in much the same was as was done in version 2 (this is illustrated in the examples below, and described in more detail in a separate section below).  MathJax will modify this global variable to include the methods and data that it creates during the startup process for your use in your applications.

### Rendering and Converting Math

The mechanism for rendering expressions in previous beta versions of MathJax 3 involved calling a sequence of MathJax commands to perform the individual actions required to find, compile, typeset, and insert the math into the page.  These functions are still available, but there are now several new functions to make that process easier and more natural to perform.  The `render()` method of the `MathDocument` and `MathItem` classes will perform all the actions normally needed for typesetting math to the page, and the `convert()` method will perform conversion from the input format to the output format of the page (or to MathML, which is used internally by MathJax).

These methods use an internal list of actions to be taken when they are called, and those lists are updated automatically when extensions are loaded.  For example, when the semantic-enrichment extension is loaded, the action that performs the enrichment is added to `render()` and `convert()` automatically, so you don't have to call the extension's methods yourself.  You can even add your own actions to the list, if you want, or could remove the automatic ones to fully customize the rendering process.

If you use the MathJax components described above, MathJax will set up short-hand functions for you for typesetting the page or converting from input to output formats.  For example, if you load the `input/tex` and `output/chtml` components (or the `tex-chtml` combonent that combines them), you automatically get methods `Typeset()` and `TypesetPromise()` for typesetting the page, and  `tex2chml()`, `tex2chtmlPromise()`, `tex2mml()`, and `tex2mmlPromise()` that convert from TeX to HTML or MathML.  You also get `texReset()`, `TypesetClear()`, and `chtmlStylesheet()` that reset TeX's labels and equation numbers, reset the typesetting system entirely (the information about CSS used, font caches, etc.), and produce the CSS stylesheet object used by CommonHTML for the expressions you have processed so far.  The ones ending in `Promise` return a promise that is resolved when the math is completed (use this if there is a chance that an external module needs to be loaded, e.g., with `\require`), while the others perform the typesetting or conversion and return the result immediately (they will throw an error if an external module needs to be loaded).

If you are using the MathJax components, then the `MathJax.startup` object includes references to the important objects created by MathJax automatically, like the input and output jax, the DOM adaptor, and the MathDocument.  You may reference these as needed in order to access their methods for more special-purpose needs.  Some of the examples below illustrate this.

### Contextual Menu

A contextual menu similar to the one in version 2 has been added to MathJax v3 in this beta version.  It has the actions familiar from version 2, but also includes some new features like copying to the clipboard.

### Assistive Technology

This beta version now includes support for assistive technology via the generation of speech strings attached to the math elements, and via an interactive expression explorer like the one in version 2.  These can be activated using the contextual menu, as in version 2, or by importing the a11y components into your node project or custom webpacked version of MathJax.

### CommonHTML CSS

The CommonHTML output now produces only the CSS needed for the expressions on the page, rather than the CSS for every possible character in the font being used.  This reduces the number of CSS rules used by CommonHTML considerably, and improves performance of  browser refreshes and zooming.  If you use `NodeJS` applications to preprocess math expressions and capture the CSS output to a separate CSS file, you may need to process all the math expressions before generating the CSS file.  Alternatively, there is a new `adaptiveCSS` option for the CommonHTML output jax that you can set to `false` to have MathJax return to the beta.3 behavior.

### SVG Font Caching

The SVG output now includes the option of caching the glyphs used to render the mathematics so that the paths are shared if a character is used more than once.  The cache can either be global (all expressions on the page share a common cache) or local (each expression has a cache for glyphs used within it, but they are not shared between expressions).  This can be set using the `fontCache` option for the SVG jax, and it can be set to `'global'`, `'local'`, or `'none'`.  The default is `'local'` so that conversion of math to SVG will produce self-contained SVG expressions.

### TeX Extensions

As part of the new components feature discussed above, the TeX input jax can load TeX extensions in much the same way that v2 could.  This is accomplished through the new `require` extension that implements the `\require` macro to load extensions.  There is also and `autoload` extension that will load extensions automatically when their macros or environments are first used.  These are included in the default `input/tex` component, so you if you use that component (or one of the combined components based on it, like `tex-chtml` or `tex-svg`), you should have access to these extensions automatically.  For example, `\require{physics}` will load the `physics` package.

Another new TeX package is the `configMacros` extension that allows you to configure pre-defined macros using the TeX input jax options, much like you could do in v2.

The new `tagFormat` extension allows you to customize how tags are handled in MathJax, and provides the equivalent of the `formatNumber()`, `formatTag()`, `formatID()` and `formatURL()` options of the TeX `equationNumbers` configuration block from v2.

The new `braket` extension implements the physics bra-ket notation macros.  They will be loaded automatically if you use the `input/tex` component, or include the `autoload` extension in your project.

### Color Macro

In version 2, the `\color` macro worked in a non-standard way.  The LaTeX `\color` macro acts as a switch, to change the current color for all the math that follows it, while the MathJax version took a second argument that enclosed the math to be colored.  Version 2 included a `color` extension that implemented the LaTeX `\color` behavior, but it was not loaded by default.

In version 3, the LaTeX `\color` macro will be the default behavior if you are using the `input/tex` or `input/tex-full` components, or any component build on them (e.g., `tex-chtml` or `tex-svg`).  You can restore the v2 behavior by setting `color: []` in the `autoload` configuration for the `tex` component (when using `input/tex`), or by removing the `color` extension from the package list using `packages: {'[-]': ['color']}` in the `tex` configuration (for `input/tex-full`).

## NOTE

This is the fourth public beta release of MathJax v3.

Mathjax v3 is in beta release. **Do not use this in production**, but please test it and report issues on the [MathJax v3 issue tracker](https://github.com/mathjax/mathjax-v3/issues)!

This is the final planned beta version. We expect an official 3.0 release in the near future.
