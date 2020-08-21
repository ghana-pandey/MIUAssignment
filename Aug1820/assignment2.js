let enterNumber=require("prompt-sync")();
let firstNum=enterNumber("Enter first Number");
let secNum=enterNumber("Enter 2nd Num");
firstNum=parseFloat(firstNum);
secNum=parseFloat(secNum);
/*if(firstNum<=0)
{
    firstNum=firstNum*-1;
}
if(secNum<=0)
{
    secNum=secNum*-1;
}*/
let result=(firstNum-secNum);
result=Math.abs(result);
console.log(result);

