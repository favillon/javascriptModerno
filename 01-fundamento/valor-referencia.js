let a = 10;
let b = a;
a = 30;

console.log({a, b});

// Referencia Objetos
let juan = { nombre : 'juan'};
let ana = juan;
ana.nombre = 'Ana';
console.log({juan, ana});

// Solucion a la Referencia Objetos
let jose = { nombre : 'jose'};
let diana = {...jose};
diana.nombre = 'Diana';
console.log({jose,  diana});


// Referencia funciones

const cambiarNombre = (persona) => {
    persona.nombre = 'Tony';    
    return persona;
};

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);


console.log({peter, tony});


// Solucion Referencia funciones

const cambiarNombre2 = ({...persona}) => {
    persona.nombre = 'Flecha Verde';    
    return persona;
};

let parker = {nombre: 'Parker'};
let flecha = cambiarNombre2(parker);


console.log({parker, flecha});

// Referencia array
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = frutas;
otrasFrutas.push('Kiwi');

console.table({frutas, otrasFrutas});

// Solucion Referencia array

const frutas2 = ['Manzana1', 'Pera1', 'Piña1'];
console.time('spread');
const otrasFrutas2 = [...frutas2];
console.timeEnd('spread');
otrasFrutas2.push('Kiwi1');

console.table({frutas2, otrasFrutas2});


// Solucion Referencia array
const frutas3 = ['Manzana2', 'Pera2', 'Piña2'];
console.time('slice');
const otrasFrutas3 = frutas3.slice();
console.timeEnd('slice');
otrasFrutas3.push('Kiwi2');

console.table({frutas3, otrasFrutas3});