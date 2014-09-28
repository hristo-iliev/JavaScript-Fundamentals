function Solve(args) {
    var n = parseInt(args[0]);
    var gN = 3;
    var given = [3, 4, 10];
    var mp = [n + 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var count = 0;

    function devNum(n, pos) {
        var k = 0;
        var p = 0;
        for (p =  gN; p > 0; p--) {
            k = given[p - 1];
            if (n > k) {
                mp[pos] = k;
                if (mp[pos] <= mp[pos - 1]) {
                    devNum(n - k, pos + 1);
                }
            } else if (n == k) {
                mp[pos] = k;
                if (mp[pos] <= mp[pos - 1]) {
                    count++;
                }
                
            }
        }

    }
    devNum(n, 1);

    console.log(count);

}

arr = [
   "7"
];

console.log(Solve(arr));