//funcion para elegir dificultad
function facil(){
    onclick = function(){
        document.getElementById("facil");
        this.location.href ="../html/juegofacil.html";
    }
}

function media(){
    onclick = function(){
        document.getElementById("media");
        this.location.href ="../html/juegomedio.html";
    }
}


function dificil(){
    onclick = function(){
        document.getElementById("dificil");
        this.location.href ="../html/juegodificil.html";
    }
}