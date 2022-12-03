const fs = require('fs');

const lines = fs.readFileSync('input_day2').toString().split('\n');


const opOptions = ['A', 'B', 'C'];
const myOptions = ['X', 'Y', 'Z'];


function roundResult(op, me) {

    const myIndex = myOptions.indexOf(me);
    const pointsForMyChoice = myIndex + 1;

    const opponentIndex = opOptions.indexOf(op);

    const compareIndexes = myIndex - opponentIndex;

    if (compareIndexes == 0) return pointsForMyChoice + 3;                // 3 points for a draw

    if ([-2, 1].includes(compareIndexes)) return pointsForMyChoice + 6;   // 6 points for a win -2; 1

    return pointsForMyChoice;       // 0 points for a loose -1; 2
 
} 

function roundResultV2(op, me) {
    //X for loose
    //Y for draw
    //Z for win

    const opponentIndex = opOptions.indexOf(op);

    if (me == 'X') return (opponentIndex > 0) ? opponentIndex - 1 + 1 : 3;
    
    if (me == 'Y') return 3 + opponentIndex + 1;

    if (me == 'Z') return (opponentIndex < 2) ? 6 + opponentIndex + 1 + 1 : 6 + 1;

}


var result = 0;

var result2 = 0;

for (i in lines) {
 
    const round = lines[i].split(' ');

    result += roundResult(...round);

    result2 += roundResultV2(...round);

}

console.log(result);
console.log(result2);