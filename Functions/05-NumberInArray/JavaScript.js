function findOccurence() {
    var textInput = document.getElementById("array").value;
    var num = document.getElementById("number").value;
    var arr = textInput.split(" ");
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            count++;
        }
    }

    document.getElementById('result').innerHTML = "Number <b>" + num + "</b> appears -> <b>" + count + "</b> times.";
}