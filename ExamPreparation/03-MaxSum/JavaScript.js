function Solve(params) {
    params = params.map(Number);
    params.splice(0, 1);
      
    var max_so_far = 0;
    var max_ending_here = 0;
    var i;
    for (i = 0; i < params.length; i++)
    {
        max_ending_here = max_ending_here + params[i];
        if (max_ending_here < 0) {
            max_ending_here = 0;
        }
            
        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
        }
            
    }
    if (max_so_far === 0) {
        params = params.sort(function (a, b) { return a - b; });
        return params[params.length - 1];
    }
    
    return max_so_far;
}

var arr = [
    "6",
"1",
"3",
"-5",
"8",
"7",
"-6"

];

var arr2 = [
20,
'-1867694',
'1968105',
'1759381',
'1243976',
'-1038741',
'791044',
'1024747',
'250484',
'693515',
'-1364378',
'1015720',
'805332',
'1995499',
'1595482',
'-1661341',
'-1775591',
'-698357',
'-1285748',
'1826697',
'1544340'

];

//Solve(arr);
Solve(arr2);