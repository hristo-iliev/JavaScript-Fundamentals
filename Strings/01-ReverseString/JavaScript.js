function main() {
    var str = document.getElementById("string").value;
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    document.getElementById("result").innerHTML = "Reversed: " + reversed;
}