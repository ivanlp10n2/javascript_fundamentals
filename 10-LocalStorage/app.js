//localStorage.setItem('nombreUsuario', 'Facu');
//localStorage.setItem('ubicacion', 'La Plata');
//console.log(localStorage.getItem('nombreUsuario'));
//console.log(localStorage.getItem('ubicacion'));

//localStorage.removeItem('nombreUsuario');
//localStorage.clear();

////////////Notación JSON
const usuario = {
    nombre: "Facundo",
    edad: "30"
}

const usuarioJSON = JSON.stringify(usuario);
localStorage.setItem('usuario', usuarioJSON);

const userJSON = localStorage.getItem('usuario');
usuario2 = JSON.parse(userJSON);
console.log(`${usuario2.nombre}: ${usuario2.edad}`);