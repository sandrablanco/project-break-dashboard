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
// API KEY 5a76d7c75e6e4ebbb6891757250612
//https://api.weatherapi.com/v1/current.json?key=5a76d7c75e6e4ebbb6891757250612&q=Madrid&aqi=no
    // "location": {
    //     "name": "Madrid",
    //     "country": "Spain",},
    //     "current": {
    //         "temp_c": 11.3,
    //           "condition": {
    //         "text": "Partly cloudy",
    //         "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
    //         "code": 1003
    //     },
    //           "wind_kph": 13.7,
    //           "precip_mm": 0.0,
    //            "humidity": 94,
    // }