let usrInput=require('prompt-sync')();
let initialOd=usrInput("Please enter initial odometer readings");
let finalOd=usrInput("please Enter final odd");
let noOfGallonsUsed=usrInput("enter no of gallons used");
letTotalOdd=finalOd-initialOd;
let milesPerGallon=parseFloat(letTotalOdd/noOfGallonsUsed);
console.log("Miles per gallon is" +milesPerGallon.toFixed(2));


