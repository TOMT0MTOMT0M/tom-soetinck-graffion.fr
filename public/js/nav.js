let circle = document.querySelector("#circle");
let svgCircle = document.querySelector('#circle svg');
let ul = document.querySelector("ul");
let li1 = document.querySelector(".li1");
let li2 = document.querySelector(".li2");
let li3 = document.querySelector(".li3");
let li4 = document.querySelector(".li4");
let hamburger = document.querySelector(".hamburgerT")

bool = true

function showNav() {
    hamburger.classList.toggle("change");
    if (bool) {
        li1.style.transform = "translateX(0%)"
        li2.style.transform = "translateX(0%)"
        li3.style.transform = "translateX(0%)"
        li4.style.transform = "translateX(0%)"
        circle.style.animationPlayState = "paused";
        circle.style.opacity = "50%"
        svgCircle.style.animationPlayState = "paused";

        bool = false
    } else {

        li1.style.transform = "translateX(-100%)"
        li2.style.transform = "translateX(-100%)"
        li3.style.transform = "translateX(-100%)"
        li4.style.transform = "translateX(-150%)"
        circle.style.animationPlayState = "running";
        circle.style.opacity = "100%"
        svgCircle.style.animationPlayState = "running";

        bool = true

    }


}

circle.addEventListener("click", showNav);