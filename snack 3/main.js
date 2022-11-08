const bike = [
    {
        name: "bmx",
        weightKg: 5,
    },
    {
        name: "mountain bike",
        weightKg: 4,
    },
    {
        name : "graziella",
        weightKg: 10,
    }
];
//creazione array di oggetti

let elementoCorrente;
let limite;
for(let i = 0; i < bike.length; i++){
    let {name, weightKg} = bike[i];
    if(weightKg < limite){
        limite = weightKg;
        elementoCorrente = name;
    }
}
console.log(`la bicicletta più leggera è ${elementoCorrente} e il suo peso è pari a: ${limite}kg`);