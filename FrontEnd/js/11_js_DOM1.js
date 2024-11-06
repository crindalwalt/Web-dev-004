console.log("DOM Manuplation");
 
/**
 * Grabbing Element
 * naming conventions
    * camelCase
    * PascalCase
    * snake_case
    * kebab-case
 * 
 */

let darkModeButton = document.getElementById("submit"); // grab an html element
// darkModeButton.innerHTML = "<s>Dont Click me</s>"
// darkModeButton.innerText = "Sadia"
// console.log(darkModeButton)


// let anchorTag = document.getElementsByClassName("para");
// console.log(anchorTag[0])
// let firstElement = anchorTag[0];
// firstElement.style.border = "3px solid red"
// firstElement.style.padding = "1rem 2rem"
// firstElement.style.borderRadius = "1rem"
// firstElement.style.margin = "1rem";
// firstElement.style.backgroundColor = "plum";



let tagNameCollection = document.getElementsByTagName("a");
tagNameCollection[0].style.color = "orange"
// tagNameCollection[0].innerHTML = `<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backpack-fill" viewBox="0 0 16 16">
//   <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
//   <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
// </svg> Bag Packs</span>`
tagNameCollection[0].innerText = "Gold Winner UFC Fighter"

let mainButton  = document.querySelector("#submit");
let qsAll  = document.querySelectorAll(".para")
console.log(qsAll);

mainButton.style.padding = ".5rem 2rem";
