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
    document.body.style.backgroundColor = `rgb(${window.innerWidth % 256}, ${window.innerHeight % 256}, 150)`;
    
}

window.onresize = cambioColor;

cambioColor(); 
crearTablero(); 