var _gaq = _gaq || [];

_gaq.push(['_setAccount', 'UA-15609829-1']);
_gaq.push(['_addDevId', 'i9k95']); // Google Analyticator App ID with Google
_gaq.push(['_gat._anonymizeIp']);
_gaq.push(['_trackPageview']);

(function () {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

window.MathJax = {
  loader: {load: ['input/asciimath']},
  startup: {
    pageReady: function () {
      //
      // Synchronize menu renderer item with on-screen popup menu
      //
      var renderer = MathJax.startup.document.menu.settings.renderer;
      var select = document.getElementById('Renderer');
      var item = MathJax.startup.document.menu.menu.getPool().lookup('renderer');
      select.value = renderer;
      if (renderer !== 'CHTML') item.setValue(renderer);
      item.registerCallback(function () {
        var value = item.getValue();
        if (value !== select.value) select.value = value;
      });
      window.setMode = function (renderer) {
        if (item.getValue() !== renderer) item.setValue(renderer);
      }
      //
      //  Set up processing of input content
      //
      var input = document.getElementById('MathInput');
      var output = document.getElementById('MathPreview');
      output.innerHTML = input.value.trim();
      window.typesetInput = function (button) {
        button.disabled = true;
        output.innerHTML = input.value.trim();
        MathJax.texReset();
        MathJax.typesetClear();
        MathJax.typesetPromise([output]).catch(function (err) {
          output.innerHTML = '';
          output.appendChild(document.createTextNode(err.message));
          console.error(err);
        }).then(function () {
          button.disabled = false;
        });
      }

      return MathJax.startup.defaultPageReady();
    }
  },
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    processEscapes: true
  }
};

var followHash = function () {
  var anchor = document.querySelector('a[href="' + location.hash + '"]');
  var permissibleTargets = [
    "#demo",
    "#a11y",
    "#samples",
    "#ams-stub",
    "#siam-stub",
    "#stackoverflow-stub",
    "#ieee-stub",
    "#elsevier-stub",
    "#sponsorship-program",
    "#gettingstarted",
    "#apis",
    "#browsers",
    "#to-demo",
    "#to-a11y",
    "#to-samples",
    "#to-ams-stub",
    "#to-siam-stub",
    "#to-stackoverflow-stub",
    "#to-ieee-stub",
    "#to-elsevier-stub",
    "#to-sponsorship-program",
    "#to-gettingstarted",
    "#to-apis",
    "#to-browsers"
  ];
  // console.log(permissibleTargets.indexOf(location.hash));
  if (anchor && permissibleTargets.indexOf(location.hash) > -1) {
    anchor.click();
    // scroll a little to offset fade-out
    // HACK Firefox requires small timeout; not sure why
    setTimeout(function () {
      var h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      var offset = h / 3;
      // console.log(offset);
      var target =
          document.getElementById(location.hash.slice(1)) ||
          document.getElementById("art");
      document.body.scrollTop += -offset;
      document.documentElement.scrollTop += -offset;
    }, 1);
  }
};
window.onhashchange = followHash;

//
//  Load MathJax
//
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
document.head.appendChild(script);
