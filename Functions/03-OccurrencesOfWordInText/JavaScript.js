function main() {
    var textInput = document.getElementById("text").value;
    var wordInput = document.getElementById("word").value;
    var caseSensitive = document.getElementById("case-sensitive").checked;
    
    var result = findOccurence(textInput, wordInput, caseSensitive);

    document.getElementById('result').innerHTML = result;
}

function findOccurence(textInput, wordInput, isCaseSensitive ) {
    function caseSensitive() {
        var text = textInput.toLowerCase();
        var word = wordInput.toLowerCase();

        var textArr = text.split(" ");
        var count = 0;
        for (var i = 0; i < textArr.length; i++) {
            if (textArr[i] == word ||
                textArr[i] == word + "," ||
                textArr[i] == word + "." ||
                textArr[i] == word + "!" ||
                textArr[i] == word + "?" ||
                textArr[i] == word + ":" ||
                textArr[i] == word + ")" ||
                textArr[i] == '"' + word + '"') {
                count++;
            }
        }
        return "Occurence: " + count;
    }
    
    function caseInsensitive() {
        var text = textInput;
        var word = wordInput;

        var textArr = text.split(" ");
        var count = 0;
        for (var i = 0; i < textArr.length; i++) {
            if (textArr[i] == word ||
                textArr[i] == word + "," ||
                textArr[i] == word + "." ||
                textArr[i] == word + "!" ||
                textArr[i] == word + "?" ||
                textArr[i] == word + ":" ||
                textArr[i] == word + ")" ||
                textArr[i] == '"' + word + '"') {
                count++;
            }
        }
        return "Occurence: " + count;
    }

    switch (isCaseSensitive) {
        case true: return caseSensitive();
        case false: return caseInsensitive();

    }
    
}