console.log("This is function page");

/**
 * Function consist of two parts
 * function definition (function bnana)
 * function call (function chalana)
 *
 *
 */

// function definition
function greet(name) {
  console.log("hy " + name + " have a great day");
}

// function call

let myName = "Shahzad Farooq";
let friendName = "Zaid Munawar";
// greet(myName);
// greet(friendName);

function sum(num1, num2) {
  let result = num1 + num2;
  console.log("The result is " + result);
}

let num1 = 100;
let num2 = 60;
// sum(num2,num1);




function getPercentage(obtain,total){
    let result = (obtain/total)*100;
    console.log("Percentage is " + result);

    return result;
}

function getGrade(percentage){
    if(percentage >=80 && percentage >= 100){
        console.log("A grade");
    }else if (percentage <= 79 && percentage >= 60){
        console.log("B Grade")
    }else if(percentage <=59 && percentage >= 40){
        console.log("C Grade")
    }else if(percentage <= 1 && percentage >=39){
        console.log("F Grade")
    }else{
        console.log("Invalid choice");
    }
}
let percentage = getPercentage(num2,num1);
getGrade(percentage);