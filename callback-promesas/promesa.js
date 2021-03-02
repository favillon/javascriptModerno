import { 
    buscarHeroe as buscarHeroePromesas, 
    proLenta, 
    proMedia, 
    proRapida, 
    proRapidaError
} from './heroes-promesas-json.js';

console.log('Hola mundo desde promesas');


const heroeId = 'cap1i';

// Promesas
buscarHeroePromesas(heroeId)
    .then(
        heroe => console.log(` respuesta de la promesa => ${heroe.nombre}`)
    )
    .catch(
        error => console.error(error)
    );


Promise.all([true, 'hola', 123]).then(arr=>{
    console.log('promesas.all 0')
});

Promise.all([buscarHeroePromesas('capi'),buscarHeroePromesas('spider')])
    .then(arrHeroes=>{
        console.log('promesas.all');
        console.log(`${arrHeroes[0].nombre} -- ${arrHeroes[1].nombre}`)
});

Promise.all([buscarHeroePromesas('capi1'),buscarHeroePromesas('spider')])
    .then( ([heroe1, heroe2])=>{
        console.log('promesas.all destructuracion');
        console.log(`${heroe1.nombre} -- ${heroe2.nombre}`)
    }).catch( err => {
        console.error('error => ' + err);
    }).finally(()=>{console.log(`Termino promesa`)});


proRapida.then(console.log);
proMedia.then(console.log);
proLenta.then(console.log);


Promise.race([proLenta, proMedia, proRapida, proRapidaError])
    .then(console.log)