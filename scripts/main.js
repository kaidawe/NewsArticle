console.log("Conan Says Hi")

const burger = document.getElementById('menuToggle');
const nav = document.getElementById('main-nav');
const weatherImg = document.getElementById('weather-image')

let precipitation = "snowy";

var img = document.createElement("img");
var p = document.createElement("p");

getWeatherImage()
burger.addEventListener('click', function() {
    nav.classList.toggle('open');    
})

function getWeatherImage() {
    switch (precipitation) {
        case "none":
            p.textContent = "it is cloudy"
            img.src = "../images/sunny.jpg"
            weatherImg.appendChild(p);
            weatherImg.appendChild(img);
            break;

        case "rainy":
            img.src = "../images/conan-obrien-cats.webp"
            p.textContent = "it is rainy"
            weatherImg.appendChild(p);
            weatherImg.appendChild(img);
            break;

        case "windy":
            p.textContent = "it is windy"
            weatherImg.appendChild(p);
            img.src = "../images/windy.jpg"
            weatherImg.appendChild(img);
            break;

        case "snowy":
            p.textContent = "it is snowy"
            weatherImg.appendChild(p);
            img.src = "../images/snowy.png"
            weatherImg.appendChild(img);
            break;

        case "foggy":
            p.textContent = "it is foggy"
            weatherImg.appendChild(p);
            img.src = "../images/smoking.jpg"
            weatherImg.appendChild(img);
            break;

        case "stormy":
            p.textContent = "it is stormy"
            weatherImg.appendChild(p);
            img.src = "../images/shocked.jpg"
            weatherImg.appendChild(img);
            break;
        default:
            p.textContent = "it is sunny"
            weatherImg.appendChild(p);
            img.src = "../images/sunny.jpg"
            weatherImg.appendChild(img);
    }
}