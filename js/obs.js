xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/ods.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("blog");

function imagem1(){
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='imgs/" + x[i].getElementsByTagName("imagem1")[0].childNodes[0].nodeValue + "' class='img' height='150px'>");
    }
}

function texto1() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font1'>" +
            x[i].getElementsByTagName("texto1")[0].childNodes[0].nodeValue +
            "</>");
    }
}


function imagem2(){
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='imgs/" + x[i].getElementsByTagName("imagem2")[0].childNodes[0].nodeValue + "' class='img-ods' height='180px'>");
    }
}

function texto2() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font1'>" +
            x[i].getElementsByTagName("texto2")[0].childNodes[0].nodeValue +
            "</>");
    }
}