// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4 

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let newArray = [];
let max;
let min;
let numeroCPU1 = generatoreNumeroRandom();
let numeroCPU2 = generatoreNumeroRandom();
 console.log(numeroCPU1)
 console.log(numeroCPU2)
if(numeroCPU1 > numeroCPU2){
     max = numeroCPU1;
     min = numeroCPU2;
     console.log(max)
     console.log(min)
    
}else if(numeroCPU1 < numeroCPU2){
     min = numeroCPU1;
     max = numeroCPU2;
     console.log(max)
     console.log(min)
}else{
    console.log("i numeri sono uguali, ricarica la pagina")
}
//Primo metodo con forEach
myArray.forEach((Element, index) => {
    if( index >= min && index <= max){
        newArray.push(Element);
    }
})
console.log(newArray)
let newArray2 = myArray.filter((Element, index)=>{
    if (index >= min && index <= max){
        return true;
    }
})
console.log(newArray2)

//funzioni
function generatoreNumeroRandom(){
    let numeroCPU1 = Math.round(Math.random() * 5) + 0;
    return numeroCPU1;
    let numeroCPU2 = Math.round(Math.random() * 5) + 0;
    return numeroCPU2;
}
