/* Exercise 04
4.Write a JavaScript program to get the difference between a given number and 13,
if the number is greater than 13 calculate double the difference.
Ex: givenNumber = 5;      
If the number is < 13 => calculate 13/5      
If the number is > 13 => calculate (13/5) * 2
*/



let givenNumber = prompt("Enter a number");
let theResult;

if (givenNumber < 13) {
    theResult = 13 / givenNumber;
    console.log("The result is", theResult);
} else {
    theResult = 13 / givenNumber * 2;
    console.log("The result is", theResult);
}

