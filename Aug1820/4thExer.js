const PromptSync = require("prompt-sync");

let enterUser=require('prompt-sync')();
let enterNum=enterUser("enter the number from 1 to 5");
enterNum=parseInt(enterNum)
if(enterNum===1)
{
    console.log("Spell As = One")
}
else if(enterNum===2)
{
    console.log("Spell As=Two")
}
else if(enterNum===3)
{
    console.log("Spell As= Three")
}
else if(enterNum===4)
{
    console.log("Spell As=Four")
}
else if(enterNum===5)
{
    console.log("Spell As=Five");
}
