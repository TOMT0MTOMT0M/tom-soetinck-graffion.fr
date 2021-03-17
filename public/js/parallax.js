document.addEventListener("mousemove", parallax);

function parallax(e) {
    let para = this.querySelectorAll(".para")
    let tom2 = this.querySelector(".tom2");
    let tom1 = this.querySelector(".tom1");
    let speed = 5;
    let x = (window.innerWidth - e.pageX * speed) / 100;
    let y = (window.innerWidth - e.pageY * speed) / 100;
    if (window.location.href.includes("projets")) {
        para.forEach(el => {
            el.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    } else {
        tom1.style.transform = `translateX(${x}px) translateY(${y}px)`
        tom2.style.transform = `translateX(${y+2}px) translateY(${x+2}px)`
    }
}

