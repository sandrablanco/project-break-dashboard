
//al pusar añadir link se añadirá en el DOM y tambien en localstorage "favoritos"
//cada uno de los elementos tendra un nombre que hemos añadido y tendr´boton de eliminar
//usar createelemnt, appendchild o innerHTML y localstorage
// console.log("links.js cargado");

//Capturar elementos del DOM
//2 inputs uno será el titulo que aparecerá en cada uno de los elemntos OK
const nombreInput = document.getElementById('titulo');
const urlInput = document.getElementById('url');
const añadirBotonLink = document.getElementById('add-link');
const linksList = document.getElementById('links-list');
//localstorage
// const lista = JSON.parse(localStorage.getItem("lista"));
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function cargarLinks() {
    linksList.innerHTML = ''; // limpiamos la lista antes de cargar
    for (const item of favoritos) {  //recorremos el array favoritos
        const li = document.createElement('li'); //creamos una lista
        const a = document.createElement('a'); //con su enlace
        a.href = item.url; //asiignamos la url direccion
        a.textContent = item.nombre;//le ponemos nombre
        a.target = '_blank'; // abrimos en una nueva pestaña
        li.appendChild(a); //metes el a enlace dentro del li lista
        linksList.appendChild(li); //metes el li dentro de linkslist ul
    } 
    deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {}); // eliminar el link


//ejemplo de links
// const links = [
//   { nombre: "Google", url: "https://google.com" },
//   { nombre: "YouTube", url: "https://youtube.com" },
//   { nombre: "GitHub", url: "https://github.com" },
//   { nombre: "Spotify", url: "https://spotify.com"}
// ];

// for (const item of links) {
//   // aquí creas el elemento del link
// }

// function mostrarLinks() {
//     // aquí va tu lógica del bucle
// }
// mostrarLinks();

//localstorage
// localStorage.setItem("nombre", "Sandra");
// const usuario = localStorage.getItem("nombre");
// console.log(usuario);//en consola aparecerá Sandra
// localStorage.removeItem("nombre");//elimina el item nombre
// //localstorage solo guarda texto
// const frutas = ["manzana", "pera", "kiwi"];
// localStorage.setItem("lista", JSON.stringify(frutas));
