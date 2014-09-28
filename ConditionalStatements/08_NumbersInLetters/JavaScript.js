function numberInLetters() {
    var num = parseInt(document.getElementById('number').value);
    var result = "";

    if (num === 0) {
        result += "zero";
    } else {
        if (num / 100 >= 1) {

            switch (Math.floor(num / 100)) {
                case 1: result += "one hundred"; break;
                case 2: result += "two hundred"; break;
                case 3: result += "three hundred"; break;
                case 4: result += "four hundred"; break;
                case 5: result += "five hundred"; break;
                case 6: result += "six hundred"; break;
                case 7: result += "seven hundred"; break;
                case 8: result += "eight hundred"; break;
                case 9: result += "nine hundred "; break;
                default: result += "Invalid Input!"; break;
            }
            num %= 100;

            if (num !== 0) {
                result += " and ";
            }
        }

        if (num / 10 >= 1) {

            switch (Math.floor(num / 10)) {
                case 1:
                    switch (num) {
                        case 10: result += "ten"; break;
                        case 11: result += "eleven"; break;
                        case 12: result += "twelve"; break;
                        case 13: result += "thirteen"; break;
                        case 14: result += "fourteen"; break;
                        case 15: result += "fifteen"; break;
                        case 16: result += "sixteen"; break;
                        case 17: result += "seventeen"; break;
                        case 18: result += "eighteen"; break;
                        case 19: result += "nineteen"; break;
                    }
                    num = NaN;
                    break;
                case 2: result += "twenty "; break;
                case 3: result += "thirty "; break;
                case 4: result += "fourty "; break;
                case 5: result += "fifty "; break;
                case 6: result += "sixty "; break;
                case 7: result += "seventy "; break;
                case 8: result += "eighty "; break;
                case 9: result += "ninety "; break;
                default: result += "Invalid Input!"; break;
            }
            num %= 10;
        }

        switch (num) {
            case 1: result += "one"; break;
            case 2: result += "two"; break;
            case 3: result += "three"; break;
            case 4: result += "four"; break;
            case 5: result += "five"; break;
            case 6: result += "six"; break;
            case 7: result += "seven"; break;
            case 8: result += "eight"; break;
            case 9: result += "nine"; break;
        }
    }

    var numberWithLetters = capitaliseFirstLetter(result);

    document.getElementById('result').innerHTML = numberWithLetters;
 }

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}