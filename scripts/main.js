console.log("Conan Says Hi")

const burger = document.getElementById('menuToggle');
const nav = document.getElementById('main-nav');

burger.addEventListener('click', function() {
    nav.classList.toggle('open');    
})