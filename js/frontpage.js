//    ***Bootstrap tweaking***
// set up popovers
$(function() {
    $('[data-toggle="popover"]').popover(
    )
})
// open modals when linked directly (for redirects from old site)
$(window).load(function(){
var hash = window.location.hash;
var modals = ['#modal-samples','#modal-livedemo','#modal-zoom','#modal-sponsorship'];
if (modals.indexOf(hash) > -1) {
   $(hash).modal('show');
} else {}
for (var m = 0; m < modals.length; m++){
  var modal = modals[m];
  $(modal).on('shown.bs.modal', function (modal) {
    $(this).attr('aria-hidden', false);
  });
  $(modal).on('hidden.bs.modal', function (modal) {
    $(this).attr('aria-hidden', true);
  });
}

var video = document.getElementsByTagName('iframe')[0];
$('#modal-zoom').on('hidden.bs.modal', function () {
//  video.pause(); // for <video> elements
  video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
});
});

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

// ***Modal**** "Live Demo"
var Preview = {
    delay: 150, // delay after keystroke before updating
    preview: null, // filled in by Init below
    buffer: null, // filled in by Init below
    timeout: null, // store setTimout id
    mjRunning: false, // true when MathJax is processing
    oldText: null, // used to check if an update is needed
    //  Get the preview and buffer DIV's
    Init: function() {
        this.preview = document.getElementById("MathPreview");
        this.buffer = document.getElementById("MathBuffer");
    },
    //  Switch the buffer and preview, and display the right one.
    //  (We use visibility:hidden rather than display:none since
    //  the results of running MathJax are more accurate that way.)
    SwapBuffers: function() {
        var buffer = this.preview,
            preview = this.buffer;
        this.buffer = buffer;
        this.preview = preview;
        buffer.style.visibility = "hidden";
        buffer.style.position = "absolute";
        preview.style.position = "";
        preview.style.visibility = "";
    },
    //  This gets called when a key is pressed in the textarea.
    //  We check if there is already a pending update and clear it if so.
    //  Then set up an update to occur after a small delay (so if more keys
    //    are pressed, the update won't occur until after there has been
    //    a pause in the typing).
    //  The callback function is set up below, after the Preview object is set up.
    Update: function() {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(this.callback, this.delay);
    },
    //  Creates the preview and runs MathJax on it.
    //  If MathJax is already trying to render the code, return
    //  If the text hasn't changed, return
    //  Otherwise, indicate that MathJax is running, and start the
    //    typesetting.  After it is done, call PreviewDone.
    CreatePreview: function() {
        Preview.timeout = null;
        if (this.mjRunning) return;
        var text = document.getElementById("MathInput").value;
        if (text === this.oldtext) return;
        this.buffer.innerHTML = this.oldtext = text;
        this.mjRunning = true;
        MathJax.Hub.Queue(
            ["Typeset", MathJax.Hub, this.buffer], ["PreviewDone", this]
        );
    },
    //  Indicate that MathJax is no longer running,
    //  and swap the buffers to show the results.
    PreviewDone: function() {
        this.mjRunning = false;
        this.SwapBuffers();
    }
};
//  Cache a callback to the CreatePreview action
Preview.callback = MathJax.Callback(["CreatePreview", Preview]);
Preview.callback.autoReset = true; // make sure it can run more than once
Preview.Init();

// ***Modal*** Zoom demo (modified from Christian's script)
MathJax.Hub.Register.StartupHook("onLoad", function () {
  var running = true;    //  MathJax is typesetting (true for initial typeset)
  var pending = false;   //  A size change has occurring while running
  var math;              //  The jax to be modified (filled in later)
  var size;              //  Used to cache previous size
      
  //
  //  Look up the elements we will need.
  //
  var STYLE = document.getElementById('output').style;
  var TEX = document.getElementById('tex');
  var SIZE = document.getElementById('size');

  //
  //  Look up the math element after it has been typeset.
  //  Make sure the initial math in the text box is displayed,
  //  And see if there has been a size change during the
  //    initial typesetting pass (unlikely).
  //
  MathJax.Hub.Queue(function () {
    math = MathJax.Hub.getAllJax('output')[0];
    if (TEX.value !== "") MathJax.Hub.Queue(["Text",math,TEX.value]);
    checkPending();
  });

  //
  //  Set the font size for the output container.
  //
  var setSize = function () {STYLE.fontSize = (parseFloat(SIZE.value)/5) + "em"};
  //
  //  Check if a size change is pending:
  //    If so, display the math at the new size
  //    Otherwise, indicate that Mathjax is no longer running.
  //
  var checkPending = function () {if (pending) display(); else running = false};
  //
  //  If the size actually changed:
  //    Record the size to check against the next change.
  //    Mark that we are typesetting, and no size change is pending.
  //    Queue the size change, rerender the math at that size, and
  //      check if a size change occurred during the rendering.
  //
  var display = function () {
    if (SIZE.value !== size) {
      size = SIZE.value;
      running = true; pending = false;
      MathJax.Hub.Queue(setSize,["Rerender",math],checkPending);
    }
  };

  //
  //  When the TeX changes, queue a change to the jax content.
  //  When the slider changes:
  //    If typesetting is already underway,
  //      indicate there is a pending size change,
  //      otherwise update the math to the new size.
  //
  TEX.onkeyup = function (event) {
    if (!event) event = window.event;
    var code = event.which || event.keyCode;
    if (code === 13 || code === 10) MathJax.Hub.Queue(["Text",math,TEX.value]);
  };
  SIZE.oninput = SIZE.onchange = function () {if (running) pending = true; else display()};

  //
  //  Make sure the initial size corresponds to the
  //    initial slider position.
  //
  setSize();
  STYLE.overflowX = "auto";
});


function simulateTabKey() {
  jQuery.event.trigger({ type : 'keypress', which : 9});
}

// Fixes interaction of modal key events and menu.
$(function () {
  $('#modal-samples').on('hide.bs.modal', function () {
    var menu = document.getElementById("MathJax_MenuFrame");
    if (menu) {menu.parentNode.removeChild(menu);}
  });
  $('#modal-samples').on('focus', function (e) {
    var menu = document.getElementById("MathJax_MenuFrame");
    if (menu) {
      var mod = e.target;
      var contextMenu = menu.childNodes[1];
      if (!contextMenu) return;
      var offsetX = mod.scrollLeft;
      var offsetY = mod.scrollTop;
      var rect = contextMenu.getBoundingClientRect();
      e.target.appendChild(menu);
      contextMenu.style.left = (offsetX + rect.left) + "px";
      contextMenu.style.top = (offsetY + rect.top) + "px";
      contextMenu.focus();
      if (document.activeElement !== contextMenu) {
        setTimeout(function() {contextMenu.focus();}, 100);
      }
      e.stopPropagation();
    }
  });
});
