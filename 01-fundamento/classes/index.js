const favillon = {
    nombre : 'Fabian',
    edad : 30,
    imprimir() {
        console.log("Nombre : " + this.nombre);
    }
}
const favillon2 = {
    nombre : 'Fabian',
    edad : 30,
    imprimir() {
        console.log("Nombre : " + this.nombre);
    }
}

console.log(favillon);
favillon.imprimir();
console.log(favillon2);
favillon2.imprimir();

// Debe empezar con new la asignacion
function Persona(nombre, edad) {
    console.log('Impresion Clase')
    this.nombre = nombre;
    this.edad = edad
    this.imprimir = function() {
        console.log('Clase  impresion Nombre => ' + this.nombre )
    }
}
const persona = new Persona('Maria', 18);

console.log(persona)
persona.imprimir();

const persona2 = new Persona('Jose', 30);

console.log(persona2)
persona2.imprimir();