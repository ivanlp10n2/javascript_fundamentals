//Get element by ID
//console.log(document.getElementById("header-title"));
/*var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
//console.log(header);

headerTitle.textContent = "Hola";
headerTitle.innerText = "Adios";

//Get elements by className
var items = document.getElementsByClassName("list-group-item");
items[0].textContent = "Meintriga";

//GetElementsByTagName
var items = document.getElementsByTagName("li");
items[0].textContent = "Ritter";

//query selector

var header = document.querySelector("#main-header");
header.style.border = "solid 4px #0f9";

var button = document.querySelector('input[type="submit"]');
button.value = "Gazir";

var item = document.querySelector(".list-group-item");
item.style.color = "red";

//query selector all
var item = document.querySelectorAll(".list-group-item");
item[2].style.color = "red";

var titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = "Prueba";

//ParentElementparentElement
var itemList = document.querySelector("#items");
console.log(itemList.parentElement);
var main = itemList.parentElement;
main.style.backgroundColor = "#191911";

//ParentElement
var itemList = document.querySelector("#items");
console.log(itemList.parentElement);
var main = itemList.parentElement;
main.style.backgroundColor = "#191911";

//CreateElement
var nuevoDiv = document.createElement("div");
nuevoDiv.className = "hola";
nuevoDiv.id = "div-hola";
nuevoDiv.setAttribute("title","Hola mundo");

//CreateTextNode
var nuevoNodoText = document.createTextNode("Hola mundo");
nuevoDiv.appendChild(nuevoNodoText);

var contenedor = document.querySelector(".container");
var h1 = document.querySelector("h1");

//contenedor.insertBefore(nuevoDiv,h1);
document.getElementById('boton').addEventListener('click', hacerClick);

function hacerClick(){
    //console.log('Usted hizo click');
    document.getElementById('header-title').textContent = 'Texto cambiado';
}*/

//Agregar un elemento a la lista

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

//Evento submit del formulario
form.addEventListener('submit',agregarItem);

//Evento click de la lista
lista.addEventListener('click', eliminarItem);

//Evento del teclado en el campo de filtro
filtro.addEventListener('keyup', filtrarItems);

//Función para agregar un item a la lista
function agregarItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement('button');
    botonDel.className = 'btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));

    li.appendChild(botonDel);
    console.log(li);

    lista.appendChild(li);
}

//Función para eliminar un item de la lista
function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){
        if(confirm("¿Seguro que desea eliminar el elemento?")){
        var li = e.target.parentElement;
        lista.removeChild(li);
        }
    }
}

//Funcion para filtrar elementos de la lista
function filtrarItems(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });

    console.log(items);
}