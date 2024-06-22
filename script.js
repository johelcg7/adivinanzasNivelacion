'use strict';

//math.floor = redondea al número más cercano
//Math.random = Da un número entre 0 y 1, al multiplicarlos por 10, se aumenta entre 0 y 10


let numeroGanador = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function compararNumero(numeroUsuario) {
    if (intentos < 2) {
        if (numeroUsuario === numeroGanador) {
            alert("¡Felicitaciones, lo lograste!");

        } else if (numeroUsuario > numeroGanador) {
            alert("Nooo... Ingresaste un número muy mayor");
            intentos++
            solicitarNumero();
        }
        else {
            alert("Buuuu... ingresaste un número menor.");
            intentos++
            solicitarNumero();
        }
    } else {
        alert("Perdiste, vuelve a primaria.")
    }

}
function solicitarNumero() {
    let numeroUsuario = parseInt(prompt("Es un número del 1 al 10")); //lo ponemos dentro porque se va a preguntar las veces que se ponga.

    if (numeroUsuario < 1 || numeroUsuario > 10) {
        alert("¡Ingresa un número correcto!");
        solicitarNumero();
    }
    else {

        compararNumero(numeroUsuario);

    }

}

alert("Bienvenidos a juegos del hambre:");
solicitarNumero();
// Utilizamos "for" porque sabemos la cantidad de veces que vamos a iterar.