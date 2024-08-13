
// Question 2 Set two
let arr = [5, 10, 10, 15, 20];
let duplicates = false;
function hasDuplicates(arr) {
  for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      if (arr[i] === arr[j]) duplicates = true;
    }
  }
  return duplicates;
}
console.log("Array has Duplicates true/false: " + hasDuplicates(arr));
