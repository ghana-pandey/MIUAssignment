let enterUser=require('prompt-sync')();
let enterWeather=enterUser("please enter the weather outside");
//enterWeather=enterWeather.toLocaleLowerCase();
if(enterWeather==='Rainy')
{
    console.log("Take an Umbrella");
}