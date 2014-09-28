function IsPrime() {
    var num = parseInt(document.getElementById('number').value);
    var isPrime = true;

    if (num <= 3) {
        if (num <= 1) {
            isPrime = false;
        }
        isPrime = true;
    } else if (num % 2 === 0 || num % 3 === 0) {
        isPrime = false;
    } else {
        var i = 5;
        var w = 2;
        while (i * i <= num) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
            i += w;
            w = 6 - w;
            isPrime = true;
        }
    }
        
    document.getElementById('result').innerHTML = isPrime;
}