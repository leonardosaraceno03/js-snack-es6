let squadreCampionato = [
    {
        name:"catania",
        puntiFatti: "",
        falliSubiti:"",
    },
    {
        name:"palermo",
        puntiFatti: "",
        falliSubiti:"",
    },
    {
        name:"messina",
        puntiFatti: "",
        falliSubiti:"",
    },
    {
        name:"trapani",
        puntiFatti: "",
        falliSubiti:"",
    },
    {
        name:"ragusa",
        puntiFatti: "",
        falliSubiti:"",
    },
    {
        name:"siracusa",
        puntiFatti: "",
        falliSubiti:"",
    },
]; 
let newArray = [];
//creare di oggetti di squadre da calcio
for(let i = 0; i< squadreCampionato.length; i++){
    let {puntiFatti, falliSubiti}= squadreCampionato[i];
    squadreCampionato[i].falliSubiti = generatoreNumeroRandom();
    squadreCampionato[i].puntiFatti = generatoreNumeroRandom();
    
}
console.log(squadreCampionato);

for(let i = 0; i< squadreCampionato.length; i++){
    let {name, falliSubiti}= squadreCampionato[i];
    let obj = {...squadreCampionato.name, name, falliSubiti};
    newArray.push(obj);
}
console.log(newArray);



//funzioni
function generatoreNumeroRandom(){
    let numeroCPU1 = Math.round(Math.random() * 5) + 0;
    return numeroCPU1;
    
}