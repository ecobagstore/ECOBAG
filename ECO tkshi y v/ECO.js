window.addEventListener("load", function() {
    document.getElementById("loader").classList.toggle("loader2")
})
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;

}


let ubicacionPrincipal = window.pageYOffset
let $nav = document.querySelector('#navbar')
window.addEventListener('scroll', function() {
    let ubicacionActual = window.pageYOffset

    console.log(ubicacionActual)
    if (ubicacionPrincipal >= ubicacionActual) {

        $nav.style.top = "0px"

    } else {
        $nav.style.top = "-80px"

    }
    ubicacionPrincipal = ubicacionActual

})