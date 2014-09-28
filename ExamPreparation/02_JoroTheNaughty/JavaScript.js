function Solve(params) {

    var rowColJump = params[0].split(" ").map(Number);
    var field = [];
    var counter = 1;
    for (var i = 0; i < rowColJump[0]; i++) {
        field[i] = [];
        for (var j = 0; j < rowColJump[1]; j++) {
            field[i][j] = counter++;
        }
    }
    var sum = 0;
    var jumps = 0;
    var currentPosition = [];

    var position = params[1].split(" ").map(Number);
    sum += field[position[0]][position[1]];
    var positions = [];
    for (var l = 2; l < params.length; l++) {
        positions.push(pos(params[l].split(" ").map(Number)));
    }
    for (var k = 0; k < positions.length; k++) {
        
        position[0] += positions[k].row;
        position[1] += positions[k].col;

        if (position[0] >= field.length || position[1] >= field[0].length || position[0] < 0 || position[1] < 0) {
            return "escaped " + sum;
            
        }
        if (field[position[0]][position[1]] == 'x') {
            return "caught " + jumps;
            
        }

        jumps++;
        sum += field[position[0]][position[1]];
        field[position[0]][position[1]] = 'x';

        if (k + 1 == positions.length) {
            k = -1;
        }
    }

    function pos(arr) {
        return {
            row: arr[0],
            col: arr[1]
        };
              
    }
}
 
var arr = [
    '500 500 1',
    '0 0',
    '-1 1'
];

Solve(arr);