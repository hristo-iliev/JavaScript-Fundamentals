function checkIfBigger(arr, index) {
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
        return index;
    } else {
        return -1;
    }

    
}

function findBigger() {
    var numbers = document.getElementById("array").value.trim().split(" ");
    var arr = [];
    for (var indx in numbers) {
        arr.push(parseInt(numbers[indx]));
    }
    var indexOfBiggestElement = 0;
    for (var i = 0; i < arr.length; i++) {
        indexOfBiggestElement = checkIfBigger(arr, i);
        if (indexOfBiggestElement != -1) {
            break;
        }
    }

    var result = "There is no such element! =(";
    if (indexOfBiggestElement != -1) {
        result = "The index of the first element in array that is bigger than its neighbors is: <b>" + indexOfBiggestElement + "</b>";
    }

    document.getElementById('result').innerHTML = result;
}