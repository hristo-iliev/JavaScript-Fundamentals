function main() {
    var html = document.documentElement.innerHTML;
    console.log(html);
    html = removeTags(html);
    document.getElementById("result").innerHTML = "<h2>This is the HTML content</h2>" + html;
    console.log(html);
}

function removeTags(html) {
    var startIndex = 0;
    var endIndex = 0;
    var len = 0;

    for (var i = 0; i < html.length; i++) {
        if (html[i] == "<") {
            startIndex = i;
            for (var j = i; j < html.length; j++) {
                if (html[j] == ">") {
                    endIndex = j;
                    len = endIndex - startIndex + 1;
                    html = html.replace(html.substr(startIndex, len), "");
                    
                    break;
                }
            }
            i--;
        }
    }
    return html;
}