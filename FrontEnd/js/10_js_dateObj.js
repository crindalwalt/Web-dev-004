console.log("Date Object in JS");

let tareekh = new Date();
// console.log(tareekh)



let hours = tareekh.getHours();
let minutes = tareekh.getMinutes()
let seconds = tareekh.getSeconds()
let miliSeconds = tareekh.getMilliseconds()
let dateString = `${hours}:${minutes} (${seconds})`


let year = tareekh.getFullYear();
let dateNow = tareekh.getDate();
let dayNow = tareekh.getDay();


let dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let actualDay = dayArray[dayNow]

let monthArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
let monthIndex = tareekh.getMonth();
let actualMonth = monthArray[monthIndex];
console.log(actualMonth)



