let deck     = [];
const cartas = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A','J', 'Q', 'K'];
const tipos  = ['C', 'D', 'H', 'S']; 

let puntosJugador = 0,
    puntoComputador = 0;

const btnPedir = document.querySelector("#btnPedir");

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

btnPedir.addEventListener('click', () => {
    const cartaJugador = pedirCarta();
    puntosJugador+= valorCarta(cartaJugador);
    console.log(puntosJugador);
});