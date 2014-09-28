function FindMaxAndMin() {
    var nums = document.getElementById('numbers').value.trim().split(' ');
    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        arr.push(parseInt(nums[i]));
    }

    var result = arr.sort(orderBy);
    
    document.getElementById('result').innerHTML = "Min: " + result[0] + "<br />" + "Max: " + result[result.length - 1];
}

function orderBy(a, b) {
    return (a == b) ? 0 : (a > b) ? 1 : -1;
}