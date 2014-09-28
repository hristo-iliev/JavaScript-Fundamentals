function main() {
    var url = document.getElementById("url").value;
    var urlObject = createObject(url);
    document.getElementById('result').innerHTML = "The object has this properties: <br />" + urlObject.toString();
}

function createObject(str) {
    var protocol = "";
    var server = "";
    var resource = "";
    var i = 0;
    while (str[i] != ":") {
        protocol += str[i];
        i++;
    }
    i += 3;
    while (str[i] != "/") {
        server += str[i];
        i++;
    }
    for (; i < str.length; i++) {
        resource += str[i];
    }

    return {
        protocol: protocol,
        server: server,
        resource: resource,
        toString: function () {
            return "<b>protocol:</b> " + this.protocol +
                   "<br /><b>server:</b> " + this.server +
                   "<br /><b>resource:</b> " + this.resource;
        }
    };

}