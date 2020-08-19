let usrInput=require('prompt-sync')();
let userAge=usrInput("please put your age");/*input*/
let maxHeartRate=220-userAge;/*process*/
let maxStrength=(maxHeartRate/100)*85;/*process*/
console.log("Maximum Strength is" + maxStrength);/*output*/
let minStrength=(maxHeartRate/100)*65;/*process*/
console.log("Minimum Strength is" + minStrength);/*output*/
