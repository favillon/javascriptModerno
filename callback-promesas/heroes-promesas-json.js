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


export const buscarHeroe = (id) => {
    const heroe = heroes[id];
                        // resuleve , falla/rechaza
    return new Promise((resolve, reject) => {
        if (heroe) {
            resolve(heroe)
        } else {
            reject(`No exsite el heroe ${id}`)
        }
    })
    
}

const proLenta =  new Promise((resolve, reject) => {
    setTimeout( () => resolve('Promesa Lenta'), 2000)
});

const proMedia =  new Promise((resolve, reject) => {
    setTimeout( () => resolve('Promesa Media'), 1500)
});

const proRapida =  new Promise((resolve, reject) => {
    setTimeout( () => resolve('Promesa Rapida'), 1000)
});
const proRapidaError =  new Promise((resolve, reject) => {
    setTimeout( () => reject('falla'), 1000)
});

export {
    proLenta, proMedia, proRapida, proRapidaError
}