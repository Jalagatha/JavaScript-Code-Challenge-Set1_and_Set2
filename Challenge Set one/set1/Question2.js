// 1 Write a function named fizzBuzz that takes in two(2) parameters which are expected to be strings. 
// The function should return the string Fizz if the combined length of the parameters is divisible by 3, the string Buzz if it is divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3.
const birthYear = prompt("Enter Year of Birth: ");

const currentYear = new Date().getFullYear();

const age = currentYear - birthYear;

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age <= 36) {
  console.log("You are a youth.");
} else {
  console.log("You are an elder.");
}
