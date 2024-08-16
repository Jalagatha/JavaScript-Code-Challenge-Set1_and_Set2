function fizzBuzz(str1, str2) {
    const combinedLength = str1.length + str2.length;
    if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
        return "FizzBuzz";
    } else if (combinedLength % 3 === 0) {
        return "Fizz";
    } else if (combinedLength % 5 === 0) {
        return "Buzz";
    } else {
        return "";
    }
}

console.log(fizzBuzz("ivan","uiuuu")); 
