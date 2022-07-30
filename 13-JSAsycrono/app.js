//setTimeout(() => console.log('Esto aparece después de 3 segundos'),3000);

///////JavaScript Asincronico 

/*const segundo = () => {
    setTimeout(() => {
        console.log('Llamado a segundo');
    }, 2000);  
}

const primero = () => {
    console.log('Inicio de primero');
    segundo();
    console.log('Fin de primero');
}

primero();

const getUsuarios = () => {
    setTimeout(() => {
        const userIDs = [101, 102, 103, 105];
        console.log(userIDs);

        setTimeout((id) => {
            const usuario = {
                email: 'facundosabetodi@gmail.com',
                nombre: 'Facundo'
            }
            console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);

            setTimeout((idPermiso) => {
                const permisos = ['admin', 'creador'];
                console.log(permisos);
            }, 1500, userIDs[2]);
        }, 1500, userIDs[2]);
    }, 1500);
}

getUsuarios();*/

//De Callbacks a Promesas

const getUsuariosIDs = new Promise((response, reject) => {
    setTimeout(() => {
        response([101, 102, 103, 105]);
    }, 1500)
});

const getUsuario = userID => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const usuario = {
                email: 'facucruz_la22@hotmail.com',
                nombre: 'Facu'
            }
            resolve(`${id} - ${usuario.email} - ${usuario.nombre}`);
        }, 1500, userID)
    })
}

const getPermisos = id => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const permiso = ['admin', 'creador'];
            resolve(permiso);
        }, 1500, id);
    })
}

/*getUsuariosIDs
.then(IDs => {
    console.log(IDs);
    return getUsuario(IDs[3]);
})
.then(usuario => {
    console.log(usuario);
    return getPermisos(usuario.id);
})
.then(permisos => {
    console.log(permisos);
})
.catch(() => {
    console.log('Error');
})*/

///Función con Async/Await
async function getUsuariosAW(){
    const IDs = await getUsuariosIDs;
    console.log(IDs);
    const usuario = await getUsuario(IDs[3]);
    console.log(usuario);
    const permisos = await getPermisos(usuario.id);
    console.log(permisos);
    return usuario;
}

//getUsuariosAW().then(resultado => console.log(`${resultado} es un usuario`));


//Ejemplo de una llamada ajax con html request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4){
        const datos = JSON.parse(e.target.responseText);
        console.log(datos);
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();




///////////Ejemplo del uso de promesas
//Ejemplo 1
/*let promesa = new Promise((resolve, reject) => {
    if(false){
        resolve('La operación fue exitosa');
    }else{
        reject('Hubo un errror');
    }
});

promesa.then( response => {
    console.log('Response' + response);
}).catch(error => {
    console.log('Error' + error);
})

//Ejemplo 2
var miPromesa = Promise.resolve('Comida');
miPromesa.then(resp => console.log(resp));

//Ejemplo 3
var miPromesa2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 2000);
})

miPromesa2.then(resp => {
    resp += 5;
    console.log(resp);
})*/