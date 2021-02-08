function saludar(name) {
    console.log(arguments)
    console.log('Hola Mundo para => ' + name);
}


saludar("Jhon", 40);
saludar("Carlos");
saludar("Pimienta");

const saludar2 = function (name2) {
    console.log('Hola Mundo -> ' + name2 )
}

saludar2("Fernando");
saludar2("Paco");

const saludarFlecha =  (name3) => {
    console.log('Hola Flecha :: ' + name3 );
}
const saludarFlecha2 =  name4 => console.log('Hola Flecha :: ' + name4 )
const saludarFlecha3 =  name5 => 'Hola Flecha :: ' + name5 

saludarFlecha("Flecha 1");
saludarFlecha2("Flecha 2");
let impresion = saludarFlecha3("Flecha 3");
console.log(impresion);

const getAleatorio2 = () => Math.random()
console.log(getAleatorio2());


const crearPersona = (nombre, apellido) => {nombre, apellido}; // return  undefinned
console.log(crearPersona("Andres", "Garcia"));

const crearPersona2 = (nombre, apellido) => ({nombre, apellido});
console.log(crearPersona2("Paco" , "Villegas"));

// Argumentos 
function impresionArgumentos() {
    
    console.log(arguments);
}

impresionArgumentos(1, true, 'string', 1.20);


const impresionArgumentosFlecha = (edad, ...args) => {
    console.log(args);
    return args;
}

const [boleano, strings, floats ] = impresionArgumentosFlecha(30, true, 'string', 1.20);
console.log({boleano, strings, floats});

const {nombre, apellido} = crearPersona2("Hulk" , "Quitian");
console.log({nombre, apellido});

const {nombre: nameUser, apellido: lastName} = crearPersona2("Avispita" , "Negra");
console.log({nameUser, lastName});


const capitanAmerica = {
    nombre : 'Steven Grant',
    codeName : 'Capitan Ametica',
    pareja : 'Sharon Carter',
    enemigo : 'Craneo Rojo',
    //edad : 105,
    bigote : false
};

const propiedadesPersonaje = ({nombre, codeName, panza = false, enemigo, edad = 0}) => {
    console.log(nombre);
    console.log(codeName);
    console.log(panza);
    console.log(enemigo);
    console.log(edad);
}

propiedadesPersonaje(capitanAmerica);