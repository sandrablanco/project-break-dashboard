//generar una contraseña que tenga entre 12 y 50 caracteres
//imput donde meter la contraseña y un boton para generarla
//usar math.random para seleccionar caracteres aleatorios de un string
//guardar los datos en una variable para poder recorrerlos
//usar bucles y condicionales

//variables y constantes de numeros, letras y caracteres
const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generarContraseña(longitud) {
   const longitudInput = document.getElementById('longitud').textContent = "";
    const valorLongitud = parseInt(longitudInput.value);
    if (valorLongitud <12 || valorLongitud >50 || isNaN(valorLongitud)) {
      alert("Por favor, introduce un número entre 12 y 50");
      return;
    }

function generarContraseña(longitud) {
  const todosLosCaracteres = letrasMayusculas + letrasMinusculas + numeros + simbolos;
  let contraseña = ""; }