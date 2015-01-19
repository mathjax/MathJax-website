# MathJax-website, the repository for www.mathjax.org

This repository is work in progress and will eventually be the new home for 
www.mathjax.org.

We are currently migrating from the existing Wordpress-driven site.

## Notes for MathJax developers

* The site is build with [Jekyll](https://github.com/jekyll/jekyll) and [GitHub
Pages](https://help.github.com/articles/using-jekyll-with-pages/).
* For GitHub pages, the gh-pages branch is the main branch; work off that one.
* Logos etc. must be hosted on the CDN for IP reasons.

## Todo

* Add license? (which one?)
* Add Google analytics
  * add MathJax performance tracker (see current site)
* integrate social icons
* replace copy&paste video
* test, test, test
  * check each post for broken code / links to old content
* CNAME file (at launch)

### Pages to replicate (here or on the docs)


http://www.mathjax.org/download/mathjax-cdn-terms-of-service
http://www.mathjax.org/cla

http://www.mathjax.org/resources/articles-and-presentations/accessible-pages-with-mathjax/
http://www.mathjax.org/resources/articles-and-presentations/mathematics-e-learning-community-benefits-from-mathjax/
http://www.mathjax.org/ext/miner-jmm2010/

http://www.mathjax.org/demos/config/


### Possible discards

http://www.mathjax.org/help-v2/fonts/
http://www.mathjax.org/help/menu/
http://www.mathjax.org/help/zoom/

http://www.mathjax.org/download/mathjax-v1-0-1a-download-instructions/
http://www.mathjax.org/download/mathjax-change-log/

#### archiving the old wordpress site

* create complete backup.
* create static copy
  * e.g. https://wordpress.org/plugins/really-static/

#### plans

* would love to use flexbox (sponsor image grid etc)