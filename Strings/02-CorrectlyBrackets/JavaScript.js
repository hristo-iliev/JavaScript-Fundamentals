function main() {
    var exp = document.getElementById("expression").value;
    
    var openedBrackets = 0;
    var correntExpression = true;
    for (var i = 0; i < exp.length; i++) {
        if (exp[i] == "(") {
            openedBrackets++;
        } else if (exp[i] == ")") {
            openedBrackets--;
        }

        if (openedBrackets < 0) {
            break;
        }
    }

    if (openedBrackets !== 0) {
        correntExpression = false;
    }

    document.getElementById("result").innerHTML = "Is the expression correct: <b>" + correntExpression + "</b>";
}