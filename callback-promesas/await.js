import {buscarHeroeAsync} from './heroes-promesas-json.js'

const arrayHeroes = ['capi','iron','spider'];

export const obtenerHeroesArr =  async () => {

    const heroesArr = [];
    for (const heroe of arrayHeroes) {
        //await buscarHeroeAsync(heroe).then(heroe=> heroesArr.push(heroe));
        const heroea = await buscarHeroeAsync(heroe);
        heroesArr.push(heroea)
    }
    
    return heroesArr;
};