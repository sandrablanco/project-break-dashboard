//que aparezcan las imagenes aleatorias de fondo math.random
const cambiarImagenesIntervalo = 15000; //para que cambie cada 15 seg
const rutaImagenes = [
  "./assets/img/1.jpg",
  "./assets/img/2.jpg",
  "./assets/img/3.jpg",
  "./assets/img/4.jpg",
  "./assets/img/5.jpg",
  "./assets/img/6.jpg",
  "./assets/img/7.jpg",
  "./assets/img/8.jpg",
  "./assets/img/9.jpg",
  "./assets/img/10.jpg"
];

// const fondo = document.getElementById("fondo");

function cambiarImagenDeFondo() {
    const indiceAleatorio = Math.floor(Math.random() * rutaImagenes.length);
    // fondo.style.backgroundImage = `url('${rutaImagenes[indiceAleatorio]}')`;
    document.body.style.backgroundImage = `url(${rutaImagenes[indiceAleatorio]})`;
    document.body.style.backgroundSize = "cover"; //hace que la imagen cubra toda la pantalla
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";

}
cambiarImagenDeFondo(); //cambiar al cargar la pagina
setInterval(cambiarImagenDeFondo, cambiarImagenesIntervalo); //cambiar cada 15 seg