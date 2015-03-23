---
layout: page
title: MathML Samples
---

Our homepage is configured to use MathJax's HTML-CSS mode with web fonts to display the equations, which produces uniform layout and typesetting across browsers. But MathJax can also be configured to use native MathML rendering when available in a browser, and only fall back to HTML-CSS mode when native rendering is not available. You can try the various output modes using the MathJax context Menu (which you access by ctrl+clicking / alt-clicking an equation) or the button below.

Select the rendering mode:

<select id="Renderer" onchange="setMode(this.value)" style="margin: 0px 0px 0px">
  <option value="NativeMML">MathML</option>
  <option value="HTML-CSS">HTML-CSS</option>
  <option value="SVG">SVG</option>
</select>


### The Quadratic Formula

<math display="block">
  <mrow>
    <mi>x</mi>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mo>&#x2212;</mo>
        <mi>b</mi>
        <mo>&#x00B1;</mo>
        <msqrt>
          <mrow>
            <msup>
              <mi>b</mi>
              <mn>2</mn>
            </msup>
            <mo>&#x2212;</mo>
            <mn>4</mn>
            <mi>a</mi>
            <mi>c</mi>
          </mrow>
        </msqrt>
      </mrow>
      <mrow>
        <mn>2</mn>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </mrow>
</math>

### Cauchy's Integral Formula

<math display="block">
  <mstyle>
    <mi>f</mi>
    <mrow>
      <mo>(</mo>
      <mi>a</mi>
      <mo>)</mo>
    </mrow>
    <mo>=</mo>
    <mfrac>
      <mn>1</mn>
      <mrow>
        <mn>2</mn>
        <mi>π
          <!-- π -->
        </mi>
        <mi>i</mi>
      </mrow>
    </mfrac>
    <msub>
      <mo>∮</mo>
      <mrow>
        <mi>γ</mi>
      </mrow>
    </msub>
    <mfrac>
      <mrow>
        <mi>f</mi>
        <mo>(</mo>
        <mi>z</mi>
        <mo>)</mo>
      </mrow>
      <mrow>
        <mi>z</mi>
        <mo>−</mo>
        <mi>a</mi>
      </mrow>
    </mfrac>
    <mi>d</mi>
    <mi>z</mi>
  </mstyle>
</math>

### Double angle formula for Cosines

<math display="block">
  <mrow>
    <mi>cos</mi>
    <mo>&#x2061;</mo>
    <mrow>
      <mo>(</mo>
      <mi>&#x03b8;</mi>
      <mo>+</mo>
      <mi>&#x03c6;</mi>
      <mo>)</mo>
    </mrow>
    <mo>=</mo>
    <mi>cos</mi>
    <mo>&#x2061;</mo>
    <mrow>
      <mo>(</mo>
      <mi>&#x03b8;</mi>
      <mo>)</mo>
    </mrow>
    <mi>cos</mi>
    <mo>&#x2061;</mo>
    <mrow>
      <mo>(</mo>
      <mi>&#x03c6;</mi>
      <mo>)</mo>
    </mrow>
    <mo>&#x2212;</mo>
    <mi>sin</mi>
    <mo>&#x2061;</mo>
    <mrow>
      <mo>(</mo>
      <mi>&#x03b8;</mi>
      <mo>)</mo>
    </mrow>
    <mi>sin</mi>
    <mo>&#x2061;</mo>
    <mrow>
      <mo>(</mo>
      <mi>&#x03c6;</mi>
      <mo>)</mo>
    </mrow>
  </mrow>
</math>

### Gauss' Divergence Theorem

<math display="block">
  <mrow>
    <mrow>
      <msub>
        <mo>&#x222b;</mo>
        <mrow>
          <mi>D</mi>
        </mrow>
      </msub>
      <mrow>
        <mo>(</mo>
        <mo>&#x2207;&#x22c5;</mo>
        <mi>F</mi>
        <mo>)</mo>
      </mrow>
      <mi>d</mi>
      <mrow>
        <mi>V</mi>
      </mrow>
    </mrow>
    <mo>=</mo>
    <mrow>
      <msub>
        <mo>&#x222b;</mo>
        <mrow>
          <mo>&#x2202;</mo>
          <mi>D</mi>
        </mrow>
      </msub>
      <mrow>
        <mtext>&#x2009;</mtext>
        <mi>F</mi>
        <mo>&#x22c5;</mo>
        <mi>n</mi>
      </mrow>
      <mi>d</mi>
      <mi>S</mi>
    </mrow>
  </mrow>
</math>

### Curl of a Vector Field

<math display="block">
  <mrow>
    <mover accent="true">
      <mrow>
        <mo>&#x2207;</mo>
      </mrow>
      <mrow>
        <mo>&#x2192;</mo>
      </mrow>
    </mover>
    <mo>&#x00d7;</mo>
    <mover accent="true">
      <mrow>
        <mi>F</mi>
      </mrow>
      <mrow>
        <mo>&#x2192;</mo>
      </mrow>
    </mover>
    <mo>=</mo>
    <mrow>
      <mo>(</mo>
      <mfrac>
        <mrow>
          <mo>&#x2202;</mo>
          <msub>
            <mrow>
              <mi>F</mi>
            </mrow>
            <mrow>
              <mi>z</mi>
            </mrow>
          </msub>
        </mrow>
        <mrow>
          <mo>&#x2202;</mo>
          <mi>y</mi>
        </mrow>
      </mfrac>
      <mo>&#x2212;</mo>
      <mfrac>
        <mrow>
          <mo>&#x2202;</mo>
          <msub>
            <mrow>
              <mi>F</mi>
            </mrow>
            <mrow>
              <mi>y</mi>
            </mrow>
          </msub>
        </mrow>
        <mrow>
          <mo>&#x2202;</mo>
          <mi>z</mi>
        </mrow>
      </mfrac>
      <mo>)</mo>
    </mrow>
    <mstyle mathvariant="bold" mathsize="normal">
      <mrow>
        <mi>i</mi>
      </mrow>
    </mstyle>
    <mo>+</mo>
    <mrow>
      <mo>(</mo>
      <mfrac>
        <mrow>
          <mo>&#x2202;</mo>
          <msub>
            <mrow>
              <mi>F</mi>
            </mrow>
            <mrow>
              <mi>x</mi>
            </mrow>
          </msub>
        </mrow>
        <mrow>
          <mo>&#x2202;</mo>
          <mi>z</mi>
        </mrow>
      </mfrac>
      <mo>&#x2212;</mo>
      <mfrac>
        <mrow>
          <mo>&#x2202;</mo>
          <msub>
            <mrow>
              <mi>F</mi>
            </mrow>
            <mrow>
              <mi>z</mi>
            </mrow>
          </msub>
        </mrow>
        <mrow>
          <mo>&#x2202;</mo>
          <mi>x</mi>
        </mrow>
      </mfrac>
      <mo>)</mo>
    </mrow>
    <mstyle mathvariant="bold" mathsize="normal">
      <mrow>
        <mi>j</mi>
      </mrow>
    </mstyle>
    <mo>+</mo>
    <mrow>
      <mo>(</mo>
      <mfrac>
        <mrow>
          <mo>&#x2202;</mo>
          <msub>
            <mrow>
              <mi>F</mi>
            </mrow>
            <mrow>
              <mi>y</mi>
            </mrow>
          </msub>
        </mrow>
        <mrow>
          <mo>&#x2202;</mo>
          <mi>x</mi>
        </mrow>
      </mfrac>
      <mo>&#x2212;</mo>
      <mfrac>
        <mrow>
          <mo>&#x2202;</mo>
          <msub>
            <mrow>
              <mi>F</mi>
            </mrow>
            <mrow>
              <mi>x</mi>
            </mrow>
          </msub>
        </mrow>
        <mrow>
          <mo>&#x2202;</mo>
          <mi>y</mi>
        </mrow>
      </mfrac>
      <mo>)</mo>
    </mrow>
    <mstyle mathvariant="bold" mathsize="normal">
      <mrow>
        <mi>k</mi>
      </mrow>
    </mstyle>
  </mrow>
</math>

### Standard Deviation

<math display="block">
  <mrow>
    <mi>&#x03c3;</mi>
    <mo>=</mo>
    <msqrt>
      <mrow>
        <mfrac>
          <mrow>
            <mn>1</mn>
          </mrow>
          <mrow>
            <mi>N</mi>
          </mrow>
        </mfrac>
        <mstyle displaystyle="true">
          <mrow>
            <munderover>
              <mrow>
                <mo>&#x2211;</mo>
              </mrow>
              <mrow>
                <mi>i</mi>
                <mo>=</mo>
                <mn>1</mn>
              </mrow>
              <mrow>
                <mi>N</mi>
              </mrow>
            </munderover>
            <mrow>
              <msup>
                <mrow>
                  <mo stretchy="false">(</mo>
                  <msub>
                    <mrow>
                      <mi>x</mi>
                    </mrow>
                    <mrow>
                      <mi>i</mi>
                    </mrow>
                  </msub>
                  <mo>&#x2212;</mo>
                  <mi>&#x03bc;</mi>
                  <mo stretchy="false">)</mo>
                </mrow>
                <mrow>
                  <mn>2</mn>
                </mrow>
              </msup>
            </mrow>
          </mrow>
        </mstyle>
      </mrow>
    </msqrt>
    <mo>.</mo>
  </mrow>
</math>

### Definition of Christoffel Symbols

<math display="block">
  <mrow>
    <msup>
      <mrow>
        <mo>(</mo>
        <msub>
          <mrow>
            <mo>&#x2207;</mo>
          </mrow>
          <mrow>
            <mi>X</mi>
          </mrow>
        </msub>
        <mi>Y</mi>
        <mo>)</mo>
      </mrow>
      <mrow>
        <mi>k</mi>
      </mrow>
    </msup>
    <mo>=</mo>
    <msup>
      <mrow>
        <mi>X</mi>
      </mrow>
      <mrow>
        <mi>i</mi>
      </mrow>
    </msup>
    <msup>
      <mrow>
        <mo stretchy="false">(</mo>
        <msub>
          <mrow>
            <mo>&#x2207;</mo>
          </mrow>
          <mrow>
            <mi>i</mi>
          </mrow>
        </msub>
        <mi>Y</mi>
        <mo stretchy="false">)</mo>
      </mrow>
      <mrow>
        <mi>k</mi>
      </mrow>
    </msup>
    <mo>=</mo>
    <msup>
      <mrow>
        <mi>X</mi>
      </mrow>
      <mrow>
        <mi>i</mi>
      </mrow>
    </msup>
    <mrow>
      <mo>(</mo>
      <mfrac>
        <mrow>
          <mo>&#x2202;</mo>
          <msup>
            <mrow>
              <mi>Y</mi>
            </mrow>
            <mrow>
              <mi>k</mi>
            </mrow>
          </msup>
        </mrow>
        <mrow>
          <mo>&#x2202;</mo>
          <msup>
            <mrow>
              <mi>x</mi>
            </mrow>
            <mrow>
              <mi>i</mi>
            </mrow>
          </msup>
        </mrow>
      </mfrac>
      <mo>+</mo>
      <msubsup>
        <mrow>
          <mi>&#x0393;</mi>
        </mrow>
        <mrow>
          <mi>i</mi>
          <mi>m</mi>
        </mrow>
        <mrow>
          <mi>k</mi>
        </mrow>
      </msubsup>
      <msup>
        <mrow>
          <mi>Y</mi>
        </mrow>
        <mrow>
          <mi>m</mi>
        </mrow>
      </msup>
      <mo>)</mo>
    </mrow>
  </mrow>
</math>

<script>
// ***Modal*** "Samples" -- switch renderer button
(function () {
  var HUB = MathJax.Hub;

  HUB.Register.StartupHook("Begin Typeset",function () {
    //
    //  Get the current renderer and set the page's
    //  menu item to reflect that.
    //
    var renderer = HUB.config.menuSettings.renderer;
    document.getElementById("Renderer").value = renderer;
  });
  //  Listen for radio button messages and
  //  if the renderer changes, update the page's menu.
  HUB.Register.StartupHook("MathMenu Ready",function () {
    delete MathJax.Menu.Renderer.Messages.MML.Firefox;
    MathJax.Extension.MathMenu.signal.Interest(function (message) {
      if (message[0] === "radio button") {
        var renderer = message[1].value;
        if (String(renderer).match(/^(HTML-CSS|NativeMML|SVG)$/)) {
          document.getElementById("Renderer").value = renderer;
        }
      }
    });
  });
  //  When the renderer changes, ask the MathMenu to change
  //  the renderer (this way we get any warning messages
  window.setMode = function (renderer) {
    var MENU = MathJax.Menu,
        original = MENU.cookie.renderer;           // the original renderer
    //
    //  Wait for the menu to update before posting the dialog for 
    //  switching to MathML
    //
    setTimeout(function () {
      MENU.config.settings.renderer = renderer;    // Set the new renderer 
      MENU.Renderer.call(this);                    // Change it using the menu action
      if (MENU.cookie.renderer != original) {      // If the cookie changed,
        if (original == null) {delete MENU.cookie.renderer}
          else {MENU.cookie.renderer = original}   // Put back the original renderer
        MENU.saveCookie();                         //  and save the cookie
      }
      HUB.Queue(function () {   // Update the menu in case the user cancelled the change
        document.getElementById("Renderer").value = HUB.outputJax["jax/mml"][0].id;
      });
    },10);
  };
})()
</script>