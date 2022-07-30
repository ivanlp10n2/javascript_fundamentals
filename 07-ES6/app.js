//ES6 Variables
/*let nombre = "Facundo";
let apellido = "Cruz";
const ciudad = "La Plata";
const nacimiento = 1994;

function calcularEdad(nacimiento){
    return 2022 - nacimiento;
}

console.log(`${nombre} ${apellido}, nació en ${ciudad} y tiene ${calcularEdad(nacimiento)} años`)

//Funciones flecha
const years = [2000, 2002, 2005, 2009, 2012];

//ES6
let edad = years.map(el => 2022 - el);

edad = years.map((el, index)=> `Edad ${index + 1}: ${2019 - el}`);
console.log(edad);

const cuadrado = (num) => num * num;
console.log(cuadrado(8));

const personas = [
    {
        nombre: "Facu",
        edad: 27
    },
    {
        nombre: "Ana",
        edad: 25
    },
    {
        nombre: "Carlos",
        edad: 35
    },
    {
        nombre: "Pepe",
        edad: 45
    }
]

//const menores30 = personas.filter(function(persona){
//    return persona.edad < 30;
//});
const menores30 = personas.filter((persona) => persona.edad < 30);
console.log(menores30);

//Destructuración
const persona = {
    nombre: "Carlos",
    edad: 56
}

const{nombre: n, edad: e} = persona;
console.log(n);
console.log(e);

const calcularMayoriaEdad = (year) => {
    const edad = new Date().getFullYear() - year;
    const mayoria = edad >= 18 ? true : false;
    return [edad, mayoria]; 
}
const [edad, mayoria] = calcularMayoriaEdad(2000);
console.log(edad);
console.log(`Es mayor de edad: ${mayoria}`);*/

//Mapas

