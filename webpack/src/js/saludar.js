export const saludar = (nombre) => {
    console.log("creando el saludo")

    const h1 = document.createElement('h1');    
    const today = new Date();
    console.log(today)

    h1.innerText = `Hola, Como estas  ${nombre} con Hora ${today}`
    document.body.append(h1);
}