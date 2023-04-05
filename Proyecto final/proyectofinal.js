
let img1 = document.getElementById("img1");
let fecha = document.getElementById("fecha");
img1.addEventListener("click", togglefecha);

function togglefecha(){
    fecha.classList.toggle("ver");
}

let img2 = document.getElementById("img2");
let direccion = document.getElementById("direccion");
img2.addEventListener("click", toggledire);

function toggledire(){
    direccion.classList.toggle("ver");
}

let img3 = document.getElementById("img3");
let telefono = document.getElementById("telefono");
img3.addEventListener("click", toggletlf);

function toggletlf(){
    telefono.classList.toggle("ver");
} 

let img4 = document.getElementById("img4");
let email = document.getElementById("email");
img4.addEventListener("click", togglemail);

function togglemail(){
    email.classList.toggle("ver");
}

