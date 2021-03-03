let circle = document.querySelector("#circle");
let svgCircle = document.querySelector('#circle svg');
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let hamburger = document.querySelector(".hamburgerT")

bool = true

function showNav() {
    hamburger.classList.toggle("change");
    if (bool) {
        ul.style.transform = "translateX(0%) translateY(-20%)"
        circle.style.animationPlayState = "paused";
        circle.style.opacity = "50%"
        svgCircle.style.animationPlayState = "paused";

        bool = false
    } else {

        ul.style.transform = "translateX(-150%)  translateY(-20%)"
        circle.style.animationPlayState = "running";
        circle.style.opacity = "100%"
        svgCircle.style.animationPlayState = "running";

        bool = true

    }


}

circle.addEventListener("click", showNav);