class Persona {

    // 'use strict' veine por defecto
    nombre;
    codigo = 0;
    frase  = '';

    static _conteo = 0;
    static get getConteo() 
    {
        return 'getConteo :' + Persona._conteo;
    }
    
    static mensajeEstatico()
    {
        console.log('Esto es un mensaje de un metodo estatico');
    }

    constructor(nombre, codigo, frase='Ser o no ser')
    {
        console.log('Bienvenido al Constructor');
        this.nombre = nombre;
        this.codigo = 100;
        this.frase  = frase;
        Persona._conteo++;
    }

    set setCodigo(codigo)
    {
        this.codigo = codigo;
    }
    get getCodigo()
    {
        return '#' + this.codigo;
    }

    quienSoy()
    {
        console.log(`Soy ${this.nombre}`)
    }

    miFrase()
    {
        console.log(`Mi frase ${this.frase}`);
    }
}

const personaNormal = new Persona();
console.log(personaNormal);
personaNormal.quienSoy();

const personaNormal2 = new Persona('Andres');
console.log(personaNormal2);
personaNormal2.quienSoy();
personaNormal2.miFrase();
personaNormal2.setCodigo = 999;
console.log(personaNormal2);
console.log(personaNormal2.getCodigo);
console.log(Persona._conteo);
console.log(Persona.getConteo);
Persona.mensajeEstatico();


// Herencia - Extension