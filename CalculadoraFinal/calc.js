var operacioa;
var operaciob;
var operacio;
//Variables butons calculadora
    var no0 = document.getElementById("zero")
    var no1 = document.getElementById("un")
    var no2 = document.getElementById("dos")
    var no3 = document.getElementById("tres")
    var no4 = document.getElementById("quatre")
    var no5 = document.getElementById("cinc")
    var no6 = document.getElementById("sis")
    var no7 = document.getElementById("set")
    var no8 = document.getElementById("vuit")
    var no9 = document.getElementById("nou")
    var resultat = document.getElementById("result")
    var resete = document.getElementById("reset")
    var sumar = document.getElementById("suma")
    var restar = document.getElementById("resta")
    var multiplicar = document.getElementById("multiplicacio")
    var dividir = document.getElementById("divisio")
    var resoldre = document.getElementById("igual")
    var modular = document.getElementById("modul")
//Esdeveniments al clicar
    no0.onclick = function(){
        resultat.textContent = resultat.textContent + "0";  
    }
    no1.onclick = function(){
        resultat.textContent = resultat.textContent + "1";
    }
    no2.onclick = function(){
        resultat.textContent = resultat.textContent  + "2";
    }
    no3.onclick = function(){
        resultat.textContent = resultat.textContent  + "3";
    }
    no4.onclick = function(){
        resultat.textContent = resultat.textContent  + "4";
    }
    no5.onclick = function(){
        resultat.textContent = resultat.textContent  + "5";
    }
    no6.onclick = function(){
        resultat.textContent = resultat.textContent  + "6";
    }
    no7.onclick = function(){
        resultat.textContent = resultat.textContent  + "7";
    }
    no8.onclick = function(){
        resultat.textContent = resultat.textContent  + "8";
    }
    no9.onclick = function(){
        resultat.textContent = resultat.textContent  + "9";
    }
    resete.onclick = function(){
        resetejar();
    }
    sumar.onclick = function(){
        resultat.textContent = resultat.textContent + "+";
        operacioa = resultat.textContent;
        operacio = "+"
        netejar();
    }
    restar.onclick = function(){
        resultat.textContent = resultat.textContent + "-";
        operacioa = resultat.textContent;
        operacio = "-"
        netejar();
    }
    multiplicar.onclick = function(){
        resultat.textContent = resultat.textContent + "*";
        operacioa = resultat.textContent;
        operacio = "*"
        netejar();
    }
    dividir.onclick = function(){
        resultat.textContent = resultat.textContent + "/";
        operacioa = resultat.textContent;
        operacio = "/"
        netejar()
    }
    modular.onclick = function(){
        resultat.textContent = resultat.textContent + "%";
        operacioa = resultat.textContent;
        operacio = "%"
        netejar()
    }
    resoldre.onclick = function(){
        operaciob = resultat.textContent;
        resolt();
    }
    //funcions netejar i resetejar
function netejar(){
    resultat.textContent = "";
}
function resetejar(){
    resultat.textContent = "";
    operacioa = 0;
    operaciob = 0;
    operacio = "";
}
//resoldre
function resolt(){
    var res = 0;
    switch(operacio){
      case "+":
        res = parseFloat(operacioa) + parseFloat(operaciob);
        break;
      case "-":
          res = parseFloat(operacioa) - parseFloat(operaciob);
          break;
      case "*":
        res = parseFloat(operacioa) * parseFloat(operaciob);
        break;
      case "/":
        res = parseFloat(operacioa) / parseFloat(operaciob);
        break;
      case "%":
        res = parseFloat(operacioa) % parseFloat(operaciob);
        break;
    }
    resetejar();
    resultat.textContent = res;
  }