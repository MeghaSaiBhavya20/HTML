const number = parseInt(prompt("Enter a number:"));
let factors = [];

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        factors.push(i);
    }
}

console.log("Factors of", number, ":", factors);
console.log("Number of factors:", factors.length);
