function main() {
    // First line coordinates
    var first_p1_x = parseFloat(document.getElementById("first-p1-x").value);
    var first_p1_y = parseFloat(document.getElementById("first-p1-y").value);
    var first_p2_x = parseFloat(document.getElementById("first-p2-x").value);
    var first_p2_y = parseFloat(document.getElementById("first-p2-y").value);
    // Second line coordinates
    var second_p1_x = parseFloat(document.getElementById("second-p1-x").value);
    var second_p1_y = parseFloat(document.getElementById("second-p1-y").value);
    var second_p2_x = parseFloat(document.getElementById("second-p2-x").value);
    var second_p2_y = parseFloat(document.getElementById("second-p2-y").value);
    // Third line coordinates
    var third_p1_x = parseFloat(document.getElementById("third-p1-x").value);
    var third_p1_y = parseFloat(document.getElementById("third-p1-y").value);
    var third_p2_x = parseFloat(document.getElementById("third-p2-x").value);
    var third_p2_y = parseFloat(document.getElementById("third-p2-y").value);
    
    var first_p1 = createPoint(first_p1_x, first_p1_y);
    var first_p2 = createPoint(first_p2_x, first_p2_y);
    var firstLine = createLine(first_p1, first_p2);

    var second_p1 = createPoint(second_p1_x, second_p1_y);
    var second_p2 = createPoint(second_p2_x, second_p2_y);
    var secondLine = createLine(second_p1, second_p2);

    var third_p1 = createPoint(third_p1_x, third_p1_y);
    var third_p2 = createPoint(third_p2_x, third_p2_y);
    var thirdLine = createLine(third_p1, third_p2);

    var triangle = isTrianglePosible(firstLine, secondLine, thirdLine);

    document.getElementById('result').innerHTML = "First Line Length: <b>" + firstLine.getDistance() +
                                                  "</b><br />Second Line Length: <b>" + secondLine.getDistance() +
                                                  "</b><br />Third Line Lenght: <b>" + thirdLine.getDistance() +
                                                  "</b><br /><p>Is Triangle Posible: <b>" + triangle + "</b></p>";

}

function createLine(point1, point2) {
    return {
        p1: point1,
        p2: point2,
        getDistance: function () {
            return Math.sqrt(Math.pow((this.p2.x - this.p1.x), 2) + Math.pow((this.p2.y - this.p1.y), 2));
        }
    };
}

function createPoint(x, y) {
    return {
        x: x || 0,
        y: y || 0
    };
}

function isTrianglePosible(line1, line2, line3) {
    if (line1 === 0 || line2 === 0 || line3 === 0) {
        return false;
    }
    var linesArray = [line1.getDistance(), line2.getDistance(), line3.getDistance()];
    linesArray = linesArray.sort(function (a, b) { return a - b; });
    var isPosible = false;

    if (linesArray[0] + linesArray[1] >= linesArray[2]) {
        isPosible = true;
    }

    return isPosible;
}
