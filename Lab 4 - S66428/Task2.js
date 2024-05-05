// Arifah -S66428

// Function to use recursion to get the sum of a number's digits
function sumOfDigits(number) {
    if (number === 0) {
        return 0;
    } else {
        return number % 10 + sumOfDigits(Math.floor(number / 10));
    }
}

// Recursive function to calculate x raised to the power of y
function power(x, y) {
    if (y === 0) {
        return 1;
    } else {
        return x * power(x, y - 1);
    }
}


console.log("Sum of digits of 12345:", sumOfDigits(12345)); // Output: 15
console.log("2 raised to the power 5:", power(2, 5)); // Output: 32
