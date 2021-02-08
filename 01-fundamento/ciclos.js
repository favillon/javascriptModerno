const heroes = ['Batman', 'Superman', 'WW', 'Aquaman'];
console.warn("--- For tradicional ---");

for (let index = 0; index < heroes.length; index++) {
    const element = heroes[index];
    console.log(element);
}
console.warn("--- For In ---");
for (const i in heroes) {
    if (Object.hasOwnProperty.call(heroes, i)) {
        const element = heroes[i];
        console.log(element);
    }
}

console.warn("--- For Of ---");
for (const heroe of heroes) {
    console.log(heroe);
}