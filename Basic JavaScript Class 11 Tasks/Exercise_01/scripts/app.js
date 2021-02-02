// Exercise 1 - Create array of string lengths:
// Create a javascript function that will create a new array 
// that will be consisted of elements which are the lengths of the elements 
// in the already given array of names. let namesArray = ["Bill", "Ana", "Josephine", "Elena"]; let namesLengthArray = [];



let namesArray = ["Bill", "Ana", "Josephine", "Elena"];
let namesLengthArray = [];

function mapToArrayElementsLength(arr) {
    let i;
    for (i = 0; i < arr.length; i++ ) {
        let j; 
        for (j = 0; j < arr[i].length; j ++ ) {

        }
        namesLengthArray.push(j); 
    }
    
}

mapToArrayElementsLength(namesArray);
console.log(namesLengthArray);





