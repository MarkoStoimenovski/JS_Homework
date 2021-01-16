/* Exercise 03
3.Write a JavaScript program that will find out which of two integers is closer to 100.
 Make sure to display in the console if one of the values is a negative number!
 Ex. a = 50;
     b = 88;
     Display => 88 is closer to 100
*/

let numberOne = prompt("Enter first number");
let numberTwo = prompt("Entwer second number");
let firstDifference = 100 - numberOne;
let secondDifference = 100 - numberTwo;

if (numberOne > 0 && numberTwo > 0) {
    if (firstDifference < secondDifference)
    console.log(numberOne,"is closer to 100");
    else console.log(numberTwo,"is closer to 100");
} 
else console.log("Enter a positive number");














