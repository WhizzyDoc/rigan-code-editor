  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var html1 = document.getElementById("html1");
  var css1 = document.getElementById("css1");
  var js1 = document.getElementById("js1");
  var showResult = document.getElementById("showResult");
  var showHtml = document.getElementById("showHtml");
  var showCss = document.getElementById("showCss");
  var showJs = document.getElementById("showJs");
  var html_short = document.getElementById("html_short");
  var css_short = document.getElementById("css_short");
  var js_short = document.getElementById("js_short");
  var code = document.getElementById("code").contentWindow.document;

showResult.onclick = function() {
  document.getElementById("result").style.display = "block";
  document.getElementById("editor").style.display = "none";
  showHtml.style.backgroundColor = "green";
  showCss.style.backgroundColor = "green";
  showJs.style.backgroundColor = "green";
  showResult.style.backgroundColor = "red";
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
}

showHtml.onclick = function() {
  document.getElementById("result").style.display = "none";
  document.getElementById("editor").style.display = "block";
  css_short.style.display = "none";
  js_short.style.display = "none";
  css1.style.display = "none";
  js1.style.display = "none";
  html1.style.display = "inline-flex";
  html_short.style.display = "block";
  showHtml.style.backgroundColor = "red";
  showCss.style.backgroundColor = "green";
  showJs.style.backgroundColor = "green";
  showResult.style.backgroundColor = "green";
}
showCss.onclick = function() {
  document.getElementById("result").style.display = "none";
  document.getElementById("editor").style.display = "block";
  html1.style.display = "none";
  html_short.style.display = "none";
  js_short.style.display = "none";
  js1.style.display = "none";
  css1.style.display = "inline-flex";
  css_short.style.display = "block";
  showHtml.style.backgroundColor = "green";
  showCss.style.backgroundColor = "red";
  showResult.style.backgroundColor = "green";
  showJs.style.backgroundColor = "green";
}
showJs.onclick = function() {
  document.getElementById("result").style.display = "none";
  document.getElementById("editor").style.display = "block";
  html1.style.display = "none";
  css1.style.display = "none";
  html_short.style.display = "none";
  css_short.style.display = "none";
  js1.style.display = "inline-flex";
  js_short.style.display = "block";
  showHtml.style.backgroundColor = "green";
  showCss.style.backgroundColor = "green";
  showResult.style.backgroundColor = "green";
  showJs.style.backgroundColor = "red";
}
  
//For code compilation into browser
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

