function IsInCircle() {
    var x = parseFloat(document.getElementById('x').value);
    var y = parseFloat(document.getElementById('y').value);

    if ((x <= 5 && x >= -5) && (y <= 5 && y >= -5)) {
        document.getElementById('result').innerHTML = "The print IS within the circle";
    } else {
        document.getElementById('result').innerHTML = "The print ISN'T within the circle";
    }

}