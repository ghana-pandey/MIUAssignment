let enterUser=require('prompt-sync')();
let studName=enterUser("Enter the Name of Student");
let stGrad=enterUser("Enter the Grad for Student");
if(stGrad>0 &&stGrad <30)
{
    console.log(studName+" "+stGrad+" "+"=freshman");
}
else if(stGrad<60)
{
    console.log(studName+" "+stGrad+" "+"=sophomore");
}
else if(stGrad<90)
{
    console.log(studName+" "+stGrad+" "+"=junior");
}
else
{
    console.log(studName+" "+stGrad+" "+"=Senior");
}