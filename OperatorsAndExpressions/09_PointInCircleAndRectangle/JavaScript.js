/*global document: false */
function IsInCircleAndRectangle() {
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);

    var inCircle = false;
    var inRectangle = false;

    if ((x - 1.1 <= 3 && x - 1.1 >= -3) && (y - 1.1 <= 3 && y - 1.1 >= -3)) {
        inCircle = true;
    }

    if ((y >= -1 && y <= 1) && (x >= 0 && x <= 6)) {
        inRectangle = true;
    }

    if (inCircle === true && inRectangle === true) {
        document.getElementById('result').innerHTML = "The point IS within the circle and rectangle.";
    } else {
        document.getElementById('result').innerHTML = "The point ISN'T within the circle and rectangle.";
    }
}