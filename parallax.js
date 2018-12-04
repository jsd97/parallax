window.addEventListener("DOMContentLoaded", scrollLoop, false);

var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");


var xScrollPos;
var yScrollPos;

function scrollLoop(e){
    xScrollPos = window.scrollX;
    yScrollPos = window.scrollY; 

    setTranslate(0, yScrollPos * -0.2, img1);
    setTranslate(0, yScrollPos * -1.5, img2);
    setTranslate(0, yScrollPos, img3);

    requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", "+ yPos+"px , 0";
}
