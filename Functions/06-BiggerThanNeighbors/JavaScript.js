function checkIfBigger() {
    var numbers = document.getElementById("array").value.split(" ");
    var index = parseInt(document.getElementById("index").value);
    var arr = [];
    for (var i in numbers) {
        arr.push(parseInt(numbers[i]));
    }
    var neighbors = 0;
    var rightNeighbor = true;
    var leftNeighbor = true;
    if (arr[index - 1] !== undefined) {
        neighbors++;
        if (arr[index] <= arr[index - 1]) {
            leftNeighbor = false;
        }

    }
    if (arr[index + 1] !== undefined) {
        neighbors++;
        if (arr[index] <= arr[index + 1]) {
            rightNeighbor = false;
        }
    }
    var result;
    if (rightNeighbor && leftNeighbor) {
        result = "TRUE";
    } else {
        result = "FALSE";
    }

    document.getElementById('result').innerHTML = "Neighbors: <b>" + neighbors + "</b></br> Is bigger: <b>" + result + "</b>";
}