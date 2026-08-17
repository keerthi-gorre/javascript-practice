// JavaScript Practice - Common Coding Problems

// 1. Remove duplicates from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log("Remove Duplicates:");
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// 2. Count character frequency
function characterFrequency(str) {
  const frequency = {};

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
}

console.log("\nCharacter Frequency:");
console.log(characterFrequency("javascript"));


// 3. FizzBuzz
function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log("\nFizzBuzz:");
console.log(fizzBuzz(15));


// 4. Sort an array
function sortNumbers(arr) {
  return [...arr].sort((a, b) => a - b);
}

console.log("\nSorted Array:");
console.log(sortNumbers([50, 10, 40, 20, 30]));


// 5. Filter even numbers
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log("\nEven Numbers:");
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));


// 6. Reverse words
function reverseWords(sentence) {
  return sentence
    .split(" ")
    .reverse()
    .join(" ");
}

console.log("\nReverse Words:");
console.log(reverseWords("I love JavaScript"));


// 7. Find the largest number
function findLargest(arr) {
  return Math.max(...arr);
}

console.log("\nLargest Number:");
console.log(findLargest([10, 45, 23, 89, 12]));
