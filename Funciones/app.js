/*function cuadradoNumero(num){
    var resultado = num * num;
    return resultado;
}

var num = 4;
valor = cuadradoNumero(num);

console.log(valor);
console.log(cuadradoNumero(6));*/

//Celsius = (F - 32) * 5/9

/*function pasarFahACel(F){
    var celsius = (F - 32) * 5/9;
    return celsius;
}

var F = 68;
console.log(pasarFahACel(F));

//Calcular edad
function calcularEdad(yearNacimiento){
    return 2022 - yearNacimiento;
}

var edad = calcularEdad(1995);
//console.log(edad);

//Jubilación

function cuandoJubilarse(yearNacimiento, nombre){
    var edad = calcularEdad(yearNacimiento);
    var paraJubilacion = 65 - edad; 
    console.log("A " + nombre + " le faltan " + paraJubilacion + " años para jubilarse"); 
    }

cuandoJubilarse(1994, "Facu");
cuandoJubilarse(1976, "Vicky");
cuandoJubilarse(1989, "Mari");
cuandoJubilarse(1992, "Diego");
cuandoJubilarse(1997, "Jose");
var nombre;

var prueba = function(n){
    return "Hola " + n
}

console.log(prueba(nombre));

//Argumentos por default
function sumar(a, b, c){
   return a + b + c;
}

console.log(sumar(10, 4, 7));

//Plantillas de cadenas - template strings
var nombre = "Facu"
console.log(`El nombre es: ${nombre}`);

var a = 25
var b = 47
console.log(`La suma es igual a ${a + b}`);*/

function calcularScore(nombre, pos, neg){
    var porPos = (pos/100) * 100
    var porNeg = (neg/100) * 100
    var score = ''
    
    if(porPos > 90){
        score = "A";
    }else if(porPos >= 70){
        score = "B";
    }else if(porPos >= 45){
        score = "C";
    }else{ 
        score = "D";
    }
    console.log(`${nombre} tiene un score de ${score}, con ${porPos}% de positivas`);
}

    calcularScore("Anita", 92, 8);
    calcularScore("Josefina", 77, 23);
    calcularScore("Diego", 25, 75);
    calcularScore("Albus", 54, 46);