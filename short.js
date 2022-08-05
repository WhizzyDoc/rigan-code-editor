var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");


  
var hshor = document.getElementsByClassName("hshort");
var hlen= hshor.length;
for(let i = 0; i < hlen; i++){
hshor[i].onclick = function() {
        var hcurPos = html.selectionStart;
        console.log(hcurPos);
        let hx = html.value;
        let htext_to_insert = hshor[i].value;
        html.value = hx.slice(0, hcurPos) + htext_to_insert + hx.slice(hcurPos);    
	}
}

var cshor = document.getElementsByClassName("cshort");
var clen= cshor.length;
for(let i = 0; i < clen; i++){
cshor[i].onclick = function() {
        var ccurPos = css.selectionStart;
        console.log(ccurPos);
        let cx = css.value;
        let ctext_to_insert = cshor[i].value;
        css.value = cx.slice(0, ccurPos) + ctext_to_insert + cx.slice(ccurPos);    
	}
}

var jshor = document.getElementsByClassName("jshort");
var jlen= jshor.length;
for(let i = 0; i < jlen; i++){
jshor[i].onclick = function() {
        var jcurPos = js.selectionStart;
        console.log(jcurPos);
        let jx = js.value;
        let jtext_to_insert = jshor[i].value;
        js.value = jx.slice(0, jcurPos) + jtext_to_insert + jx.slice(jcurPos);    
	}
}
