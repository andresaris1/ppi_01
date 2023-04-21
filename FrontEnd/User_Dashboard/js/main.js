// ============================== SIDE BAR ============================================
// Add hover class to the select list item
let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach(item=>{
        item.classList.remove("hovered");
    })
    this.classList.add("hovered")
}

list.forEach(item => item.addEventListener("mouseover", activeLink))

// Menu Toggle (Esconder la side bar)
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

// Funcionalidad
toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}


// ============================== APP CLIMA ========================================================

const container = document.querySelector('.container_clima');
const search = document.querySelector('.search_box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not_found');

search.addEventListener('click', () => {
    const APIKEY = '4a3b40c79ef5b8cfcef33f8656a55b32';
    const city = document.querySelector('.search_box input').value;

    // Condicionales error 404

    if (city === '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`)

        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');


            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity .text span');
            const wind = document.querySelector('.weather-details .wind .text span');

            // Casos del clima 

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'img/clear.png';
                    break;
                
                case 'Clouds':
                    image.src = 'img/clouds.png';
                    break;
                
                case 'Drizzle':
                    image.src = 'img/drizzle.png';
                    break;

                case 'Rain':
                    image.src = 'img/rain.png';
                    break;

                case 'Thunderstorm':
                    image.src = 'img/thunderstorm.png';
                    break;
                
                case 'Mist':
                    image.src = 'img/mist.png';
                    break;
                
                default:
                    image.src = '';
            }


            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';
        });
    


})


// ============================== MAPA CON OPEN STREET Y NOMINATIM ============================================

// Definir las constantes
const searchInput = document.getElementById('search');
const resultList = document.getElementById('result-list');
const mapContainer = document.getElementById('map');
const currentMarkers = [];

// Crear el mapa centrado en el Valle de Aburra
// Mapa con Open Street Map
const map = L.map('map').setView([6.223, -75.6], 12);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Hacer la llamada a la API mediante el botón
document.getElementById('search-button').addEventListener('click', () => {
    const query = searchInput.value;
    // Llamar a la API de búsqueda de OpenStreetMap
    fetch('https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=' + query)
        .then(result => result.json())
        .then(parsedResult => {
            // Mostrar los resultados en la lista de resultados
            setResultList(parsedResult);
        });
});

function setResultList(parsedResult) {
    // Limpiar la lista de resultados y los marcadores anteriores
    resultList.innerHTML = "";
    for (const marker of currentMarkers) {
        map.removeLayer(marker);
    }
    // Hacer un zoom out para mostrar todos los resultados en el mapa
    map.flyTo(new L.LatLng(6.223, -75.6), 11);
    // Crear un elemento de la lista de resultados por cada resultado de la búsqueda
    for (const result of parsedResult) {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'list-group-item-action');
        // Mostrar la información del resultado en formato JSON en el elemento de la lista
        li.innerHTML = JSON.stringify({
            displayName: result.display_name,
            lat: result.lat,
            lon: result.lon
        }, undefined, 2);
        // Hacer zoom en el mapa y resaltar el elemento de la lista cuando se hace clic en él
        li.addEventListener('click', (event) => {
            for(const child of resultList.children) {
                child.classList.remove('active');
            }
            event.target.classList.add('active');
            const clickedData = JSON.parse(event.target.innerHTML);
            const position = new L.LatLng(clickedData.lat, clickedData.lon);
            map.flyTo(position, 15);
        })
        // Crear un marcador en el mapa para el resultado de la búsqueda
        const position = new L.LatLng(result.lat, result.lon);
        currentMarkers.push(new L.marker(position).addTo(map));
        // Agregar el elemento de la lista al resultado final
        resultList.appendChild(li);
    }
}






   