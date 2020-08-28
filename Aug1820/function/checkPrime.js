let a=function checkPrime( n){
  
  if(n===1)
  {
  return true;
  }
  else if(n===2)
  {
      return false;
  }
  for(let i=3;i<=n;i++)
  {
      if(n%i===0)
      {
          return false;
      }
      return true;
  }
  }
  let n;
  let usrIN=require('prompt-sync')()
  n=usrIN("enter the number")
  n=parseInt(n);
console.log(a(n));