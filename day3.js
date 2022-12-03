const fs = require('fs');

const lines = fs.readFileSync('input_day3').toString().split('\n');





function compareRucksacks(first, second){
    for (i in first) {
        item = first[i];
        if (second.includes(item)) return item;
    }
}

function getPriority(letter) {
    
    const charCode = letter.charCodeAt(0);  //charcodes a-z 97-122    A-Z 65-90
    return charCode < 91 ? charCode - 64 + 26 : charCode - 96
}


let sum = 0;

for (i in lines){
    const line = lines[i].toString();
    const first = line.slice(undefined, line.length / 2).split('');
    const second = line.slice(line.length / 2).split('');

    sum += getPriority(compareRucksacks(first, second));
}

console.log(sum);


function getBadge(rucksacks) {
    for (let charCode = 65; charCode < 123; charCode++) {

        item = String.fromCharCode(charCode);
        
        if (rucksacks[0].split('').includes(item) && rucksacks[1].split('').includes(item) && rucksacks[2].split('').includes(item)) return item

        if (charCode == 90) charCode = 96;
    }
}

let sum2 = 0;

for (let i = 0; i < lines.length; i += 3){
    
    const group = lines.slice(i, i + 3);
    
    sum2 += getPriority(getBadge(group));

}

console.log(sum2);