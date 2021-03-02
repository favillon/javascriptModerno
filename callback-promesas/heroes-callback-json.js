const heroes = {
    capi : {
        nombre : 'Capitan America',
        porder : 'pobre'
    },
    iron : {
        nombre : 'Iroman',
        poder : ' Mucha plata'
    },
    spider : {
        nombre : 'araña',
        poder : ' alergia'
    }
}


export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];

    if ( heroe ) {
        callback(null, heroe)
    } else {
        callback(`No exsite el heroe ${id}`)
    }
}