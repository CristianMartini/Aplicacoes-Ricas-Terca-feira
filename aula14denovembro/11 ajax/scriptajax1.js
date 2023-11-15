window.onload = function() {
    document.querySelector("#botao").onclick = function() {
      let ajax = null;
      if (window.XMLHttpRequest) {
        ajax = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        ajax = new ActiveXObject("Msxm12.XMLHTTP");
      }
      ajax.open("GET", "dadosAjax1.txt", true);
      ajax.send(null);
  
      ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
          if (ajax.status == 200) {
            document.querySelector("#janela").innerHTML = ajax.responseText;
          }
        }
      };
    };
  };
  