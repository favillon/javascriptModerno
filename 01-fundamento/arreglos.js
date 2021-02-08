let juegos =[ 'Juego 1', 'Juego 2', 'Juego 3'];

console.log(juegos);

let primeraPosivion= juegos[0];
let ultimaPosivion= juegos[juegos.length-1];

console.log({primeraPosivion, ultimaPosivion});

// Recorrer el arreglo
console.log("");
juegos.forEach( (elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});
console.log("");
// Adicionar elementos al array final
juegos.push('Juegos 4');
console.log({juegos});

// Adicionar elementos al array Inicio
juegos.unshift('Juegos 0');
console.log(juegos);

// Eliminar ultima posicion del array
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});
console.log(juegos.length);

// Eliminar una posicion del array
let posicionEliminar = 2;
let juegoBorrrado = juegos.splice(posicionEliminar, 1);
console.log({juegoBorrado, juegos});

// buscar dentro del arreglo y traer el indice
let busqueda = juegos.indexOf('Juego 3');
console.log({busqueda, juegos});


//  Objetos y ejecucion de fucnoines en los objetos
dia = 2;

const diasLetras = {
    0 : () => 'Domingo',
    1 : () => 'Lunes',
    2 : () => 'Martes',
}
console.log(diasLetras[dia]() || 'Dia no definido');

dia = 10;

const diasLetras2 = {
    0 : 'Domingo',
    1 : 'Lunes',
    2 : 'Martes',
}
console.log(diasLetras2[dia] || 'Dia no definido');