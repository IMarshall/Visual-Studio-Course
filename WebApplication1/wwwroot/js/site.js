// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var id = null;
function myMove() {
    var elem = document.getElementById("frame");
    var elemWidth = 420;
    var elemHeight = 315;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (elemWidth == 600) {
            clearInterval(id);
        } else {
            elemWidth++;
            elemHeight++;
            elem.style.width = elemWidth + 'px';
            elem.style.height = elemHeight + 'px';
        }
    }
}