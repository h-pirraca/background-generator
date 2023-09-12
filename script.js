let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let button = document.getElementById("randomButton");

let body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";

    css.textContent = body.style.background + ";";
}

setGradient();

function randomGrad(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let color = "#" + randomColor;
    return color;
}

button.addEventListener("click", function(){
    color1.value = randomGrad();
    color2.value = randomGrad();
    setGradient();
})

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

