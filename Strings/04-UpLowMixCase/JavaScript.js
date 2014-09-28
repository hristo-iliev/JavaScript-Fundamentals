function main() {
    var text = document.getElementById("text").value;

    var result = "";
    if (text === "") {
        result = doCaseMagic(replaceBrackets(document.getElementById("example").innerHTML));
    } else {
        result = doCaseMagic(text);
    }

    document.getElementById("result").innerHTML = result;
}

function doCaseMagic(text) {
    var startIndex = 0;
    var endIndex = 0;
    var changeText = "";
    var symbol;
    
    for (var i = 0; i < text.length; i++) {
        symbol = text[i];
        if (text[i] == "<") {
            switch (text[i + 1]) {
                case "u":
                    startIndex = i + 8;
                    i = startIndex;
                    for (; i < text.length; i++) {
                        if (text[i] == "<") {
                            endIndex = i;
                            break;
                        }
                    }
                    changeText = text.substr(startIndex, (endIndex - startIndex)).toUpperCase();
                    text = text.replace(text.substr(startIndex, (endIndex - startIndex)), changeText);
                    break;
                case "l":
                    startIndex = i + 8;
                    i = startIndex;
                    for (; i < text.length; i++) {
                        if (text[i] == "<") {
                            endIndex = i;
                            break;
                        }
                    }
                    changeText = text.substr(startIndex, (endIndex - startIndex)).toLowerCase();
                    text = text.replace(text.substr(startIndex, (endIndex - startIndex)), changeText);
                    break;
                case "m":
                    startIndex = i + 9;
                    i = startIndex;
                    for (; i < text.length; i++) {
                        if (text[i] == "<") {
                            endIndex = i;
                            break;
                        }
                    }
                    var textToMix = text.substr(startIndex, (endIndex - startIndex));
                    changeText = mixCase(textToMix);
                    text = text.replace(text.substr(startIndex, (endIndex - startIndex)), changeText);
                    break;
                    }
                                      

            }
        }
    return text;
}

function mixCase(str) {
    var mix = "";
    for (var i = 0; i < str.length; i++) {
        if (Math.floor((Math.random() * 100) + 1) % 2 === 0) {
            mix += str[i].toLowerCase();
        } else {
            mix += str[i].toUpperCase();
        }
    }
    return mix;
}

function replaceBrackets(text) {
    while (true) {
        if (text.indexOf("&lt;") === -1 && text.indexOf("&gt;") === -1) {
            break;
        } else {
            text = text.replace("&lt;", "<");
            text = text.replace("&gt;", ">");
        }
    }
    return text;
}