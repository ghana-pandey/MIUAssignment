let user_input = require('prompt-sync')();
let totalBoxes = user_input("Enter the total no of boxes\n");/*input*/
let totalBoxesInStack=user_input("enter the no of Stack");/*input*/
let totalStack=totalBoxes/totalBoxesInStack;/*process*/
console.log("No of stack=" + Math.ceil(totalStack));/*output*/