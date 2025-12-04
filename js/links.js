
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
        const deleteButton = document.createElement('button');
        a.href = item.url; //asiignamos la url direccion
        a.textContent = item.nombre;//le ponemos nombre
        a.target = '_blank'; // abrimos en una nueva pestaña
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-btn');//boton para elimnar lo creado
        deleteButton.addEventListener('click', () => {});
        deleteButton.addEventListener('click', () => {
            eliminarLink(item.url);
            favoritos.splice(index, 1); //eliminamos del array favoritos
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
            cargarLinks();
        });
        
        li.appendChild(a); //metes el a enlace dentro del li lista
        li.appendChild(deleteButton);//metemos en la lista el boton de eliminar
        linksList.appendChild(li); //metes el li dentro de linkslist ul
  index++; // avanzar índice
    }
}

function añadirLink(nombre, url) { 
    favoritos.push({ nombre, url }); //mete el enlace al final del array como favoritos
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    cargarLinks();

addLinkButton.addEventListener('click', function() { //añadir link al pulsar el boton de añadir enlace
  const name = nombreInput.value;
  const url = urlInput.value;
  if (name && url) { // ambos campos name y url esten rellenos
    addLink(name, url);
    nombreInput.value = '';
    urlInput.value = '';
  }
});
}

añadirLink(); //cargar los links al iniciar la pagina