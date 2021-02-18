const blackjack = (()=>{
    'use strict'

    let deck     = [],
        puntosJugadores = [];
    const cartas = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A','J', 'Q', 'K'],
          tipos  = ['C', 'D', 'H', 'S']; 
    
    const btnPedir = document.querySelector("#btnPedir"),
          btnDetener = document.querySelector("#btnDetener"),
          smallPuntosHtml = document.querySelectorAll("small"),
          divCartasJugador = document.querySelector("#jugador-cartas"),
          divCartasComputadora = document.querySelector("#computadora-cartas");    
    

    const inicializarJuego = (numJugadores = 2) => {

        creaDeck();        

        puntosJugadores = [];
        for( let i = 0; i< numJugadores; i++ ) {
            puntosJugadores.push(0);
        }

        smallPuntosHtml.forEach(elemento => elemento.innerText = 0);

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';
    
        btnPedir.disabled   = false;
        btnDetener.disabled = false;
    }

    const creaDeck = () => {
        for (const carta of cartas) {
            for (const tipo of tipos) {
                deck.push(carta + tipo);
            }
        }
        deck = _.shuffle(deck);
    }
        
    const pedirCarta = () => {
        let deckGame = [];
    
        if (deckGame.length == 0 ){
            deckGame = deck;
        }
        return deckGame.pop();
    }
    
    
    const valorCarta = (carta) => {
        const numCarta = carta.substring(0, carta.length-1);
        return isNaN(numCarta) ?
               ( (numCarta === 'A') ? 11 : 10 ) : parseInt(numCarta);
    }

    //
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] =  puntosJugadores[turno] + valorCarta(carta);
        smallPuntosHtml[turno].innerText = puntosJugadores[turno]
        return puntosJugadores[turno];
    }

    const crearImagen = (carta) => {
        const imgCarta = document.createElement('img');
        imgCarta.src =`./assets/img/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        return imgCarta;
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputador] = puntosJugadores;
        setTimeout(()=>{
            let mensajeAlerta = "",
            icono = "",
            mensajeAlerta2 = "";
    
            if (puntosComputador === puntosMinimos) {
                mensajeAlerta = "Nadie Gana";
                icono = "info";
                mensajeAlerta2 = "Intenta nuevamente";
            } else if (puntosMinimos > 21) {
                mensajeAlerta = "Computadora gana";
                icono = "error";
                mensajeAlerta2 = "Intenta nuevamente";
            } else if (puntosComputador > 21) {
                mensajeAlerta = "Ganaste";
                icono = "success";
                mensajeAlerta2 = "Sigue asi";
            } else {
                mensajeAlerta = "Computadora gana";
                icono = "error";
                mensajeAlerta2 = "Intenta nuevamente";
            }
            Swal.fire({
                icon: icono,
                title: mensajeAlerta,
                text: mensajeAlerta2,
            })
        }, 100);
    }

    const turnoComputador = (puntosMinimos) => {

        let puntosComputador = 0;
        do {
            const cartaComputadora = pedirCarta();
            puntosComputador = acumularPuntos(cartaComputadora, puntosJugadores.length -1 );
    
            divCartasComputadora.append(crearImagen(cartaComputadora));
            if (puntosMinimos > 21 ) {
                break;
            }
        } while ( ( puntosComputador < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();
    };    
    
    btnPedir.addEventListener('click', () => {
        const cartaJugador = pedirCarta();
        const puntosJugador = acumularPuntos(cartaJugador, 0);
        divCartasJugador.append(crearImagen(cartaJugador));
    
        if (puntosJugador > 21 ) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputador(puntosJugador);
        } else if(puntosJugador == 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputador(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', ()=>{
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador(puntosJugadores[0]);
    });
    
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego : inicializarJuego
    };
})();