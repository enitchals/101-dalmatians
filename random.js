// This line imports the dogs array from data.js. You don't need to do anything with it :)
import dogs from './data.js';

// This problem set contains the same problems as sorted.js, but in a random order. Use .map(), .reduce(), .filter(), or .forEach() to solve each of the problems below.


// Console.log() the name of each dog
let petName = [];
let petN = dogs.forEach((eachPetName) => petName.push(eachPetName.name));
console.log(petName);

// Create an array of all the dog names
let littleOne = dogs.map((dgName) => dgName.name);
console.log(littleOne);

// Create an array of dogs who are more than 15 inches tall
// Create an array of dogs whose names start with "R" or "S"
// How many spots do all the dogs have between them?
// Create an array of dogs who are more than 12 inches tall
// Create an array of all the dog names in lowercase
// How much do all the dogs weigh, in total?
// Create an array of the dogs' ages in dog years (One human year is equal to seven "dog years")
// How many inches tall are all of the dogs combined?
// Create an array of dogs who are three years old or younger
// Create an array of dogs whose heights are 15 to 18 inches (inclusive)
// It costs one dollar per letter to print name tags for the dogs. How many dollars will it cost to print tags for every dog?
// Create an array of dogs who have fewer than ten spots
// What is the total of all the dogs' ages (in human years)?
// Create an array of dogs who have exactly one spot
// Create an array of all the dog names spelled backwards
// Add a "gender" property to each dog in the original array and randomly assign "M" or "F"
// Create an array of all the dog names in uppercase
// Create an array of dogs whose names start with a "P"
// Create an array of dogs whose weights are 20 to 30 pounds (inclusive)
// Console.log() "<dog> is a good boy/girl!" for each dog based on the gender property you added earlier