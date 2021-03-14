window.onload = cursor;
let cursorPOS = document.querySelector(".cursor");

function cursor() {
    document.onmousemove = getCursorXY;

    function getCursorXY(e) {
        let x = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        let y = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
        setTimeout(function() {
            cursorPOS.style.opacity = "1";
            cursorPOS.style.transform = `translate(${x}px,${y}px)  `;
        }, 50);
    }
}
const a = document.querySelectorAll("a");
const menu = document.querySelector(".menu");
let ogSize = cursorPOS.style.width;
menu.addEventListener("mouseenter", function() {
    cursorHoverON();
});
menu.addEventListener("mouseleave", function() {
    cursorHoverOFF();
});
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseenter", function() {

        cursorHoverON();
    });
    a[i].addEventListener("mouseleave", function() {
        cursorHoverOFF();
    });
}

function cursorHoverON() {
    cursorPOS.style.boxShadow = "0 0 0 3px #979def";
    cursorPOS.style.width = '55px'
    cursorPOS.style.height = '55px'
}

function cursorHoverOFF() {
    cursorPOS.style.boxShadow = "0 0 0 2px #F1E3E4";
    cursorPOS.style.width = ''
    cursorPOS.style.height = ''
}