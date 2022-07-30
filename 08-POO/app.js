/////////////Manejo de clases en JavaScript


class Persona{
    constructor(nombre, edad, profesiones = []){
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones = profesiones;
    }

    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad}, profesión: `;

        this.profesiones.forEach((profesión) => {
            biografia +=`${profesión}, `;
        })
        return biografia;
    }
}

class Empleado extends Persona{
    constructor(nombre, edad, profesiones = [], sueldo, puesto){
        super(nombre, edad, profesiones);
        this.sueldo = sueldo;
        this.puesto = puesto;
    }

    getBiografia(){
        return super.getBiografia() + ` Puesto: ${this.puesto}, Salario:${this.sueldo}`;
    }

    set puesto(lugar){
        this._puesto = lugar;
    }
    get puesto(){
        return this._puesto;
    }
}

const persona1 = new Empleado("Facundo", 27, ['sociologo', 'programador'], 1000, 'developer');
const persona2 = new Empleado("Analía", 37, ['camarera', 'manicura'], 500, 'servicios');
const persona3 = new Persona("Maxi", 45, ['camarero', 'plomero']);

persona1.puesto = 'suboficiales';

console.log(persona1.getBiografia());
console.log(persona2.getBiografia());
console.log(persona3.getBiografia());

/*const datos = {
    get ubicacion(){
        return this._ubicacion;
    },
    set ubicacion(valor){
        this._ubicacion = valor
    }
}

datos.ubicacion = 'Tu casa';
console.log(datos.ubicacion);
console.log(datos);*/