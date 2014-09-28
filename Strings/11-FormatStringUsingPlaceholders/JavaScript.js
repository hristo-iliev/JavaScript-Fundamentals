function main() {
    
    var text = stringFormat('Hello {0} {1} {2} {0} {0} {0} {0} {0} {0}!', 'Peter', 'Gosho', 'Kiro');
    console.log('var text = stringFormat("Az sym {0} {1} {0} Hubaviq! Mai {2} e {3}, az sym {4}", "Pesho", "Ivanov", "ne mi", "losho", 6 );');
    console.log(text);
}

function stringFormat() {
    var items = arguments;
    
    while (true) {
        for (var i = 1; i < items.length; i++) {
            items[0] = items[0].replace(("{" + (i - 1) + "}"), items[i]);
        }
        if (items[0].indexOf("{") < 0) {
            break;
        }
    }
    
    return items[0];
}