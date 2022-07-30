//Arreglos en javascript

/*var nombres = ["Pablo", "Carlos", "Ana", "Tamara"];
var vegetales = new Array ("tomate", "lechuga", "zanahoria");

console.log(nombres[2]);
console.log(vegetales[1]);*/

//Operaciones con arreglos (clase 64)

//Arreglos diferentes tipos
/*var jugador = ["Migue", 0, 2, 1, "ganó"];
console.log(jugador);

//Objetos de forma literal
var persona = {
    nombre: "Pablo",
    apellido: "Vazquez",
    gustos: ["Futbol", "Peliculas", "Ingles"],
    trabajo: "Instructor",
    esCasado: true
}

console.log(persona);

//Objetos con la sintaxis objet

var persona2 = new Object();
persona2.nombre = "Diego"
persona2.apellido = "Maradona"
persona2.edad = 60;

console.log(persona2);*/

//Objeto tiz

var persona = {
    nombre: "Pablo",
    apellido: "Vazquez",
    gustos: ["Futbol", "Peliculas", "Ingles"],
    trabajo: "Instructor",
    esCasado: true,
    yearNacimiento: 1967,

    calcularEdad: function(){
    this.edad = 2022 - this.yearNacimiento;
    }
}

persona.calcularEdad();
console.log(persona);