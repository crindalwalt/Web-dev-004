console.log("Function Revision Page");

/**
 * Functions are just block of code to be reused
 * Functions consists of two parts
 * 1) definition (bnaty hain)
 * 2) call (run krty hain)
 * Function recieve arguments
 * Function return values
 * Function syntax is of two types
 *    Common JS
 *    ECMA 6 JS (Arrow function)
 */


// function definition 
function getPercentage (obtainedMarks,totalMarks=1100){
  let percentage = (obtainedMarks/totalMarks)*100;
  // console.log(`The Percentage you got is ${percentage}`);
  return percentage;

}
// 
let getGrades = (perc)=>{
  if(perc >= 85){
    alert("A+ Grade");
  }else if (perc >=60 && perc < 85){
    alert("A Grade");
  }else if(perc >= 50 && perc < 60){
    alert("B Grade");
  }else if(perc < 50){
    alert("F Grade");
  }else {
    alert("Invalid Choice");
  }

}
let totalInMatrix = 1500;
let obtainedInMatrix = prompt("Enter Your Matric Marks");
let percentageResult = getPercentage(obtainedInMatrix,totalInMatrix);
getGrades(percentageResult);
