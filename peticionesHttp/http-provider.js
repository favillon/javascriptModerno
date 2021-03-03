var urlChuckNorris='https://api.chucknorris.io/jokes/random';

export const obtenerChiste = async() => {

    const resp = await fetch(urlChuckNorris);

    if (!resp.ok) return console.error('No se pudo realizar la peticion');

    const chiste = await resp.json();

    return chiste;
} 

//export { obtenerChiste }
/*
fetch(urlChuckNorris).then( resp => {
    
    resp.json().then(data => {
        console.log(data.id);
        console.log(data.value);
    });

});

fetch(urlChuckNorris).then( resp => {

    resp.json().then(({id, value}) => {
        console.log(id);
        console.log(value);
    });
    
});


fetch(urlChuckNorris)
    .then( resp =>  resp.json())
    .then(({id, value}) => {
        console.warn(id, value);
    });
*/

