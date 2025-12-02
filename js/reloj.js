// reloj con horas, minutos y segundos
//formatear horas. si hora,min o seg cambia <10 añadir un 0 delante para que sea 01,02
//fecha formato DD/MM/AAAA
//franjas horarias de 00.00-7.00 hora de descansar, apaga y sigue mañana
//usar new date
//utilizar setinterval
//necesitamos condicionales para las franjas horarias
//conectar con el html mediante getelementbyid const index = document.getElementById('index')
// console.log("reloj funciona");

//formatear horas. si hora,min o seg cambia <10 añadir un 0 delante para que sea 01,02
function ponerCero(numero) {
  return numero < 10 ? "0" + numero : numero;
}

// //usar new date
function actualizarReloj() {
    const fecha = new Date();
    let horas = ponerCero(fecha.getHours());
    let minutos = ponerCero(fecha.getMinutes());
    let segundos = ponerCero(fecha.getSeconds());


//mostrar en html
document.getElementById("hora").textContent =
    `${horas}:${minutos}:${segundos}`;
}
//actualizar cada segundo
setInterval(actualizarReloj, 1000);
actualizarReloj(); //llamar a la funcion para que se muestre al cargar la pagina

//fecha que es igual que el reloj
function actualizarFecha() {
    const fecha = new Date();
    let dia = ponerCero(fecha.getDate());
    let mes = ponerCero(fecha.getMonth() + 1); // sumamos 1 porque enero=0
    let año = fecha.getFullYear();
document.getElementById("fecha").textContent =
  dia + "/" + mes + "/" + año;
}
setInterval(actualizarFecha, 1000 * 60 * 60); //x min x hora
actualizarFecha(); //llamar a la funcion para que se muestre al cargar la pagina

//franjas horarias con mensaje mr wonderful
function actualizarMensaje() {
    const fecha = new Date();
    let horas = fecha.getHours();
    let mensaje = "";
  if (horas >= 0 && horas < 7) {  
    mensaje = "Buenas noches hasta mañana los lunis y los niños se van a la cama";}
    else if (horas > 7 && horas <= 12) {
     mensaje = "Buenos días, but first coffee please";}
    else if (horas > 12 && horas <= 14) {
     mensaje = "Ya queda poco para llenar el buche";}
    else if (horas > 14 && horas <= 16) {  
     mensaje = "La energía no desaparece… se transforma en siesta después de comer";}
    else if (horas > 16 && horas <= 18) {
     mensaje = "Buenas tardes, el último empujón";
  } else if (horas > 18 && horas <= 22) {
     mensaje = "Esto ya son horas extras, piensa en gym";
  } else {
     mensaje = "Dulces sueños, que mañana hay que seguir fingiendo que somos adultos funcionales responsables";
     }
  document.getElementById("mensaje").textContent = mensaje;
    }
setInterval(actualizarMensaje, 1000 * 60); //cada minuto
actualizarMensaje(); //llamar a la funcion para que se muestre al cargar la pagina

// //Elementos del DOM
//  const index = document.getElementById('index')
//  const fechaElement = document.getElementById('fecha');
//  const mensajeElement = document.getElementById('mensaje');
//  const horaElement = document.getElementById('hora');