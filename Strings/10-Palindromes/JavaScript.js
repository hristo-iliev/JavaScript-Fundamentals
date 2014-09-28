function main() {
    var text = ((document.getElementById('text').value).replace(/[\.,-\/#!$%\^&\*;:"{}=\-_`~()]/g, "")).split(" ");

    var palindromesArray = checkPalindroms(text);
    document.getElementById('result').innerHTML = palindromesArray.join("<br />");
}

function checkPalindroms(array) {
    var arr = [];
    for (var word in array) {
        if (array[word] == array[word].split('').reverse().join('') && array[word].length > 1) {
            arr.push(array[word]);
        }
    }
    return arr;
}