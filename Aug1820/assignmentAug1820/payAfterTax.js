let usrInput=require('prompt-sync')();
let totalHours=usrInput("Enter total hours Worked");/*input*/
let wages=usrInput("Enter your horly wages");/*input*/
let totalPaid=parseFloat(totalHours*wages);/*process*/
let totaltaxes=(15/100)*totalPaid;/*process*/
let actualPaidAfterTaxes=totalPaid-totaltaxes;/*process*/
console.log("paid after taxes is"+ actualPaidAfterTaxes);/*output*/