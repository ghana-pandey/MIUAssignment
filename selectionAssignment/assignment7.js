let reuireInput=require('prompt-sync')();
let childAge=reuireInput("enter the child age");
childAge=parseInt(childAge);
let season=reuireInput("Enter the season");
if(childAge <5 && season=='summer'||season=='fall')
{
console.log("Bed Time=8:30 Pm")
}
else if(childAge<5&&season=='winter'&&season=='spring')
{
console.log("Bed TIme= 8 : 00 PM");
}
else if(childAge<12 && season=='summer')
{
console.log("Bed TIme=9 :30 PM")
}
else if(childAge<12 && season=='winter'&&season=='fall'&&season=='spring')
{
console.log("Bed Time= 8:30 pm");
}
else if(childAge>13&&season=='summer')
{
    console.log("Bed Time=10:30 pm")
}
else if((childAge >13) && (season=='winter'&&season=='spring'&&season=='fall'))
{
    console.log("Bed Time= 9:30 Pm");
}