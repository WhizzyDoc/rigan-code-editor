var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var runCode = document.getElementById("run");
  var code = document.getElementById("code").contentWindow.document;


  //For syntax autocomplete
  html.onkeyup = function() {
      var lines = html.value.split('\n');
      for(var i=0; i<lines.length; i++){
        
    
        var check = lines.match(/<h1>/);
        if(check) {
          html.value = lines + '</h1>';
        }
      }
    }
  
//For code compilation into browser
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


if(html.value.includes("<html>") === true) {

}