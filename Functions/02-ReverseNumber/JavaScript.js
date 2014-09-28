function reverseNumber() {
    var num = document.getElementById("number").value;
    var result = "";

    if (!(isNaN(parseInt(num)))) {
        for (var i = num.length - 1; i >= 0; i--) {
            result += num[i];
        }
    } else {
        result = "Invalid Input!";
    }
    
    document.getElementById('result').innerHTML = result;
}