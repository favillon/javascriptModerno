import { buscarHeroe } from './heroes-callback-json.js';

console.log('Hola mundo desde callback');

const heroeId = 'capi1';

// Funcion enviada como argumenteo 
buscarHeroe(heroeId, (error, heroe) => {
    if (error) {
        console.error(error)
    } else {
        console.info({heroe})
    }
});

const heroeId2 = 'capi';

// Funcion enviada como argumenteo 
buscarHeroe(heroeId2, (error, heroe) => {
    if (error) {
        console.error(error)
    } else {
        console.info({heroe})
    }
});


// Callback Hell

const id1 = 'iron';
const id2 = 'spider';
const id3 = 'capi';


buscarHeroe(id1, (error, heroe1) => {
    if (error) { return console.error(error) } 
    buscarHeroe(id2, (error, heroe2) => {
        if (error) { return console.error(error) } 
        buscarHeroe(id3, (error, heroe3) => {
            if (error) { return console.error(error) } 
            
            console.log(`${heroe1.nombre} -- ${heroe2.nombre} -- ${heroe3.nombre}`)
        });    
    });

});