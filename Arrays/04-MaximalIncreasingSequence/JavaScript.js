function maximalIncreasingSequence() {
    var numbersString = document.getElementById('array').value;
    var arr = numbersString.split(" ");
    var numbers = [];
    for (var num in arr) {
        numbers.push(parseInt(arr[num]));
    }

    var bestCount = 1;
    var bestNumbers = numbers[0];
    var currentCount = 1;
    var currentNumber = [numbers[0]];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] == numbers[i - 1] + 1) {
            currentCount++;
            currentNumber.push(numbers[i]);
        } else {
            if (currentCount > bestCount) {
                bestCount = currentCount;
                bestNumbers = currentNumber;
            }
            currentCount = 1;
            currentNumber = [numbers[i]];
        }
    }
    if (currentCount > bestCount) {
        bestCount = currentCount;
        bestNumbers = currentNumber;
    }
        

    document.getElementById('result').innerHTML = "The maximal increasing sequence is: <br/>" + bestNumbers.join(", ");
}