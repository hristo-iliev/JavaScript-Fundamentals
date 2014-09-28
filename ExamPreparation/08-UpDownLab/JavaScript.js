function Solve(args) {
    var input = args[0].split(" ").map(Number);
    //console.log(input);
    var field = [];
    var textFiled = [];
    for (var i = 0; i < input[0]; i++) {
        var counter = Math.pow(2, i);
        field[i] = [];
        for (var j = 0; j < input[1]; j++) {
            field[i][j] = counter++;
        }
    }
    for (var m = 1; m < args.length; m++) {
        textFiled[m - 1] = args[m].split(" "); 
    }

    var sum = field[0][0];
    var row = 0;
    var col = 0;
    while (true) {
        if (row >= field.length || row < 0 || col >= field[0].length || col < 0) {
            return "successed with " + sum;
        } else if (field[row][col] == 'x') {
            return "failed at (" + row + ", " + col + ")";
        }
        
        //  "dr" stands for "down-right" direction
        // "ur" stands for "up-right" direction
        // "ul" stands for "up-left" direction
        // "dl" stands for "down-left" direction

        switch (textFiled[row][col]) {
            case "dr": field[row][col] = "x"; row++; col++; break;
            case "ur": field[row][col] = "x"; row--; col++; break;
            case "ul": field[row][col] = "x"; row--; col--; break;
            case "dl": field[row][col] = "x"; row++; col--; break;

        }
        
        if (row < field.length && row >= 0 && col < field[0].length && col >= 0) {
            sum += field[row][col];
        }
        
    }
    
}

var args = [
'3 5',
'dr dl dl ur ul',
'dr dr ul ul ur',
'dl dr ur dl ur'
];

console.log(Solve(args));