// This line imports the dogs array from data.js. You don't need to do anything with it :)
import dogs from './data.js'; 

// .MAP()
// Map creates a new array with the results from applying the callback function to each item in the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// EXAMPLE
// array.map(callback);

// PRACTICE PROBLEMS:
// Create an array of all the dog names
let dogName = dogs.map((cutieName) => cutieName.name);
console.log(dogName);

// Create an array of all the dog names in uppercase
let capName = dogs.map((bigName) => bigName.name.toUpperCase());
console.log(capName);

// Create an array of all the dog names in lowercase
let smallName = dogs.map((tinyName) => tinyName.name.toLowerCase());
console.log(smallName);

// Create an array of all the dog names spelled backwards
let backwardName = dogs.map((reverseName) => reverseName.name.split('').reverse().join(''));
console.log(backwardName);

// Create an array of the dogs' ages in dog years (One human year is equal to seven "dog years")
let dogYear = dogs.map((dogAge) => dogAge.age + 7);
console.log(dogYear);




// .REDUCE()
// Reduce collapses an array into a single value by applying the callback function to each item in the array.

// EXAMPLE
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// array.reduce(reducer);
// array.reduce(reducer, startingValue);

// PRACTICE PROBLEMS:
// How many spots do all the dogs have between them?

let spots = dogs.reduce((totalSpot, eachSpot) => (totalSpot += eachSpot.spots),0);
console.log(spots);

// How much do all the dogs weigh, in total?

let totalWeight = dogs.reduce((heavy, eachWeight) => (heavy += eachWeight.weight), 0);
console.log(totalWeight);

// How many inches tall are all of the dogs combined?

let totalHeight = dogs.reduce((totalTall, eachTall) => totalTall += eachTall.height, 0);
console.log(totalHeight);

// What is the total of all the dogs' ages (in human years)?

let allAge = dogs.reduce((totalAge, eachAge) => (totalAge += eachAge.age), 0);
console.log(allAge);

// It costs one dollar per letter to print name tags for the dogs. How many dollars will it cost to print tags for every dog?

let totalLetter = dogs.reduce((totalAlphabet, eachLetter) => (totalAlphabet += eachLetter.name), 0);
console.log(totalLetter.length);




// .FILTER()
// Filter creates a new array consisting of all the elements of the original array that pass a true/false test implemented by the callback function.

// EXAMPLE
// const callback = (item) => item.value === testValue;
// array.filter(callback);

// PRACTICE PROBLEMS:
// Create an array of dogs who have fewer than ten spots
let lessSpots = dogs.filter((fewerSpots) => fewerSpots.spots < 10);
console.log(lessSpots);

// Create an array of dogs who have exactly one spot
let oneSpot = dogs.filter((onlySpot) => onlySpot.spots === 1);
console.log(oneSpot);

// Create an array of dogs who are three years old or younger
let at3 = dogs.filter((youngOne) => youngOne.age <= 3);
console.log(at3);

// Create an array of dogs who are more than 15 inches tall
let tallOnes = dogs.filter((bigOne) => bigOne.height > 15);
console.log(tallOnes);

// Create an array of dogs whose names start with a "P"
let pName = dogs.filter((p) => p.name[0] === 'P');
console.log(pName);

// Create an array of dogs whose names start with "R" or "S"
let rtName = dogs.filter((rt) => rt.name[0] === 'R' || rt.name[0] === 'S');
console.log(rtName);

// Create an array of dogs who are more than 12 inches tall
let adultOnes = dogs.filter((adultOne) => adultOne.height > 12);
console.log(adultOnes);

// Create an array of dogs whose weights are 20 to 30 pounds (inclusive)

// Create an array of dogs whose heights are 15 to 18 inches (inclusive)




// .FOREACH()
// ForEach executes a callback function for each array element.

// EXAMPLE
// const callback = (x) => console.log(x);
// array.forEach(callback);

// PRACTICE PROBLEMS
// Console.log() the name of each dog
let eachNames = [];
let spotName = dogs.forEach((dName) => eachNames.push(dName.name));
console.log(eachNames);

// Add a "gender" property to each dog in the original array and randomly assign "M" or "F"

// Console.log() "<dog> is a good boy/girl!" for each dog based on the gender property you added