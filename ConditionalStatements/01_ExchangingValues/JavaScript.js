function examine() {
    var firstInt = parseInt(document.getElementById('first').value);
    var secondInt = parseInt(document.getElementById('second').value);

    if (firstInt > secondInt) {
        var copyInt = secondInt;
        secondInt = firstInt;
        firstInt = copyInt;
    }

    document.getElementById('result').innerHTML = "a = " + firstInt + "<br /> b = " + secondInt;
}