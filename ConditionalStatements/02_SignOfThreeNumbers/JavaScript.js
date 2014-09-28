function findSign() {
    var firstInt = document.getElementById('first').value;
    var secondInt = document.getElementById('second').value;
    var thirdInt = document.getElementById('third').value;

    var arr = [firstInt, secondInt, thirdInt];
    var minusCount = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] == "-") {
            minusCount++;
        }
    }

    if (minusCount % 2 == 1) {
        document.getElementById('result').innerHTML = "The sign of the product is:  <span style='font-weight:bold'>-</span>";
    } else {
        document.getElementById('result').innerHTML = "The sign of the product is:  <span style='font-weight:bold'>+</span>";
    }
    
}