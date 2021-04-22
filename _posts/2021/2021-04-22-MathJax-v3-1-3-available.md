---
layout: post
title: MathJax v3.1.3 now available
date: 2021-04-22
author: Davide P. Cervone
categories:
- News
---

The MathJax team is pleased to announce version 3.1.3 of MathJax, released earlier today.  This is a bug-fix release that fixes over 70 issues.  It also updates the Speech-Rule Engine to version 3.2, and includes a few new features as well.

# New Features in this Release

* The speech-rule engine (SRE) has been updated to v3.2.0. ([SRE release notes.](https://github.com/zorkow/speech-rule-engine/releases/tag/v3.2.0))
* The options controlling the SRE have been separated out from the other assistive options so they can be configured independently.  ([documentation](https://docs.mathjax.org/en/v3.1-latest/options/accessibility.html?highlight=sre#semantic-enrich-extension-options))
* The MathDocument `reset()` command now allows resetting input and output jax. ([#647](https://github.com/mathjax/MathJax-src/issues/647))
* LaTeX environments can now be defined in the MathJax configuration, just like macros. ([#2505](https://github.com/mathjax/MathJax/issues/2505)) ([documentation](https://docs.mathjax.org/en/v3.1-latest/input/tex/extensions/configmacros.html?highlight=environments))
* Add support for all `\mathXYZ` and `\symXYZ` macros (e.g., `\mathsfit`, `\symbfup`) and use multi-letter `<mi>` when possible. ([#2595](https:github.com/mathjax/MathJax#2595))
* Add support for trapping and reporting SRE errors. ([#679](https://github.com/mathjax/MathJax-src/issues/679)) ([documentation](https://docs.mathjax.org/en/v3.1-latest/options/accessibility.html?highlight=enricherror#semantic-enrich-extension-options))
* Add ability to trigger links within expressions (via the return key) while using the expression explorer. ([#687](https://github.com/mathjax/MathJax-src/issues/687))
* Update the `mhchem` extension to the latest version from the author. ([#688](https://github.com/mathjax/MathJax-src/issues/688))
* Update AsciiMath to current version. ([#2640](https:github.com/mathjax/MathJax#2640))


# Bugs Addressed in this release

## TeX Input Issues

* Allow `\middle` to work when a style or color is open. ([#2663](https:github.com/mathjax/MathJax#2663))
* Fully clear tagging on equation start. ([#2643](https:github.com/mathjax/MathJax#2643))
* Ignore `*` in `\\*` and `\\*[...]` constructions. ([#2433](https:github.com/mathjax/MathJax#2433))
* Fix problems with SVG output being misplaced. ([#2554](https:github.com/mathjax/MathJax#2554), mathjax/MathJax#2624, mathjax/MathJax#2577)
* Fix problem with `\|` being stretchy when it shouldn't be. ([#2632](https:github.com/mathjax/MathJax#2632))
* Fix placement of undefined macro when `textmacros` and `noundefined` are both in effect.  ([#2622](https:github.com/mathjax/MathJax#2622))
* Fix problem with autoloading when macro name is followed by a space. ([#2580](https:github.com/mathjax/MathJax#2580))

## MathML Input Issues

* Fix problem with loading entity files when MathML input encounters an entity that isn't defined. ([#2650](https:github.com/mathjax/MathJax#2650))
* Fix handling of `<mrow>` nodes that look like `\left...\right` to be TeX class INNER. (mathjax/Mathjax#2584)
* Don't mark `<mrow>` nodes as fences if the parentheses aren't stretchy. ([#583](https://github.com/mathjax/MathJax-src/issues/583))
* Make `<mspace>` elements have TeX class NONE. ([#2576](https:github.com/mathjax/MathJax#2576))

## Output Issues

* Fix MathML spacing rules for `<mo>` elements to better follow the specification. ([#2392](https:github.com/mathjax/MathJax#2392))
* Better handling of minimum height and width for SVG (so they don't disappear). ([#2605](https:github.com/mathjax/MathJax#2605))
* Fix issues with placement of `<menclose>` notations. ([#2571](https:github.com/mathjax/MathJax#2571))
* Fix several issues with tables (label alignment in CHTML, lines in SVG in tables with tags, vertical centering). (mathjax/Mathjax#2601)
* Update SVG output so that following a link scrolls to the top of the tag rather than the baseline in all browsers. ([#2588](https:github.com/mathjax/MathJax#2588))
* Use a colon in link anchor ids so that links work in Safari in SVG output. ([#2586](https:github.com/mathjax/MathJax#2586))
* Improve positioning of extenders for stretchy characters. ([#2547](https:github.com/mathjax/MathJax#2547), mathjax/MathJax#2598)
* Improve heights of successively larger multi-character surds. ([#2658](https:github.com/mathjax/MathJax#2658))
* Handle variant forms for pseudo-scripts better in fonts that have them. ([#2519](https:github.com/mathjax/MathJax#2519))
* Allow stylesheet to be obtained even after it was created. ([#2542](https:github.com/mathjax/MathJax#2542))
* Correct errors in the horizontal stretchy data for several characters. ([#645](https://github.com/mathjax/MathJax-src/issues/645))
* Updates to handle `smallmatrix` environment properly. ([#582](https://github.com/mathjax/MathJax-src/issues/582), #621)
* Fix problem with selectors for SVG path widths. ([#2618](https:github.com/mathjax/MathJax#2618))
* Fix incorrect glyph for script capital I. (mathjax/MathJax-src#2555)
* Add a small separation between super- and subscripts and their base. ([#2406](https:github.com/mathjax/MathJax#2406))
* Allow "single-character" `<mi>` elements to include trailing combining characters. ([#2617](https:github.com/mathjax/MathJax#2617))
* Improve spacing between accents and their bases, and handle under- and over-lines more like TeX. ([#619](https://github.com/mathjax/MathJax-src/issues/619))
* Handle accents more like TeX does (better sizes and placement). ([#712](https:github.com/mathjax/MathJax#712), mathjax/MathJax#2474)
* Fix handling of italic correction for `<munderover>` and `<msubsup>` combinations. ([#634](https://github.com/mathjax/MathJax-src/issues/634))
* Better handling of the placement of scripts in enriched MathML. (zorkow/speech-rule-engine#462, #617)
* Handle spacing in `<mroot>` elements properly. ([#2630](https:github.com/mathjax/MathJax#2630))
* Make sure hit-box is translated along with the hit-able element in SVG output. ([#2530](https:github.com/mathjax/MathJax#2530))
* Add support for setting the unknown character family for when a character is not in the MathJax fonts. ([#576](https://github.com/mathjax/MathJax-src/issues/576))
* Make sure bevelled fraction is symmetrically placed. ([#580](https://github.com/mathjax/MathJax-src/issues/580))
* Prevent border-spacing and border-collapse from being inherited from an outer table. ([#686](https://github.com/mathjax/MathJax-src/issues/686))

## Miscellaneous

* Update operator dictionary to the current state of Appendix C of the specification. ([#652](https://github.com/mathjax/MathJax-src/issues/652))
* Skip DOM node types that MathJax can't process. ([#2662](https:github.com/mathjax/MathJax#2662))
* Fix a problem where `enableEnrich` and other a11y options could not be configured. ([#2651](https:github.com/mathjax/MathJax#2651))
* Properly serialize `<annotation-xml>` content. ([#678](https://github.com/mathjax/MathJax-src/issues/678))
* Reset the tex labels and ids when A11y changes force re-rendering. ([#2597](https:github.com/mathjax/MathJax#2597))
* Trim TeX and annotations before copying to clipboard. ([#2574](https:github.com/mathjax/MathJax#2574))
* Remove `role='presentation'` attributes. ([#2608](https:github.com/mathjax/MathJax#2608))
* Handle measuring of elements in jsdom adaptor the same way as in liteDOM, since jsdom doesn't do measurements. ([#2550](https:github.com/mathjax/MathJax#2550))
* Show more internal properties in serialized MathML. ([#2585](https:github.com/mathjax/MathJax#2585))
* Improve build tools to make it easier to create custom components. ([#592](https://github.com/mathjax/MathJax-src/issues/592))
* Fix `pack` and `makeAll` commands to display the modules used in version 5 of webpack. ([#591](https://github.com/mathjax/MathJax-src/issues/591), #579)
* Fix `webpack.common.js` to handle windows paths correctly. ([demos-web#30](https://github.com/mathjax/MathJax-demos-web/issues/30))
* Update LiteAdaptor to handle full-width characters better. ([demos-node#29](https://github.com/mathjax/MathJax-demos-node/issues/29))


# Potential Future Breaking Changes

Some of the changes made to the options to accommodate the updated speech-rule engine are potentially breaking changes, in that the previous options (`enrichSpeech`, `a11y.locale`, `a11y.speechRules`) are no longer valid options.  Since MathJax flags invalid options and stops processing when it encounters one, this means any configurations that used the older options would no longer work.  Version 3.1.3 includes code to transfer the old options to their new locations, but that code will be removed in version 3.2.  This gives page authors the opportunity to fix the issue before version 3.2 is released and their pages break.

Similarly, the code that automatically renames the older TeX package names to their current all-lower-case versions (e.g., `configMacros` to `configmacros` and `colorV2` to `colorv2`) will likely be removed from version 3.2, so if you are using old package names, you should change your configurations before version 3.2.  This applies to `\require{}` macros that refer to the older names as well as their names in the `loader` section, the `tex.packages` array, and the `tex.autoload` block.

Version 3.2 will also see the removal of the `matchFontHeight` option for the SVG output jax, since it only applies to the CommonHTML output, but is currently allowed in the `svg` configuration block, while doing nothing.

Version 3.2 may include other breaking changes, such as the removal of the `toArray()` method from the `LinkedList` class (and its subclasses), so any custom code that uses that should switch to using `Array.from(...)` around the list instead.

Finally, the `Box.ts` and `CssStyles.ts` (and their associated `.js` files) have been moved from the `output` directories to the `util` directory.  Compatibility files were placed in the original locations so that older code would continue to work, but these will likely be removed in v3.2, so you should modify any custom code that loads these files to obtain them from the `util` directory instead.

# Availability of version 3.1.3

Although version 3.1.3 was released earlier today, it may take a day or two for the new version to propagate to the various CDN network computers, so you may not see v3.1.3 immediately if you are loading mathjax using a generic `mathjax@3` URL.  You should be able to obtain it immediately if you use the full version `mathjax@3.1.3`.

You may also have a cached version in your browser, so may need to either clear the browser cache, or relaunch your browser (or both) in order to get the latest version (the cached version should expire in about a week, depending on the CDN being used).

Note that it is possible for some files to be updated before others, so it may be the case that users of websites that load extensions (either explicitly or by autoloading TeX packages) may get mixed versions for until the CDN versions stabilize, which should be within a day.  If you are loading one of the combined components (e.g., `tex-chml.js`), this is less likely to be an issue, and if you are loading a component ending in `-full` it is even less likely to occur.

Version 3.1.3 is available immediately from npm and GitHub for use in node applications.
