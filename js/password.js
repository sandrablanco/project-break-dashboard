//generar una contraseña que tenga entre 12 y 50 caracteres
//imput donde meter la contraseña y un boton para generarla
//usar math.random para seleccionar caracteres aleatorios de un string
//guardar los datos en una variable para poder recorrerlos
//usar bucles y condicionales
//console.log("password funciona");

//variables y constantes de numeros, letras y caracteres
const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generarContraseña(longitud) {
  const valorLongitud = parseInt(document.getElementById("longitud").value);//obtiene la longitud del input
    if (valorLongitud <12 || valorLongitud >50 || isNaN(valorLongitud)) { //si no cumple alguna de las condiciones sale la alerta
      alert("Por favor, introduce un número entre 12 y 50");
      return;
    }

  const todosLosCaracteres = letrasMayusculas + letrasMinusculas + numeros + simbolos;
  let contraseña = "";

  //para generar caracteres aleatorios hacer bucle
  for (let i = 0; i < valorLongitud; i++) {
    const aleatorio = Math.floor(Math.random() * todosLosCaracteres.length);//aleatorio y redondeo hacia abajo
    contraseña = contraseña + todosLosCaracteres[aleatorio];//los [] pide un caracter dentro de la caddena sumale x y guardalo otra vez
  }
  const spanPassword = document.getElementById("password");
   spanPassword.innerHTML = `Contraseña Generada: <span>${contraseña}</span>`;
}
//boton con addEventListener
document.getElementById("boton").addEventListener("click", function() {
  generarContraseña();
});