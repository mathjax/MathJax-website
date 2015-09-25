//    ***Bootstrap tweaking***
// set up popovers
$(function() {
    $('[data-toggle="popover"]').popover(
    )
})
// open modals when linked directly (for redirects from old site)
$(window).load(function(){
var hash = window.location.hash;
var modals = ['modal-samples','modal-livedemo','modal-zoom','modal-sponsorship'];
if (modals.indexOf(hash.substring(1,hash.length)) > -1) {
   $(hash).modal('show');
} else {}
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
function display() {
    var tex = $('#input #tex').val();
    $('#output script').text(tex);
    MathJax.Hub.Queue(['Reprocess', MathJax.Hub, document.getElementById('output')]);
    MathJax.Hub.Queue(function(){
       // hack for less jitter
      $("#output").css("height", $("#output .MathJax_Display").height() + 10);
    });
}
$(function() {
    // $('#input #tex').on('change keyup', display);
    $('#input #tex').on('input',function() {
    clearTimeout($.data(this, 'timer'));
    var wait = setTimeout(display, 500);
    $(this).data('timer', wait);
    });
    $('#input #size').on('change', function() {
        var size = parseFloat($(this).val()) / 5;
        $('#output').css('font-size', size + 'em');
        display();
    });
    display();
    if (location.search.length) $('#input #tex').val(unescape(location.search.slice(1))).change();
});

// Fixes interaction of modal key events and menu.
$(function () {
  $('#modal-samples').on('hide.bs.modal', function () {
    var menu = document.getElementById("MathJax_MenuFrame");
    if (menu) {menu.parentNode.removeChild(menu);}
  });
  $('#modal-samples').on('focus', function (e) {
    var menu = document.getElementById("MathJax_MenuFrame");
    if (menu) {
      var contextMenu = menu.childNodes[1];
      if (!contextMenu) return;
      var rect = contextMenu.getBoundingClientRect();
      e.target.appendChild(menu);
      contextMenu.style.left = rect.left+"px"; contextMenu.style.top = rect.top+"px";
      contextMenu.focus();
      e.stopPropagation();
    }
  });
});
