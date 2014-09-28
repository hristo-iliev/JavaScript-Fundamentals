function compareLexicopraohically() {
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;

    var arr = [];
    arr.push(first);
    arr.push(second);
    arr.sort();
          
    document.getElementById('result').innerHTML = '"' + arr[0] + '" comes first lexicographically! <br /> "' +
                                                arr[1] + '" comes second!';
}