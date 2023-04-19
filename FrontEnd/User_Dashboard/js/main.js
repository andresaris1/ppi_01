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


// ============================== APP CLIMA ================

const container = document.querySelector('.container_clima');
const search = document.querySelector('.search_box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not_found');

search.addEventListener('click', () => {
    const APIKEY = '4a3b4XXXXef5b8cfcef33f8656a5XXXX';
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
