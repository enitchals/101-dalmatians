// This line imports the dogs array from data.js. You don't need to do anything with it :)
import dogs from './data.js'; 

// .MAP()
// Map creates a new array with the results from applying the callback function to each item in the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// EXAMPLE
// array.map(callback);

// PRACTICE PROBLEMS:
// Create an array of all the dog names
// Create an array of all the dog names in uppercase
// Create an array of all the dog names in lowercase
// Create an array of all the dog names spelled backwards
// Create an array of the dogs' ages in dog years (One human year is equal to seven "dog years")




// .REDUCE()
// Reduce collapses an array into a single value by applying the callback function to each item in the array.

// EXAMPLE
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// array.reduce(reducer);
// array.reduce(reducer, startingValue);

// PRACTICE PROBLEMS:
// How many spots do all the dogs have between them?
// How much do all the dogs weigh, in total?
// How many inches tall are all of the dogs combined?
// What is the total of all the dogs' ages (in human years)?
// It costs one dollar per letter to print name tags for the dogs. How many dollars will it cost to print tags for every dog?




// .FILTER()
// Filter creates a new array consisting of all the elements of the original array that pass a true/false test implemented by the callback function.

// EXAMPLE
// const callback = (item) => item.value === testValue;
// array.filter(callback);

// PRACTICE PROBLEMS:
// Create an array of dogs who have fewer than ten spots
// Create an array of dogs who have exactly one spot
// Create an array of dogs who are three years old or younger
// Create an array of dogs who are more than 15 inches tall
// Create an array of dogs whose names start with a "P"
// Create an array of dogs whose names start with "R" or "S"
// Create an array of dogs who are more than 12 inches tall
// Create an array of dogs whose weights are 20 to 30 pounds (inclusive)
// Create an array of dogs whose heights are 15 to 18 inches (inclusive)




// .FOREACH()
// ForEach executes a callback function for each array element.

// EXAMPLE
// const callback = (x) => console.log(x);
// array.forEach(callback);

// PRACTICE PROBLEMS
// Console.log() the name of each dog
// Add a "gender" property to each dog in the original array and randomly assign "M" or "F"
// Console.log() "<dog> is a good boy/girl!" for each dog based on the gender property you added