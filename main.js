const fs = require('fs');

const array = fs.readFileSync('input').toString().split("\n");

subSum = 0;
highestSubSum = 0;

for(i in array) {

    if (array[i] != '') {
        subSum += parseInt(array[i]);
    }
    else {
        if (highestSubSum < subSum) highestSubSum = subSum;
        subSum = 0; 
    }
}

console.log(highestSubSum);