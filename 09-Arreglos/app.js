////////Arreglos en ES6

const redBull = [
    {
        codigo: 1,
        nombre: "Gazir"
    },
    {
        codigo: 2,
        nombre: "Skone"
    },
    {
        codigo: 3,
        nombre: "Larrix"
    },
];

/*redBull.unshift("Ritter");

console.log(redBull);

////////Quitar y agregar con Splice

redBull.splice(1, 0, "Yoiker");
console.log(redBull);

///////////Bucles

redBull.forEach(function(item, index){
    console.log(index);
    console.log(item);
})

for(let i = 0; i < redBull.length; i++){
    console.log(`Indice ${i}: ${redBull[i]}`);
}*/

////////////////////Búsqueda

const buscarFreestyler = function(redBull,nombre){
    const index = redBull.findIndex(function(fre,index){
       return fre.nombre === nombre; 
    });
    return index;
}

const filtrarFreestylers = redBull.filter(function(fre, index){
    const mc = fre.nombre.includes('i');
    return mc;
})

redBull.sort(function(a,b){
    if(a.nombre > b.nombre){
        return 1;
    }
    if(a.nombre < b.nombre){
        return -1;
    }
    return 0;
});

console.log(redBull);

//const paises = ["Colombia", "Ecuador", "Peru", "España", "México"];
//console.log(paises.filter(pais => pais.includes('o')));
//const index = redBull.findIndex(function(fre, index){
//    //console.log(fre);
//    return fre.nombre === "Larrix";
//})
//console.log(buscarFreestyler(redBull, "Larrix"));
//console.log(redBull[buscarFreestyler(redBull, "Larrix")]);