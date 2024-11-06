console.log("If Else Class");

// let age = 62;
let age = prompt("Enter your age", "e.g 45");
// alert(myAge)
if (age < 18 && age > 0) {
  alert("you are underage , you must wait till 18 to get your license");
} else if (age >= 18 && age <= 60) {
  alert("You are allowed to drive ");
} else if (age > 60) {
  alert(
    "you are legally allowed to drive , but we suggest sakoon se ghar betho"
  );
} else {
  alert("Invalid Choice");
}
