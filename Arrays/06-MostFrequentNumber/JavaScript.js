function FindMostFrequentNumber() {
    var numbersString = document.getElementById('array').value;
    var arr = numbersString.split(" ");
    arr.sort();

    var mostNumber = arr[0];
    var bestFrequency = 1;
    var currentNumber = arr[0];
    var currentFrequency = 1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            currentFrequency++;
        } else {
            if (currentFrequency > bestFrequency) {
                bestFrequency = currentFrequency;
                mostNumber = currentNumber;
            }
            currentNumber = arr[i];
            currentFrequency = 1;
        }
    }
    var timeWord = "";
    if (bestFrequency == 1) {
        timeWord = " time";
    } else {
        timeWord = " times";
    }

    document.getElementById('result').innerHTML = "Number: " + mostNumber + "<br /> Frequency: " + bestFrequency + timeWord;
}