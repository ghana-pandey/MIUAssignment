/*Write a defining table and a JavaScript program that asks a user for 
a distance in kilometers and then converts that value into miles. 
Your program should correctly handle real numbers.*/

let userKilometer=require('prompt-sync')();
let enterInKilometer=userKilometer("Please enter the distance in Kilometer ");/*input*/
let inMiles=parseFloat(enterInKilometer/1.609);/*process*/
console.log("Total in Miles "+inMiles.toFixed(3));/*output*/
