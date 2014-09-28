function maximalSequence() {
    var numbers = document.getElementById('array').value;
    var arr = numbers.split(" ");

    var bestCount = 1;
    var bestNumber = arr[0];
    var currentCount = 1;
    var currentNumber = "";
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
            currentNumber = arr[i];
        } else {
            if (currentCount > bestCount) {
                bestCount = currentCount;
                bestNumber = currentNumber;
            }
            currentCount = 1;
            currentNumber = arr[i];
        }
    }
    if (currentCount > bestCount) {
        bestCount = currentCount;
        bestNumber = currentNumber;
    }

    var result = [];
    for (var j = 0; j < bestCount; j++) {
        result.push(bestNumber);
    }

    document.getElementById('result').innerHTML = "The maximal sequence is: <br/>" + result.join(", ");
}