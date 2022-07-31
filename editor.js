var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var runCode = document.getElementById("run");
  var code = document.getElementById("code").contentWindow.document;

  runCode.onclick = function() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  };
  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
  };


compile();
