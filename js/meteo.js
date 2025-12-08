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
    const API_KEY = '5a76d7c75e6e4ebbb6891757250612';
    const nameCity = 'Madrid';
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${nameCity}&aqi=no`;
    
    function mostrarTiempoActual(data) {
    document.querySelector("h2").textContent = //devuelve el primer elemento que coincide
    `${data.location.name}, ${data.location.country}`;

    document.querySelector("p").textContent =
    `Estado: ${data.current.condition.text}`;

    document.getElementById("weather-icon").src =
    `https:${data.current.condition.icon}`;

    document.getElementById("precipitation").textContent =
    `Precipitaciones: ${data.current.precip_mm} mm`;

    document.getElementById("humidity").textContent =
    `Humedad: ${data.current.humidity}%`;

    document.getElementById("wind-speed").textContent =
    `Viento: ${data.current.wind_kph} km/h`;

    }

    function mostrarPrevisionHoras(data) {
     const listaTiempo = document.getElementById("forecastwheather");
     listaTiempo.innerHTML = "";
     const horas = data.forecast.forecastday[0].hour;

    for (const hora of horas) {
        const li = document.createElement("li");
        li.classList.add("hourly-forecast");

        const hour = document.createElement("span");
        hour.textContent = hora.time.split(" ")[1];//texto string dividir en array por donde haya un espacio y quedarnos con la hora posicion 1

        const icon = document.createElement("img");
        icon.src = `https:${hora.condition.icon}`;

        const temp = document.createElement("p");
        temp.textContent = `${hora.temp_c}°C`;

        li.append(hour, icon, temp);
        forecastList.appendChild(li);
    }
    
    async function obtenerTiempo() {
    try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    }

    mostrarTiempoActual(data);
    mostrarPrevisionHoras(data);
    } catch (error) { console.log("Error al obtener los datos del clima:", error);

    }
    obtenerTiempo();