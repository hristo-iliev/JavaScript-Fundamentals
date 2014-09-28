function main() {
    var text = (document.getElementById("text").value).toLowerCase();
    var substring = (document.getElementById("substring").value).toLowerCase();
    
    var count = 0;
    var index = 0;
    while (true) {
        index = text.indexOf(substring, index);
        if (index > -1) {
            count++;
            index++;
        } else {
            break;
        }
    }

    document.getElementById("result").innerHTML = "The result is: <b>" + count + "</b>";
}