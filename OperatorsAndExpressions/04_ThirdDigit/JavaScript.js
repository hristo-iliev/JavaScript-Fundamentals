function GetDigit() {
    var number = document.getElementById("number").value;

    var newNumber = number[number.length - 3];

    if (newNumber == 7) {
        document.getElementById('result').innerHTML = "TRUE";
    } else {
        document.getElementById('result').innerHTML = "FALSE";
    }
}