console.log("Hello world");

/**
 * Event and Event listeners
 * ? Events
 *  click
 *  double click
 *  keyboard key press
 *  mouse over
 *  mouse leave
 *  mouse drag
 *
 */

let someFunc = (e) => {
  console.log(e.ctrlKey);
  e.target.innerText = "Mouse door hatao";
  e.target.style.padding = ".5rem 1.5rem";
  e.target.style.backgroundColor = "plum";
  e.target.style.border = "none";
  e.target.style.borderRadius = ".5rem";
  if (e.ctrlKey) {
    e.target.innerText += "ap ny control key dabai";
  } else {
    e.target.innerText += "ap ny control key nai dabai";
  }
};
let mainButton = document.querySelector("#submit");
mainButton = document.querySelector("#textarea"); // overriden
mainButton.addEventListener("click", someFunc);
