const personaje = {
    nombre : 'Tony Stark',
    codeName : 'IronMan',
    direcion : 'Calle falsa 1 2 3', 
    coordenadas : {
        lat : 55,
        lon : 66
    },
    vivo: false,
    ultimaPelicula : 'Infinity War',
    edad : 45
};


console.log(personaje);
const x = 'vivo';
console.log(personaje[x]);
// Eliminar 
delete personaje.edad;
console.log(personaje);

const entriesPares = Object.entries( personaje );
personaje.casado = true;
console.log(entriesPares);

Object.freeze( personaje );
// Valores inmutables
personaje.dinero = 1000000;
personaje.casado = false;
console.log(personaje)

// Valores Mutuable a pesar del freeze
personaje.coordenadas.lat = 66;
console.log(personaje)

const propiedades = Object.getOwnPropertyNames( personaje );
const values = Object.values( personaje );

console.log({propiedades, values});


const propiedades2 = Object.getOwnPropertyDescriptor( personaje );
console.log(propiedades2);