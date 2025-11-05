window.MathJax = {
  loader: {load: ['input/asciimath']},
  startup: {
    pageReady: function () {
      //
      // Synchronize menu renderer item with on-screen popup menu
      //
      const select = document.getElementById('Renderer');
      if (select) {
        const renderer = MathJax.startup.document.menu.settings.renderer;
        const menu = MathJax.startup.document.menu.menu;
        const item = (menu.getPool ? menu.getPool() : menu.pool).lookup('renderer');
        select.value = renderer;
        item.registerCallback(() => {
          var value = item.getValue();
          if (value !== select.value) select.value = value;
        });
        window.setMode = (renderer) => {
          if (item.getValue() !== renderer) item.setValue(renderer);
        }
        //
        //  Set up processing of input content
        //
        var input = document.getElementById('MathInput');
        var output = document.getElementById('MathPreview');
        var button = document.getElementById('renderHTML');
        output.innerHTML = input.value.trim();
        window.typesetInput = () => {
          button.disabled = true;
          output.innerHTML = input.value.trim();
          MathJax.texReset();
          MathJax.typesetClear();
          MathJax.typesetPromise([output]).catch((err) => {
            output.innerHTML = '';
            output.appendChild(document.createTextNode(err.message));
            console.error(err);
          }).then(() => {
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
script.src = 'https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js';
document.head.appendChild(script);
