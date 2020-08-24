let usrInput=require('prompt-sync')();
let number=usrInput("enter the number");
number=parseInt(number);
if(number===7)
{
    console.log("Bingo");
}
else{
    console.log("try again")
}
