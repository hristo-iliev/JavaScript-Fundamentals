function printNumbers() {
    var num = parseInt(document.getElementById('number').value);

    var result = "";

    for (var i = 1; i <= num; i++) {
        if (i % 21 === 0) {
            continue;
        }
        result += " " + i;
    }

    document.getElementById('result').innerHTML = result.trim();
}