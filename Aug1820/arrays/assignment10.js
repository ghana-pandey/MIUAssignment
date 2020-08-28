let temp = [];
let k = 0;
function christmasGift(day, gift, n) {
    for (let i = 0; i < 12; i++) {
        temp[i] = day[i] + gift[i];

    }
    if (n === 1) {
        console.log(temp[0]);
    }
    else if (n === 2) {
        console.log(temp[1] + gift[0]);
    }
    else if (n === 3) {
        console.log(temp[2] + gift[1] + gift[0]);
    }
    else if (n === 4) {
        console.log(temp[3] + gift[2] + gift[1] + "and" + gift[0]);
    }

}

day = ["On the first day of Christmas, my true love gave to me", "On the second day of Christmas, my true love gave to me",
    "On the third day of Christmas, my true love gave to me", "On the fourth day of Christmas, my true love gave to me",
    "On the fifth day of Christmas, my true love gave to me", "On the sixth day of Christmas, my true love gave to me", "On the seventh day of Christmas, my true love gave to me",
    "On the eighth day of Christmas, my true love gave to me", "On the ninth day of Christmas, my true love gave to me", "On the tenth day of Christmas, my true love gave to me",
    "On the eleventh day of Christmas, my true love gave to me", "On the twelveth day of Christmas, my true love gave to me"];






gift = ["in a pear tree,", "two turtle doves,", "three French hens,",
    "four calling birds,", "five golden rings,", " six geese a laying,", " seven swans a swimming,", "eight maids a milking,", " nine ladies dancing",
    "ten lords a leaping,", "eleven pipers piping,", "twelve drummers drumming,"];

let userInput = require('prompt-sync')();
let n = userInput("enter no from 1 to 12");
n = parseInt(n);
console.log(christmasGift(day, gift, n));

