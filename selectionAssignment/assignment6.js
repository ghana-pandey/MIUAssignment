let userInput=require('prompt-sync')();
let houseValue=userInput("enter the house value")
houseValue=parseFloat(houseValue);
if(houseValue>=0&&houseValue<49999.99)
{
    let downPaymnet=0.05*houseValue;
    console.log(downPaymnet);
}
else if(houseValue<99999.99)
{
    let downPaymnet=2000+0.1*(houseValue-50000)
    console.log(downPaymnet);
}
else if(houseValue<19999.99)
{
    let downPaymnet=7500+0.2*(houseValue-100000)
    console.log(downPaymnet);
}
else
{
    let downPaymnet=27500+0.25*(houseValue-200000)
    console.log(downPaymnet);
}