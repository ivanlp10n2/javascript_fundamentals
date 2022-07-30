/*let persona = {
    nombre: "Facundo", 
    edad: 27,
    ciudad: "La Plata"
}

console.log(persona.edad);
persona.edad = 35;
console.log(`${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}`);

//Objetos y funciones
let freestylerA = {
    nombre: "Gazir",
    ciudad: "Asturias",
    nivel: 95,
    campeon: true
}

let freestylerB =  {
    nombre: "Chuty",
    ciudad: "Madrid",
    nivel: 93,
    campeon: false
}

let freestylerC =  {
    nombre: "Aczino",
    ciudad: "CDMX",
    nivel: 91,
    campeon: true
}

let getData = (freestyler) => {
    return {
        procedencia: `${freestyler.nombre} es de ${freestyler.ciudad} `,
        competencia: `${freestyler.nombre} tiene ${freestyler.nivel} de nivel.`
    }
}



let freestylerAData = getData(freestylerA);
let freestylerBData = getData(freestylerB);
let freestylerCData = getData(freestylerC);

console.log(freestylerAData.procedencia);
console.log(freestylerAData.competencia);

console.log(freestylerBData.procedencia);
console.log(freestylerBData.competencia);

console.log(freestylerCData.procedencia);
console.log(freestylerCData.competencia);

//Referencia de objetos

let persona = {
    nombre: "Facundo",
    edad: 27,
    sueldo: 1000
}

let otraPersona = persona;
otraPersona.sueldo = 1500;
console.log(otraPersona);

let cambiarSueldo = (p, monto) => {
    p.sueldo = p.sueldo + monto;
    console.log(p);
}

cambiarSueldo(persona, 500);
console.log(otraPersona);
console.log(persona);

//Métodos

let persona = {
    nombre: "Facundo",
    edad: 27,
    sueldo: 1000,
    presentacion: function(){
        return "resultado desde prueba";
    },
    cambiarEdad: function(e){
        this.edad += e;
    }
}

let result = persona.presentacion();
console.log(result);
persona.cambiarEdad(5);
console.log(persona.edad);*/

////////////Destructuración de objetos

const getPersonaDatos = () => {
    const respuesta = [
        {
            codigo: 200,
            data: {
                persona: {
                    nombre: "Facundo",
                    dirección: {
                        ciudad: "La Plata",
                        pais: "Argetina"
                    }
                }
            }
        },
        {
            codigo: 300,
            data: {
                persona: {
                    nombre: "Antone",
                    dirección: {
                        ciudad: "Rio Grande",
                        pais: "Argentina"
                    }
                }
            }
        },
        {
            codigo: 250,
            data: {
                persona: {
                    nombre: "Isabel",
                    dirección: {
                        ciudad: "Londres",
                        pais: "Inglaterra"
                    }
                }
            }
        },
    ]
    return respuesta
}



let { codigo: status, data: { persona: { nombre: nom } } } = getPersonaDatos()[1];

for (const { codigo: status, data: { persona: { nombre: nom } } } of getPersonaDatos()) {
    console.log(nom);
}

