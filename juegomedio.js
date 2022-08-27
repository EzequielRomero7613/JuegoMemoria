//inicia las variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 35;
let timerInicial = timer;
let cuentaRegresivaId = null; 

//agregando audio

let touchAudio = new Audio('./source/sounds/touch.wav');//errorAudio
let aciertoAudio = new Audio('./source/sounds/right.wav');
let errorAudio = new Audio('./source/sounds/error.wav');
let finDelTiempoAudio = new Audio('./source/sounds/endgame.wav');//esta correcto el audio
let ganasteAudio = new Audio('./source/sounds/wingame.wav');

//apuntando a html
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('tiempo') ;

//definiendo los numeros para que sean aleatorios
let numeros = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
numeros = numeros.sort(()=> {return Math.random()-0.5});


//funciones
function contarTiempo(){
     cuentaRegresivaId = setInterval(()=> {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(cuentaRegresivaId);
            bloquearTarjetas();
            

        }
    },1000)
}

function bloquearTarjetas(){
    for(let i = 0; i<=20; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="../source/imgs/${numeros[i]}.png">`;
        tarjetaBloqueada.disabled = true;
        finDelTiempoAudio.play();

    }
}

//funcion para restart
function restart(){
    onclick = function(){
        let e = this.document.getElementById("recargar");
        if (e.value == false) {
            e.value = true;
            
        } else{
            e.value = false;
            location.reload();
        }
    }
}

//funcion para salir del juego

function salir() {
    onclick = function(){
        document.getElementById("salir");
        this.location.href ="../index.html";
    }
}



//funcion principal
function destapar(id){

    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
        
    }

    tarjetasDestapadas++;

    if (tarjetasDestapadas == 1) {
        //muestra los numeros
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = `<img src="../source/imgs/${primerResultado}.png">`;
        touchAudio.play();

        //deshabilitar primer boton tocado
        tarjeta1.disabled = true;

    } else if(tarjetasDestapadas == 2) {

        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="../source/imgs/${segundoResultado}.png">`;
        touchAudio.play();
        
        //deshabilita el segundo boton
        tarjeta2.disabled = true;
        
        
        //incrementa los movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            tarjetasDestapadas = 0;

            //Aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `aciertos: ${aciertos}`;
            aciertoAudio.play();

            if (aciertos == 10) {
                clearInterval(cuentaRegresivaId);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} Eres brillante `
                mostrarTiempo.innerHTML = `Felicidades te tardaste solamente ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} `
                ganasteAudio.play();
            }

        }else{
            errorAudio.play();
            //mostrar momentaneamente y tapar nuevamente
            setTimeout(()=> {
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
                },800);
                

        }
    }

}