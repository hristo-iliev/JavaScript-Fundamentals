function Solve(args) {
    var final = 0;
    var functions = [];

    for (var i = 0; i < args.length; i++) {
    var input = "";
    input = args[i].trim();
    final = myfunction(input, functions);
    
    if (final == "Division by zero! At Line:" + (i + 1)) {
        //console.log("final = " + final);
        return final;
    }
    //console.log("final = " + final);
    function myfunction(input, functions) {
        var operator = "";
        var number = "";
        var result = 0;
        var numbers = [];


        for (var j = 1; j < input.length; j++) {

            if (input[j] === " ") {
                continue;
            } else if (input[j] == "+") {
                operator = "+";
                continue;
            } else if (input[j] == "-") {
                if (input[j + 1] == parseInt(input[j + 1])) {
                    number += input[j];
                } else {
                    operator = "-";
                }
                continue;
            } else if (input[j] == "(") {
                var str = "";
                while (input[j] !== ")") {
                    
                    str += input[j];
                    j++;
                }
                str += input[j];
                var cur = myfunction(str, functions);
                if (cur == "Division by zero! At Line:" + (i + 1)) {
                    return cur;
                }
                numbers.push(cur);
                
            } else if (input[j] == "*") {
                operator = "*";
                continue;
            } else if (input[j] == "/") {
                operator = "/";
                continue;
            } else if (input[j] == Number(input[j])) {
                while (input[j] == parseInt(input[j])) {
                    number += input[j];
                    j++;
                }
                j--;
                numbers.push(parseInt(number));
                number = "";
            } else if (input[j] == ")") {
                if (numbers.length == 1) {
                    return result = numbers[0];
                } else {
                    result = calculateResult(operator, numbers);
                    if (result == "error") {
                        return result = "Division by zero! At Line:" + (i + 1);
                    }
                    return result;
                }
                //console.log(result);
            } else if (input[j] == "d") {
                if (input[j+3] == " ") {
                    var name = "";
                    j += 4;
                    while (input[j] == " ") {
                        j++;
                    }
                    
                    while (input[j] !== " ") {
                        name += input[j];
                        j++;
                    }
                    while (input[j] == " ") {
                        j++;
                    }
                    
                    var num = "";
                    // IF-AT
                    if (input[j] == "(") {
                        var strr = "";
                        while (input[j] !== ")") {

                            strr += input[j];
                            j++;
                        }
                        strr += input[j];
                        var curr = myfunction(strr, functions);
                        if (curr == "Division by zero! At Line:" + (i + 1)) {
                            return curr;
                        }
                        num = curr;
                        //numbers.push(curr);
                    } else if (input[j] == parseInt(input[j])) {
                        while (input[j] !== " " && input[j] !== ")") {
                            num += input[j];
                            j++;
                        }
                    } else {
                        var tt = "";
                        while (input[j] !== " " && input[j] !== ")") {
                            tt += input[j];
                            j++;
                        }
                        num = functions[tt];
                    }
                    
                    
                    functions[name] = parseInt(num);
                }
            } else {
                var izvStr = "";
                while (input[j] !== " " && input[j] !== ")") {
                    izvStr += input[j];
                    j++;
                }

                if (functions[izvStr]) {
                    numbers.push(functions[izvStr]);
                }

                if (input[j] == ")" && j == input.length - 1) {
                    j--;
                }
                


            }


        }
    }
    }
    //console.log("LAST!!!!!! = " + final);
    return final;
    
    function calculateResult(operator, arr) {
        var res = arr[0];
        for (var i = 1; i < arr.length; i++) {
            switch (operator) {
                case "+": res += arr[i]; break;
                case "-": res -= arr[i]; break;
                case "*": res *= arr[i]; break;
                case "/": if (arr[i] === 0) {
                    return "error";
                } res /= arr[i];
                res = parseInt(res);
                break;
            }
        }

        return res;
    }
}

function MY() {
    var arr = [
"(+ 1 2) ",
"(+ 3 (+ 5 4) 1)",
  "(* 5 (/ 3 0)  -7) ",
" (/ 10 3 2)",
"(/ 5 0)",

    ];

    var x = [
        "(def func 10)",
"(def newFunc (+  func 2))",

"(def sumFunc (+ func func newFunc 0 0 0))",
    "(* func 2)"

    ];

    var test = [
       "(def     lube    5)",
"(def     Lube    6)",
"(def pe6o (+ lube Lube ))",
"(def joro pe6o)",
"(           *        pe6o        joro     )"
    ];

    Solve(test);

}
