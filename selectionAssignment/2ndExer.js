let enterUser=require('prompt-sync')();
let enterNumber=enterUser("Enter the number from 1 to 7");
enterNumber=parseInt(enterNumber);
if(enterNumber===7)
{
    console.log("Bingo");
}
else
{
    console.log( "Try againa")
}