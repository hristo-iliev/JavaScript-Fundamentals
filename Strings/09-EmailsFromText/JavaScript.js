function main() {
    var text = document.getElementById('text').value;

    var emailArray = extractEmails(text);
    document.getElementById('result').innerHTML = emailArray.join("<br />");
}

function extractEmails(text) {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}