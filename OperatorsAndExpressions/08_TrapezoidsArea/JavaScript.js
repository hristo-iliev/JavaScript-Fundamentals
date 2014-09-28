function Area() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var height = parseFloat(document.getElementById("height").value);
    var result = ((a + b) / 2) * height;

    if (!isNaN(result)) {
        document.getElementById('result').innerHTML = "The area is " + (result);
    } else {
        document.getElementById('result').innerHTML = "INVALID INPUT IS ENTERED!";
    }
}