const fs = require('fs');

const array = fs.readFileSync('input').toString().split("\n");

subSum = 0;
highestSubSum = 0;

top3 = [];

for(i in array) {

    if (array[i] != '') {
        subSum += parseInt(array[i]);
    }
    else {
        if (highestSubSum < subSum) highestSubSum = subSum;

        if (top3.length < 3) {
            top3.push(subSum);
        }
        else {
            const minOfTop3 = Math.min(...top3);

            if (minOfTop3 < subSum) {
                top3[top3.indexOf(minOfTop3)] = subSum;
            }
        }

        subSum = 0; 
    }
}

const sumOfTop3 = top3.reduce((a, b) => a + b, 0)

console.log('top 1: ', highestSubSum);
console.log('top 3:', sumOfTop3);
