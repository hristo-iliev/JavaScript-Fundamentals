function main() {
    var property = document.getElementById('property').value;
    
    var isThereSuchPropertie = propertyFound(document, property);
    document.getElementById('result').innerHTML = "Propery Found: <p style='text-transform:uppercase;'><b>" + isThereSuchPropertie + "</b></p>";
}

function propertyFound(obj, name) {
    for (var prop in obj) {
        if (prop == name) {
            return true;
        }
    }
    return false;
}
