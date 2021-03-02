let circle = document.querySelector("#circle");
let svgCircle = document.querySelector('#circle svg');
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

bool = true

function showNav() {

    if (bool) {
        ul.style.transform = "translateX(0%)"
        circle.style.animationPlayState = "paused";
        svgCircle.style.animationPlayState = "paused";
        for (var i = 0, max = li.length; i < max; i++) {
            li[i].style.transform = "scaleX(100%)"
        }
        bool = false
    } else {

        ul.style.transform = "translateX(-100%)"
        circle.style.animationPlayState = "running";
        svgCircle.style.animationPlayState = "running";
        for (var i = 0, max = li.length; i < max; i++) {
            li[i].style.transform = "scaleX(0%)"
        }
        bool = true

    }


}

circle.addEventListener("click", showNav);