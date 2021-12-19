window.MathJax = {
  loader: {load: ['input/asciimath']},
  startup: {
    pageReady: function () {
      //
      // Synchronize menu renderer item with on-screen popup menu
      //
      var select = document.getElementById('Renderer');
      if (select) {
        var renderer = MathJax.startup.document.menu.settings.renderer;
        var menu = MathJax.startup.document.menu.menu;
        var item = (menu.getPool ? menu.getPool() : menu.pool).lookup('renderer');
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
        var button = document.getElementById('renderHTML');
        output.innerHTML = input.value.trim();
        window.typesetInput = function () {
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
        input.oninput = typesetInput;
      }

      return MathJax.startup.defaultPageReady();
    }
  },
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    processEscapes: true
  }
};

//
//  Load MathJax
//
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
script.setAttribute('id', 'MathJax-script');
document.head.appendChild(script);
