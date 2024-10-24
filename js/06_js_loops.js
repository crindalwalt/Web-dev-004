console.log("Hello from the loops");

let marks = [12, 34, 56, 34, 64, 74];
let friendName = ["Sadia", "Aaliya", "Sana"];
console.log(marks);
friendName.push("Codebook");
// friendName.pop()
// friendName.pop()
// friendName.pop()
// friendName.unshift("Shan")
// friendName.shift()

// console.log(friendName.length);

/**
 * Loop are mostly used to iterate arrays
 * 3 types of loops
 * for loop
 * while loop
 * do while loop
 * foreach loop
 * loop must have these 3 things
 * 1) a controlling variable
 * 2) a condition
 * 3) updation of controlling variable
 */
friendName = ["Sadia", "Aaliya", "Sana"];
console.log(friendName.length);

for (let i = 0; i < friendName.length; i++) {
  let element = friendName[i];
  console.log(element);
}

let index = 0;
// while(index < friendName.length){
//     console.log(friendName[index]  + " is my friends");

//     index++;
// }

do {
  console.log(friendName[index] + " is my friends");
  index++;
} while (index < friendName.length);
