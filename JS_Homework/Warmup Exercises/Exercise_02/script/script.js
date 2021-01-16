// Exercise 02
/* Write javascript code that will get an input from the user and calculate 
which Chinese Zodiac a given year is in
Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat 
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig */


let inputYear = prompt("Please enter your birth year");
if (((inputYear - 4) % 12) == 0) {
     console.log("Rat");
} else if (((inputYear - 4) % 12) == 1) {
     console.log("Ox");
}
else if (((inputYear - 4) % 12) == 2) {
     console.log("Tiger");
}
else if (((inputYear - 4) % 12) == 3) {
     console.log("Rabbit");
}
else if (((inputYear - 4) % 12) == 4) {
     console.log("Dragon");
}
else if (((inputYear - 4) % 12) == 5) {
     console.log("Snake");
}
else if (((inputYear - 4) % 12) == 6) {
     console.log("Horse");
}
else if (((inputYear - 4) % 12) == 7) {
     console.log("Goat");
}
else if (((inputYear - 4) % 12) == 8) {
     console.log("Monkey");
}
else if (((inputYear - 4) % 12) == 9) {
     console.log("Rooster");
}
else if (((inputYear - 4) % 12) == 10) {
     console.log("Dog");
}
else if (((inputYear - 4) % 12) == 11 ) {
     console.log("Pig");
     }


