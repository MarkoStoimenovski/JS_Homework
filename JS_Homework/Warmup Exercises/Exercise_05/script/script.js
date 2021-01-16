/* Exercise 05
5.Declare two variables number1 and number2. If the numbers are in rangebetween 20...30 calculate their sum,
if the numbers are in range between 40 and 60 calculate their difference and if the numbers are in the range between
80 and 100 multiply them and in all cases display the result in the console.
*/
let number1 = parseInt(prompt("Enter first number"));
let number2 = parseInt(prompt("Enter second number"));

let sum;
let diff;
let multi;


if((number1 >= 20 && number1 <= 30) && (number2 >= 20 && number2 <= 30)){
    sum = number1 + number2;
    console.log(`Sumata na ovie 2 broja e ${sum}`);
} else if((number1 >= 40 && number1 <= 60) && (number2 >= 40 && number2 <= 60)){
    diff = number1 - number2;
    console.log(`Razlikata na ovie 2 broja e ${diff}`);
} else if((number1 >= 80 && number1 <= 100) && (number2 >= 80 && number2 <= 100)){
    multi = number1 * number2;
    console.log(`Proizvodot na ovie 2 broja e ${multi}`);
}
else{
    console.log(`Vnesovte nepravilen broj!`);
}