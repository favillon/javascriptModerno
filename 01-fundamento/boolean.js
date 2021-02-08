const  numeroMayor = (a, b) => ( a > b) ? a : b;
console.log(numeroMayor(10,20));

const  tieneMembresia = (miembro) => (miembro) ? 2 : 10;
console.log(tieneMembresia(false));


const enemigo = false;

const arrayAmigos = [
    'Peter', 'Tony', enemigo ? 'Thork' : 'Loki', numeroMayor(5, 6)
]

console.log(arrayAmigos);

const nota = 69;
const notaLetra =   nota >= 95 ? 'A+' :
                    nota >= 90 ? 'A' :
                    nota >= 85 ? 'B+' :
                    nota >= 80 ? 'B' :
                    nota >= 75 ? 'C+' :
                    nota >= 70 ? 'C' : 'F';

console.log({nota, notaLetra})