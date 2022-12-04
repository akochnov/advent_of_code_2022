const fs = require('fs');

const lines = fs.readFileSync('input_day4').toString().split('\n');

let matches = 0;
let matches2 = 0;

for (i in lines) {

    let contains = false;
    
    const pair = lines[i].split(',').map(item => item.split('-'));


    const elf1 = pair[0].map(item => parseInt(item));
    const elf2 = pair[1].map(item => parseInt(item));

    //console.log(elf1, elf2);

    if (elf1[0] <= elf2[0] && elf1[1] >= elf2[1] ||
        elf1[0] >= elf2[0] && elf1[1] <= elf2[1] ) {
            contains = true;
            matches++;  
        }

    if (contains ||
        elf1[0] >= elf2[0] && elf1[0] <= elf2[1] ||
        elf1[1] >= elf2[0] && elf1[1] <= elf2[1] ) matches2++;  
    
}

console.log(matches, matches2);