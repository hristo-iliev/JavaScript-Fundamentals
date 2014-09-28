function binarySearch() {
    var numbersString = document.getElementById('array').value;
    var key = parseInt(document.getElementById('key').value);
    var arr = numbersString.split(" ");
    var numbers = [];
    //parsing the input numbers
    for (var num in arr) {
        numbers.push(parseInt(arr[num]));
    }

    arr = selectionSort(numbers);
    
    //Binary Search Algorithm
    var result = "Value not found!";
    var min = 0;
    var max = arr.length - 1;
    var midPoint;
    while (max >= min) {
        midPoint = Math.floor(max + min / 2);

        if (arr[midPoint] === key) {
            result = midPoint;
            break;
        } else if (arr[midPoint] < key) {
            min = midPoint + 1;
        } else {
            max = midPoint - 1;
        }
    }
    
    document.getElementById('result').innerHTML =  "Sorted array: " + arr.join(", ") + "<br />Index: " + result;
}

function selectionSort(array) {
    //Selection Sort Algorithm
    var minIndex;

    for (var i = 0; i < array.length - 1; i++) {
        minIndex = i;

        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            var b = array[i];
            array[i] = array[minIndex];
            array[minIndex] = b;
        }
    }

    return array;
}