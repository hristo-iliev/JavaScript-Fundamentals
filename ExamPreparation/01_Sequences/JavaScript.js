function Solve(params) {
    //params = params.map(Number)
    var count = 1;
    for (var i = 2; i < params.length; i++) {
        if (parseInt(params[i]) < parseInt(params[i - 1])) {
            count++;
        }
    }
    return count;
}

var arr = ["1", "3", "-5", "8", "7", "-6"];
Solve(arr);