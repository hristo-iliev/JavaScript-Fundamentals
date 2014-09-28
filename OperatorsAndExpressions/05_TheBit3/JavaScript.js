function TheBit3() {
    var num = parseInt(document.getElementById("number").value);
    var mask = 1 << 3;
    var result = num & mask;

    if (result !== 0) {
        document.getElementById('result').innerHTML = "The 3rd bit is:  <span style='font-weight:bold'>1</span>";
    } else {
        document.getElementById('result').innerHTML = "The 3rd bit is:  <span style='font-weight:bold'>0</span>";
    }

}