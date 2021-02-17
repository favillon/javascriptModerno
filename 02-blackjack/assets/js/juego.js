let deck     = [];
const cartas = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A','J', 'Q', 'K'];
const tipos  = ['C', 'D', 'H', 'S']; 

let puntosJugador = 0,
    puntosComputador = 0;

const btnPedir = document.querySelector("#btnPedir");
const btnDetener = document.querySelector("#btnDetener");
const smallPuntosHtml = document.querySelectorAll("small");
const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");
const alerta = document.querySelector("#divAlerta");

const creaDeck = () => {
    for (const carta of cartas) {
        for (const tipo of tipos) {
            deck.push(carta + tipo);
        }
    }
    deck = _.shuffle(deck);
}
creaDeck();

const pedirCarta = () => {
    let deckGame = Array();
    if (deckGame.length == 0 ){
        deckGame = deck;
    }
    let carta = deckGame.pop();
    console.log('carta', carta);
    return carta;
}


const valorCarta = (carta) => {
    const numCarta = carta.substring(0, carta.length-1);    
    return isNaN(numCarta) ? 
            ( (numCarta === 'A') ? 11 : 10 ) : parseInt(numCarta);
}

const turnoComputador = (puntosMinimos) => {
    do {
        const cartaComputadora = pedirCarta();
        puntosComputador+= valorCarta(cartaComputadora);
        smallPuntosHtml[1].innerText = puntosComputador;

        divCartasComputadora.append(crearImagen(cartaComputadora));
        if (puntosMinimos > 21 ) {
            break;
        }
    } while ( (puntosComputador < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(()=>{

    },10);
    if (puntosComputador === puntosMinimos) {
        alert("Nadie Gana");
    } else if (puntosMinimos < 21) {
        alert("Computadora gana");
    } else if (puntosComputador > 21) {
        alert("Ganaste");
    } else {
        alert("Computadora gana");
    }
    //alerta.style
};

const crearImagen = (carta) => {
    const imgCarta = document.createElement('img');
    imgCarta.src =`./assets/img/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    return imgCarta;
}

btnPedir.addEventListener('click', () => {
    const cartaJugador = pedirCarta();
    puntosJugador+= valorCarta(cartaJugador);    
    smallPuntosHtml[0].innerText = puntosJugador;

    divCartasJugador.append(crearImagen(cartaJugador));

    if (puntosJugador > 21 ) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputador(puntosJugador);
    } else if(puntosJugador == 21) {
        turnoComputador(puntosJugador);
    }
});
btnDetener.addEventListener('click', ()=>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputador(puntosJugador);
});

