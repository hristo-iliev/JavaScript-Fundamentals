function main() {
    var html = document.getElementById("text").value;

    var result = "";
    if (html === "") {
        result = replaceURL(replaceBrackets(document.getElementById("example").innerHTML));
    } else {
        result = replaceURL(html);
    }
    console.log(result);
    document.getElementById("result").innerHTML = result;
}

function replaceURL(text) {
    var startIndex = 0;
    var endIndex = 0;
    var len = 0;
    var sub = "";
    var newSub = "";

    for (var i = 0; i < text.length; i++) {
        if(text[i] == "<") {
            if (text[i + 1] == "a") {
                startIndex = i;
                for (var j = i; j < text.length; j++) {
                    if (text[j] == ">") {
                        if (text[j - 1] == "a") {
                            endIndex = j;
                            break;
                        }
                    }
                }
                len = endIndex - startIndex + 1;
                sub = text.substr(startIndex, len);
                newSub = sub.replace('<a href="', "[URL=");
                newSub = newSub.replace('</a>', "[/URL]");
                newSub = newSub.replace('>', "]");
                text = text.replace(sub, newSub);

            }
        }
    }
    return text;
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