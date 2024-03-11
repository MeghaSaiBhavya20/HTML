const array1 = [23, 9, 5, 12, 90];
const array2 = [45, 19, 85];
const array3 = [2, 61, 5, 30, 88, 11];

// Merging the arrays
const mergedArray = [...array1, ...array2, ...array3];

// Finding the largest element
const largestElement = Math.max(...mergedArray);

console.log("Merged Array:", mergedArray);
console.log("Largest Element:", largestElement);
