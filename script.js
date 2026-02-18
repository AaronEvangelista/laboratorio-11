let estadoJuego = ["", "", "", "", "", "", "", "", ""];
let jugadorActual = "X";
let juegoActivo = true;




const contenedorJuego = document.getElementById('game-container');
const textoResultado = document.getElementById('resultado');




function crearTablero() {
    contenedorJuego.innerHTML = "";
   
    const tableroDiv = document.createElement('div');
    tableroDiv.classList.add('tablero');




    for (let i = 0; i < 9; i++) {
        const celda = document.createElement('div');
        celda.classList.add('celda');
       
        celda.dataset.indice = i;
        celda.addEventListener('click', manejarClickCelda);
       
        tableroDiv.appendChild(celda);
    }
   
    contenedorJuego.appendChild(tableroDiv);
}




function manejarClickCelda(evento) {
    const celdaClickeada = evento.target;
    const indiceCelda = parseInt(celdaClickeada.dataset.indice);




    if (estadoJuego[indiceCelda] !== "" || !juegoActivo) {
        return;
    }




    estadoJuego[indiceCelda] = jugadorActual;
    celdaClickeada.textContent = jugadorActual;




    if (jugadorActual === "X") {
        celdaClickeada.classList.add("jugador-x");
    } else {
        celdaClickeada.classList.add("jugador-o");
    }




    validarResultado();
}




function validarResultado() {
    const combinacionesGanadoras = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]          
    ];




    let rondaGanada = false;




    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        const [a, b, c] = combinacionesGanadoras[i];




        if (
            estadoJuego[a] !== "" &&
            estadoJuego[a] === estadoJuego[b] &&
            estadoJuego[a] === estadoJuego[c]
        ) {
            rondaGanada = true;
            break;
        }
    }




    if (rondaGanada) {
        textoResultado.textContent = `¡Jugador ${jugadorActual} ha ganado!`;
        juegoActivo = false;
        return;
    }




    if (!estadoJuego.includes("")) {
        textoResultado.textContent = "¡Empate!";
        juegoActivo = false;
        return;
    }




    cambiarJugador();
}




function cambiarJugador() {
    jugadorActual = jugadorActual === "X" ? "O" : "X";
    textoResultado.textContent = `Estado: Turno del Jugador ${jugadorActual}`;
}




function reiniciarJuego() {
    estadoJuego = ["", "", "", "", "", "", "", "", ""];
    jugadorActual = "X";
    juegoActivo = true;
    textoResultado.textContent = "Estado: Turno del Jugador X";
    crearTablero();
}




document.addEventListener('keydown', (event) => {
    if (event.key === 'r' || event.key === 'R') {
        reiniciarJuego();
    }
});




function cambioColor() {
    document.body.style.backgroundColor =
        `rgb(${window.innerWidth % 256}, ${window.innerHeight % 256}, 150)`;
}




window.onresize = cambioColor;




cambioColor();
crearTablero();




