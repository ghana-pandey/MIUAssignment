prompt=require('prompt-sync')();
do {
    user_input = prompt("Please enter a age: ");
    user_input=parseInt(user_input)
    console.log("You command was: " + user_input);
  } while (user_input !==18);
  console.log("exiting...");