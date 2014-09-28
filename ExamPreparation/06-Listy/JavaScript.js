function Solve(args) {
    var functions = [];
    for (var k = 0; k < args.length; k++) {
        var input = args[k].trim();

        for (var i = 0; i < input.length; i++) {
            if (input.substr(i, 4) == "def ") {
                i += 4;
                while (input[i] == " ") {
                    i++;
                }
                // function name
                var name = "";
                while (input[i] !== " " && input[i] !== "[") {
                    name += input[i];
                    i++;
                }
                while (input[i] == " ") {
                    i++;
                }
                var value = "";
                var operator = "";
                // Diferent Cases
                if (input[i] == "[") {
                    i++;
                    while (input[i] !== "]") {
                        
                        while (input[i] == " ") {
                            i++;
                        }
                        if (input[i] == "]") {
                            break;
                        }
                        value += input[i];
                        i++;
                    }
                    operator = "none";
                                     
                } else {
                    if (input.substr(i, 3) == "min") {
                        operator = "min";
                    } else if (input.substr(i, 3) == "max") {
                        operator = "max";
                    } else if (input.substr(i, 3) == "avg") {
                        operator = "avg";
                    } else if (input.substr(i, 3) == "sum") {
                        operator = "sum";
                    }
                    
                    i += 3;
                    while (input[i] !== "[") {
                        i++;
                    }
                    i++;
                    while (input[i] !== "]") {
                        while (input[i] == " ") {
                            i++;
                        }
                        if (input[i] == "]") {
                            break;
                        }
                        value += input[i];
                        i++;
                    }
                }

                functions[name] = calculateFuncValue(operator, value);

            } else if (input[i] == "[") {
                var final = "";
                i++;
                while (input[i] !== "]") {
                    while (input[i] == " ") {
                        i++;
                    }
                    if (input[i] == "]") {
                        break;
                    }
                    final += input[i];
                    i++;
                }
                var x = calculateFuncValue("none", final);
                if (typeof(x) == "number") {
                    return x;
                }
                return x[0];
            } else {
                
                    var opr = "";
                while (input[i] !== "[" && input[i] !== " ") {
                    while (input[i] == " ") {
                        i++;
                    }
                    opr += input[i];
                    i++;
                }
                var final2 = "";
                i++;
                while (input[i] !== "]") {
                    while (input[i] == " ") {
                        i++;
                    }
                    if (input[i] == "]") {
                        break;
                    }
                    final2 += input[i];
                    i++;
                }
                var res = calculateFuncValue(opr, final2);
                if (typeof(res) == "number") {
                    return res;
                }
                return res[0];
                
            }
        }
    }

    function calculateFuncValue(operator, str) {
        var arr = str.split(",");
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            var item = parseInt(arr[i]);
            if (isNaN(item)) {
                if (typeof (functions[arr[i]]) === "number") {
                    newArr.push(functions[arr[i]]);
                } else {
                    for (var it = 0; it < functions[arr[i]].length; it++) {
                        //Napravi proverka
                        newArr.push(functions[arr[i]][it]);

                    }
                }
                
            } else {
                newArr.push(item);
            }
        }
        switch (operator) {
            case "none":
                return newArr;
            case "sum":
                var sum = 0;
                for (var m = 0; m < newArr.length; m++) {
                    sum += newArr[m];
                }
                return sum;
            case "avg":
                var sum2 = 0;
                for (var mm = 0; mm < newArr.length; mm++) {
                    sum2 += newArr[mm];
                }
                sum2 /= newArr.length;
                return parseInt(sum2);
            case "min":
                newArr = newArr.sort(function (a, b) { return a - b; });
                return newArr[0];
            case "max":
                newArr = newArr.sort(function (a, b) { return a - b; });
                return newArr[newArr.length - 1];
        }
    }
}
function MY() {
    var arr = [
        'def func sum[1, 2, 3, -6]',
    'def newList [func, 10, 1]',
    'def newFunc sum[func, 100, newList]',
    '[newFunc]'

    ];

    var arr2 = [
        'def func sum[5, 3, 7, 2, 6, 3]',
        'def func2 [5, 3, 7, 2, 6, 3]',
        'def func3 min[func2]',
        'def func4 max[5, 3, 7, 2, 6, 3]',
        'def func5 avg[5, 3, 7, 2, 6, 3]',
        'def func6 sum[func2, func3, func4 ]',
        'sum[func6, func4]'

    ];

    var x = Solve(arr2);
}
