class Persona{

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
        console.log('Bienvenido al Constructor de Persona' );
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

class Heroe  extends Persona{
    clan;
    constructor(nombre, codigo, frase)
    {
        super(nombre, codigo, frase);
        this.clan = 'Con mi Clan';
    }
    quienSoy()
    {
        super.quienSoy();
        console.log('Soy un heroe, que se llama : ' +  this.nombre)

    }
}

const primerHeroe = new Heroe('Basman');
console.log(primerHeroe)
primerHeroe.quienSoy();
