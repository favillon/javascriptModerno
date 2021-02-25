export const saludar = (nombre) => {
    console.log("creando el saludo")
    const h1 = document.createElement('h1');

    h1.innerText = `Hola, Como estas ${nombre}`
    document.body.append(h1);
}