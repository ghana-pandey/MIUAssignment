let enterUser=require("prompt-sync")();
let enterNumber=enterUser("please enter the number to check");
enterNumber=parseInt(enterNumber);
if(enterNumber %2===0)
{
    console.log("The number is even");
}
else
console.log("the number is odd");
