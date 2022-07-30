//Ejercicio
//Promedio, cual mas alto y si aprueba o no (13)

//Calcular promedios
var promedioPablo = (14+8+16)/3;
var promedioMaria = (12+18+10)/3;
console.log("El promedio de Pablo es: " + promedioPablo + " El promedio de Maria es: " + promedioMaria);

//Cual es mas alto
if(promedioMaria < promedioPablo){
    console.log("El promedio de Pablo es mas alto");
}else{
    console.log("El promedio de Maria es mas alto");
}

for(var i = 0; i < 2; i++){
    if(i === 0){
        if(promedioPablo > 13){
            console.log("Pablo está aprobado");
        }else{
            console.log("Pablo no está aprobado");
        }
    }
    else{
        if(promedioMaria > 13){
            console.log("Maria está aprobada");
        }else{
            console.log("María no está aprobada");
        }       
    }
}




