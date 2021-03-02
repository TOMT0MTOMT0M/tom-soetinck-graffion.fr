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
        for (var i = 0, max = li.length; i < max; i++) {
            li[i].style.transform = "scaleX(100%)"
        }
        bool = false
    } else {

        ul.style.transform = "translateX(-100%)  translateY(-20%)"
        circle.style.animationPlayState = "running";
        circle.style.opacity = "100%"
        svgCircle.style.animationPlayState = "running";
        for (var i = 0, max = li.length; i < max; i++) {
            li[i].style.transform = "scaleX(0%)"
        }
        bool = true

    }


}

circle.addEventListener("click", showNav);