/////Manejo de fecha y hora
///// Unix Epoch - 1 de enero de 1970 00:00:00 - Milisegundo 0
///// Estandar base de cada zona horaria
/*const ahora = new Date();
const timestamp = ahora.getTime();
console.log(timestamp.toString());

const FechaActual = new Date(timestamp);
console.log(FechaActual.getFullYear());

const fecha1 = new Date("December 13, 1994 06:20:25");
console.log(ahora.toString());
console.log(fecha1.toString());

console.log(`Año ${ahora.getFullYear()}`);
console.log(`Mes ${ahora.getMonth()}`);
console.log(`Dia ${ahora.getDate()}`);
console.log(`Hora: ${fecha1.getHours()}`);
console.log(`Minutos: ${fecha1.getMinutes()}`);
console.log(`Segundos: ${fecha1.getSeconds()}`);

////////////EJERCICIO////////////
Comparar dos fechas, crear dos objetos Date, uno con una fecha cualquiera
el otro con la fecha actual. Luego comparar esos valores y ver cual es la 
menor a la otra*/

const fecha = new Date("March 22, 2017 16:00:45");
const fecha1 = fecha.getTime();

const fechaActual = new Date();
const ahora = fechaActual.getTime();

if(ahora > fecha1){
    console.log(fecha.toString());
}else{
console.log(fechaActual.toString());
}





