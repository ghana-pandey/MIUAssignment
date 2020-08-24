let num=require('prompt-sync')();
let enterNum=num("enter the number");
enterNum=parseInt(enterNum);
let sum=0;
let i;
for(i=0;i<=enterNum;i++)
{
    if(i%2!==0)

    {
        sum=sum+i;
    }
}
console.log("sum is"+sum);