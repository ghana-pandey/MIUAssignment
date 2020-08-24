let usrInput=require('prompt-sync')();
let userAge=usrInput("Please Enter your age");
userAge=parseInt(userAge);
if(userAge<=0)
{
    console.log("Please enter valid age");
}
else if(userAge <=14)
{
    console.log("You cannot drive")
}
else 
console.log("You can drive");