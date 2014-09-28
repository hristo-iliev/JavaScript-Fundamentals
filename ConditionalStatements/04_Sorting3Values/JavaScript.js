function sortDescending() {
    var firstInt = document.getElementById('first').value;
    var secondInt = document.getElementById('second').value;
    var thirdInt = document.getElementById('third').value;

    if (firstInt >= secondInt && firstInt >= thirdInt) {
        if (secondInt >= thirdInt) {
            document.getElementById('result').innerHTML = firstInt + ", " + secondInt + ", " + thirdInt;
        } else {
            document.getElementById('result').innerHTML = firstInt + ", " + thirdInt + ", " + secondInt;
        }
    } else if (secondInt >= firstInt && secondInt >= thirdInt) {
        if (firstInt >= thirdInt) {
            document.getElementById('result').innerHTML = secondInt + ", " + firstInt + ", " + thirdInt;
        } else {
            document.getElementById('result').innerHTML = secondInt + ", " + thirdInt + ", " + firstInt;
        }
    } else if (thirdInt >= firstInt && thirdInt >= thirdInt) {
        if (firstInt >= secondInt) {
            document.getElementById('result').innerHTML = thirdInt + ", " + firstInt + ", " + secondInt;
        } else {
            document.getElementById('result').innerHTML = thirdInt + ", " + secondInt + ", " + firstInt;
        }
    }
}