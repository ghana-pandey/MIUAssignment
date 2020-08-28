let fah=function(f)
{
return (f-32)*5/9;
}

let userIn,degInF;
userIn=require('prompt-sync')();
degInF=userIn("Enter degree in Faharen");
degInF=parseFloat(degInF);
console.log(fah(degInF));