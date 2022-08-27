//funcion para elegir dificultad
function facil(){
    onclick = function(){
        document.getElementById("facil");
        this.location.href ="./juegofacil.html";
    }
}

function media(){
    onclick = function(){
        document.getElementById("media");
        this.location.href ="./juegomedio.html";
    }
}


function dificil(){
    onclick = function(){
        document.getElementById("dificil");
        this.location.href ="./juegodificil.html";
    }
}
