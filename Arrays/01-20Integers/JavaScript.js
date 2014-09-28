function allocateArray() {
    var arr = new Array(20);

    for (var i = 0; i < arr.length; i++) {
        arr[i] = i * 5;
    }

    document.getElementById("result").innerHTML = arr.join(", ");
    console.log(arr.join(", "));
}