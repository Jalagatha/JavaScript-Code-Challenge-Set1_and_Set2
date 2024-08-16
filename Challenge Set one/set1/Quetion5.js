function addDigits(num,x) {
    while (num >= x) { // Continue until the number has only one digit
        let sum = 0;
        while (num > 0) { // Add each digit of the number
            sum += num % x;
            num = Math.floor(num / x);
        }
        num = sum; // Set num to the sum of its digits
    }
    return num;
}

console.log(addDigits(38,10));  // Output: 2
