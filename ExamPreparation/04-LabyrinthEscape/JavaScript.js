function Solve(args) {
    
    var rowCol = args[0].split(" ").map(Number);
    var field = [];
    var counter = 1;
    for (var i = 0; i < rowCol[0]; i++) {
        field[i] = [];
        for (var j = 0; j < rowCol[1]; j++) {
            field[i][j] = counter++;
        }
    }

    var textField = [];
    var commands = [];
    for (var k = 2; k < args.length; k++) {
        commands.push(args[k]);
    }

    for (var m = 0; m < commands.length; m++) {
        textField[m] = [];
        for (var l = 0; l < commands[m].length; l++) {
            textField[m][l] = commands[m][l];
        }
    }
    // START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var sum = 0;
    var step = 0;
    var currentPosition = [];

    var position = args[1].split(" ").map(Number);
    sum += field[position[0]][position[1]];
    
    
    while (true) {
        //From (R, C) go l => (R, C-1)
        //From (R, C) go r => (R, C+1)
        //From (R, C) go u => (R-1, C)
        //From (R, C) go d => (R+1, C)

        switch (textField[position[0]][position[1]]) {
            case 'l': textField[position[0]][position[1]] = 'x'; position[1]--; break;
            case 'r': textField[position[0]][position[1]] = 'x'; position[1]++; break;
            case 'u': textField[position[0]][position[1]] = 'x'; position[0]--; break;
            case 'd': textField[position[0]][position[1]] = 'x'; position[0]++; break;
            default: return "lost " + step;

        }
        step++;
        if (position[0] >= field.length || position[1] >= field[0].length || position[0] < 0 || position[1] < 0) {
            return "out " + sum;

        }
        

        sum += field[position[0]][position[1]];
        
    }

}

args = [
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "durlddud",
 "urrrldud",
 "ulllllll"];

Solve(args);
