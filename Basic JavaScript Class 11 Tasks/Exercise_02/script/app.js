//  Exercise 2 - Divide by 7 and 3:
//  Create a function that will find and return
//  an new array of all numbers dividable by 7 AND 3 in a 
//  array from 1 to 100. If a number is ONLY dividable by 7 it should NOT 
//  be part from that array. If a number is ONLY dividable by 3 it should NOT 
//  be part from that array. Bonus: make the function work to any number instead of only to 100.

let num = 100;
let newArray = [];

function getDividableNumbers() {
    let i;
    for(i = 0; i < num; i++) {
        if(i % 7 == 0 && i % 3 == 0 ) {
            newArray.push(i);
        }
    }
    return newArray;
}

getDividableNumbers(newArray);
console.log(newArray);

