let quartz = require('prompt-sync')();
let user_quartz = quartz("Enter value in Quartz\n");/*input*/
let valToLitres=parseFloat(user_quartz/1.05668821);/*process*/
console.log("conversion is " +valToLitres.toFixed(2));/*output*/
