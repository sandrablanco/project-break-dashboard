//que aparezcan las imagenes aleatorias de fondo math.random
const cambiarImagenesIntervalo = 15000; //para que cambie cada 15 seg
const rutaImagenes = [
  "./assets/1.jpg",
  "./assets/2.jpg",
  "./assets/3.jpg",
  "./assets/4.jpg",
  "./assets/5.jpg",
  "./assets/6.jpg",
  "./assets/7.jpg",
  "./assets/8.jpg",
  "./assets/9.jpg",
  "./assets/10.jpg",
  "./assets/11.jpg",
  "./assets/12.jpg",];

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