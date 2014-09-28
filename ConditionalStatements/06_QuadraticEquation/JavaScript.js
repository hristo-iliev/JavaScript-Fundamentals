function findRealRoots() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var result;

    if (a === 0 ) {
        result = "Invalid Equation: 'a' must have non 0 value!";
    } else {
        //D = b2 – 4ac
        var d = Math.pow(b, 2) - (4 * a * c);

        if (d < 0) {
            result = "The Equation doesn't have real roots!";
        } else if (d === 0) {
            //x = -b/2a
            result = "The Equation have one real root: " + ( -b / (2 * a));
        } else {
            var x1 = ( -b + Math.sqrt(d)) / (2 * a);
            var x2 = ( -b - Math.sqrt(d)) / (2 * a);

            result = "The Equation have two real roots: <br />x1 = " + x1 + "<br />x2 = " + x2;
        }
    }

    document.getElementById('result').innerHTML = result;

}