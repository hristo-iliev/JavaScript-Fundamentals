function biggestNumber() {
    var firstInt = document.getElementById('first').value;
    var secondInt = document.getElementById('second').value;
    var thirdInt = document.getElementById('third').value;
    var fourthInt = document.getElementById('fourth').value;
    var fifthInt = document.getElementById('fifth').value;
    
    var arr = [firstInt, secondInt, thirdInt, fourthInt, fifthInt];
    arr.sort();

    document.getElementById('result').innerHTML = "The Biggest number is: " + arr[4];
}