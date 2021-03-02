import '../css/saludar.css'
import imgWebpack from '../assets/img/webpack.png'

export const saludar = (nombre) => {
    console.log("creando el saludo")

    const h1 = document.createElement('h1');    
    const today = new Date();    
    const imgWeb = document.createElement('img');
    
    imgWeb.src = imgWebpack;
    imgWeb.height = '200';
    h1.innerText = `Hola, Como estas  ${nombre} con Hora ${today}`

    document.body.append(h1);
    document.body.append(imgWeb);
    console.log(today)
}