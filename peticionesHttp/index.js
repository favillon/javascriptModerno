var urlChuckNorris='https://api.chucknorris.io/jokes/random';

const obtenerChiste = async() => {

    const resp = await fetch(urlChuckNorris);

    if (!resp.ok) return console.error('No se pudo realizar la peticion');

    const chiste = await resp.json();

    return chiste;
} 

//export { obtenerChiste }

fetch(urlChuckNorris).then( resp => {
    
    resp.json().then(data => {
        console.table(data.id);
        console.table(data.value);
    });

});

fetch(urlChuckNorris).then( resp => {

    resp.json().then(({id, value}) => {
        console.error(id);
        console.error(value);
    });
    
});


fetch(urlChuckNorris)
    .then( resp =>  resp.json())
    .then(({id, value}) => {
        console.warn(id, value);
    });


obtenerChiste()
    .then(console.log)
    .catch();