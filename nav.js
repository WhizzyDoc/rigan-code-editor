/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var ohtml = document.getElementById("openHTML");
  var ocss = document.getElementById("openCSS");
  var ojs = document.getElementById("openJS");

  function download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.dispay = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  document.getElementById("downloadHTML").addEventListener("click", function() {
    var text = html.value;
    var filename = "index.html";
    download(filename, text);
  }, false);

  document.getElementById("downloadCSS").addEventListener("click", function() {
    var text = css.value;
    var filename = "style.css";
    download(filename, text);
  }, false)
  
  document.getElementById("downloadJS").addEventListener("click", function() {
    var text = js.value;
    var filename = "script.js";
    download(filename, text);
  }, false);


function about() {
    document.getElementById("about").style.display = "block";
}
function hideAbout() {
    document.getElementById("about").style.display = "none";
}
document.addEventListener('keydown', (e)  => {
    if(e.key.toLowerCase() === 'r' && e.ctrlKey) {
        e.preventDefault();
        document.getElementById("about").style.display = "block";
    }
});


function manual() {
    document.getElementById("manual").style.display = "block";
}
function hideManual() {
    document.getElementById("manual").style.display = "none";
}
document.addEventListener('keydown', (e)  => {
    if(e.key.toLowerCase() === 'm' && e.ctrlKey) {
        e.preventDefault();
        document.getElementById("manual").style.display = "block";
    }
});


function showSave() {
    document.getElementById("save").style.display = "block";
}
function hideSave() {
    document.getElementById("save").style.display = "none";
}
/*
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e)  {
        return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
    }
}

if(storageAvailable('localStorage')) {
        alert("Yippee! We can use localStorage");
}
else {
    alert('Too baad, no localStorage for us')
}
*/
function lastMem() {
    const currentHTML = localStorage.getItem('htmls');
    const currentCSS = localStorage.getItem('csss');
    const currentJS = localStorage.getItem('jss');
    html.value = currentHTML;
    css.value = currentCSS;
    js.value = currentJS;
}

function save() {
    localStorage.setItem('htmls', html.value);
    localStorage.setItem('csss', css.value);
    localStorage.setItem('jss', js.value);
    lastMem();
    document.getElementById("save").style.display = "none";
    alert("Saved Successfully!");
}
document.addEventListener('keydown', (e)  => {
    if(e.key.toLowerCase() === 's' && e.ctrlKey) {
        e.preventDefault();
        document.getElementById("save").style.display = "block";
    }
});