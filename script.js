// Boton mostrar u ocultar datos completos
let shown = false;
let dataButton = document.getElementById('data-button');
let personalData = document.getElementById('personal-data');


let showData = function () {
    shown = true
    dataButton.innerText = 'Ocultar datos completos'
    personalData.classList.toggle('invisible')
}

let hideData = function () {
    shown = false
    dataButton.innerText = 'Mostrar datos completos'
    personalData.classList.toggle('invisible')
}

dataButton.addEventListener('click', function () {
    if (shown == false) {
        showData()
    } else if (shown == true) {
        hideData()
    }
})

// Boton mostrar u ocultar datos completos

// Boton para cambiar tema Claro-Oscuro

let themeButton = document.getElementById('theme-button');
let backgroundColor = document.getElementById('background');
let navbarColor = document.getElementById('navbar');
let lightMode = false;

let lightColorTheme = function () {
    lightMode = true;
    themeButton.innerText = 'MODO OSCURO';
    backgroundColor.classList.remove('background-dark');
    backgroundColor.classList.add('background-light');

    navbarColor.classList.remove('navbar-dark');
    navbarColor.classList.add('navbar-light');

    navbarColor.classList.remove('bg-dark');
    navbarColor.classList.add('bg-light');
}

let darkColorTheme = function () {
    lightMode = false;
    themeButton.innerText = 'MODO CLARO';
    backgroundColor.classList.remove('background-light');
    backgroundColor.classList.add('background-dark');

    navbarColor.classList.remove('navbar-light');
    navbarColor.classList.add('navbar-dark');

    navbarColor.classList.remove('bg-light');
    navbarColor.classList.add('bg-dark');
}

themeButton.addEventListener('click', function () {
    if (lightMode == false) {
        lightColorTheme()
    } else if (lightMode == true) {
        darkColorTheme()
    }
    console.log()
})


// Boton para cambiar tema Claro-Oscuro