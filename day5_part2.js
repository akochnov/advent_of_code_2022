
const fs = require('fs');

const lines = fs.readFileSync('input_day5')
                .toString().split('\n 1   2   3   4   5   6   7   8   9 \n\n')
                .map(item => item.split('\n'));

const stucks = lines[0];
console.log(stucks.toString());

const numberOfStucks = stucks[stucks.length - 1].split(' ').length;


arr = [];
const firstStackPosition = 1;
const step = 4;


for (let i = stucks.length - 1; i >= 0; i--) {

    for (let j = 0; j < numberOfStucks; j++) {

        if (!Array.isArray(arr[j])) arr[j]=[];
        
        pos = firstStackPosition + j * step;
        const item = stucks[i].slice(pos,pos+1);
        
        if (item != ' ') arr[j].push(item);
    }

}
console.log(arr);

console.log(lines[1]);

const instructions = lines[1].map(item => item
                            .replace('move ', '')
                            .replace('from ', '')
                            .replace('to ', '')
                            .split(' ')
                            .map(item => parseInt(item)));
;
console.log(instructions);

for (let i in instructions) {
    const repeat = instructions[i][0];
    const stackfrom = instructions[i][1] - 1;
    const stackTo = instructions[i][2] - 1;
    console.log(repeat, stackfrom, stackTo);

    console.log(arr[stackfrom],
            repeat,
            arr[stackfrom].slice(-repeat));

    arr[stackTo].push(...arr[stackfrom].slice(-repeat));

    for (let j = 0; j < repeat; j++) {
        arr[stackfrom].pop()        
    }

    console.log(arr);
}

console.log(arr.map(item => item[item.length-1]).join(''));