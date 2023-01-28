//Comments from the master himself
console.log("Conan Says Hi")

//Variable Declaration
const burger = document.getElementById('menuToggle');
const nav = document.getElementById('main-nav');
const weatherImg = document.getElementById('weather-image')

let precipitation = "snowy";

var img = document.createElement("img");
var p = document.createElement("p");
// Initialize function upon page load
getWeatherImage()

//burger menu toggle
burger.addEventListener('click', function() {
    nav.classList.toggle('open');    
})

// Switch Case Function to determine what weather is occuring and adds image elemnts/p tags to the parent div
function getWeatherImage() {
    switch (precipitation) {
        case "none":
            img.src = "../images/sunny.jpg";
            img.alt = "Conan Smiling";
            p.textContent = "it is cloudy";
            weatherImg.appendChild(p);
            weatherImg.appendChild(img);
            break;

        case "rainy":
            img.src = "../images/conan-obrien-cats.webp"
            img.alt = "Conan holding a cat on the late show";
            p.textContent = "it is rainy"
            weatherImg.appendChild(p);
            weatherImg.appendChild(img);
            break;

        case "windy":
            img.src = "../images/windy.jpg"
            img.alt = "Conan sitting in a chair looking from the side";
            p.textContent = "it is windy"
            weatherImg.appendChild(p);
            weatherImg.appendChild(img);
            break;

        case "snowy":
            img.src = "../images/snowy.png"
            img.alt = "Conan in a RCMP mountee ceremony uniform on the ground in the snow";
            p.textContent = "it is snowy"
            weatherImg.appendChild(p);
            weatherImg.appendChild(img);
            break;

        case "foggy":
            img.src = "../images/smoking.jpg"
            img.alt = "Conan and seth rogan lighting a blunt together";
            p.textContent = "it is foggy"
            weatherImg.appendChild(p);
            weatherImg.appendChild(img);
            break;

        case "stormy":

            img.src = "../images/shocked.jpg"
            img.alt = "Conan looking shocked";
            p.textContent = "it is stormy"
            weatherImg.appendChild(p);
            weatherImg.appendChild(img);
            break;

        default:
            img.src = "../images/sunny.jpg"
            img.alt = "Conan Smiling";
            p.textContent = "it is sunny"
            weatherImg.appendChild(p);
            weatherImg.appendChild(img);
    }
}