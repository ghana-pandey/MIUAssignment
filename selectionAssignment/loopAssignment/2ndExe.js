let usrInput=require('prompt-sync')();

/*do{
    var enterAge=usrInput("enter the Age");
    enterAge=parseInt(enterAge);
}while(enterAge!==18)*/

while(enterAge!==18)
{
    var enterAge=usrInput("enter the Age");
    enterAge=parseInt(enterAge);
}
let r=4*enterAge;
console.log(r);
