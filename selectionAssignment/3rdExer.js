let enterUser=require("prompt-sync")();
let enterAge=enterUser("please put your age")
if(enterAge<=0)
{
    console.log("enter valid age")
}

else if(enterAge <14)
{
    console.log("you cannot drive ")
}
else if(enterAge<=18)
{
    console.log("You can Drive under supervison")
}
else
{
    console.log("you can drive");
}
