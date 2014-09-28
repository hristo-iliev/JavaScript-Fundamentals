function biggestNumber() {
    var firstInt = document.getElementById('first').value;
    var secondInt = document.getElementById('second').value;
    var thirdInt = document.getElementById('third').value;

    if (firstInt == secondInt && secondInt == thirdInt) {
        document.getElementById('result').innerHTML = "The numbers are equal.";
    } else if (firstInt > secondInt) {
        if (firstInt > thirdInt) {
            document.getElementById('result').innerHTML = "The First number ist the biggest.";
        } else if (firstInt == thirdInt) {
            document.getElementById('result').innerHTML = "The First and The Third numbers are ist the biggest.";
        } else {
            document.getElementById('result').innerHTML = "The Third number ist the biggest.";
        }
    } else if (firstInt == secondInt) {
        if (firstInt > thirdInt) {
            document.getElementById('result').innerHTML = "The First and The Second numbers are the biggest.";
        } else {
            document.getElementById('result').innerHTML = "The Third number ist the biggest.";
        }
    } else if (secondInt > firstInt) {
        if (secondInt > thirdInt) {
            document.getElementById('result').innerHTML = "The Second number ist the biggest.";
        } else if (secondInt == thirdInt) {
            document.getElementById('result').innerHTML = "The Second and The Third numbers are the biggest.";
        } else {
            document.getElementById('result').innerHTML = "The Third number ist the biggest.";
        }
    } 
}