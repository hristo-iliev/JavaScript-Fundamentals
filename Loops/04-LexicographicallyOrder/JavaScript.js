function showSmallestAndLargestPropertie() {
    var documentProperties = getSortedProperties(document);
    var windowProperties = getSortedProperties(window);
    var navigatorProperties = getSortedProperties(navigator);
        
    document.getElementById('result').innerHTML =
        "<b>document:</b> <br />" + "Smallest Propertie: " + "<b>" + documentProperties[0] + "</b>" + "<br />Largest Propertie: " +
       "<b>" + documentProperties[documentProperties.length - 1] + "</b>";

    document.getElementById('result').innerHTML +=
        "<br/><br /><b>window:</b> <br />" + "Smallest Propertie: " + "<b>" + windowProperties[0] + "</b>" + "<br />Largest Propertie: " +
       "<b>" + windowProperties[windowProperties.length - 1] + "</b>";

    document.getElementById('result').innerHTML +=
       "<br/><br /><b>navigator:</b> <br />" + "Smallest Propertie: " + "<b>" + navigatorProperties[0] + "</b>" + "<br />Largest Propertie: " +
       "<b>" + navigatorProperties[navigatorProperties.length - 1] + "</b>";
 }

function getSortedProperties(obj) {
    var objProperties = [];

    for (var propertie in obj) {
        objProperties.push(propertie);
    }

    return objProperties.sort();
}