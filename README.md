# MathJax-website ![](https://travis-ci.org/mathjax/MathJax-website.svg?branch=gh-pages)

This repository hosts the source for www.mathjax.org.

We have migrated from an older Wordpress-driven site. Some lose ends still need to be tied up so feel free to lend us a hand by filing issues or making pull requests.

## Notes for developers

* The site is build with [Jekyll](https://github.com/jekyll/jekyll) and [GitHub
Pages](https://help.github.com/articles/using-jekyll-with-pages/).
* For GitHub pages, the `gh-pages` branch is the main branch so please branch off `gh-pages`.
* Logos etc. must be hosted on the CDN (for IP reasons).
* `style.css` is generated from `bootstrap.js` and `main.css` using [purifycss](https://github.com/purifycss/purifycss)

### Extras.

#### Images with captions.

To include an image with a caption, we've created `_includes/image.html`, using bootstrap's `thumbnail` class.

To use it, you include a liquid tag in the page, e.g.,

```
{% include image.html img="images/cheezburgers.png" title="a lolcat" caption="I can haz cheezburgers?" %}
```

Optionally, you can also add `url="//lol.cats/are"` which will wrap the resulting `img` in an `a`.
