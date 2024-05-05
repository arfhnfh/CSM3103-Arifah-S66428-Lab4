// Arifah -S66428

//  Function the logic of finding the square of a number
function findSquare(number) {
    return number * number;
}

// Function find sumOfCubes using math.pow calculation
function sumOfCubes(num1, num2) {
    return Math.pow(num1, 3) + Math.pow(num2, 3);
}

// Function the reversedNumber
function reverseNumber(number) {
    let reversed = 0;
    while (number > 0) {
        reversed = reversed * 10 + (number % 10);
        number = Math.floor(number / 10);
    }
    return reversed; //return reversed number
}

// Function to print all numbers between 1 and 100 
function printDivisibleNumbers(z) {
    for (let i = 1; i <= 100; i++) {
        if (i % z === 0) {
            console.log(i);
        }
    }
}

console.log("Square of 5:", findSquare(5)); // Output: 25
console.log("Sum of cubes of 2 and 3:", sumOfCubes(2, 3)); // Output: 35
console.log("Reverse of 12345:", reverseNumber(12345)); // Output: 54321
console.log("Numbers divisible by 5 between 1 and 100:"); // testing number by 5 1-100
printDivisibleNumbers(5); // Output: 5, 10, 15, 20, ..., 95, 100
