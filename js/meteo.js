//endpoint forecast
// export const FORECAST_ENDPOINT = 'https://api.open-meteo.com/v1/forecast';
//usar async/await con fetch a la API de open-meteo
// async function obtenerDatos() {
//     const respuesta = await fetch(URL);
//     const datos = await respuesta.json();
//     mostrarTiempoActual(datos);
//     mostrarPrevisionHoras(datos);
// }
//de datos.current: temp_c,condition.text,condition.icon,humidity,wind_kph,precip_mm
//de datos.location: name,country
//de datos.forecast.forecastday[0].hour: time,temp_c,condition.icon,condition.text
// console.log('meteo.js cargado');