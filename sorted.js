// This line imports the dogs array from data.js. You don't need to do anything with it :)
import dogs from './data.js'; 

// .MAP()
// Map creates a new array with the results from applying the callback function to each item in the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// EXAMPLE
// array.map(callback);

// PRACTICE PROBLEMS:
// Create an array of all the dog names
let dogNames = [];
dogNames.push(dogs.map(function(pup) {
    return pup.name;
}))
console.log(dogNames);

// Create an array of all the dog names in uppercase
let uppercaseNames = [];
uppercaseNames.push(dogs.map(function(pup) {
    return pup.name.toUpperCase();
}))
console.log(uppercaseNames)

// Create an array of all the dog names in lowercase
let lowercaseNames = [];
lowercaseNames.push(dogs.map(function(pup) {
    return pup.name.toLowerCase()
}))
console.log(lowercaseNames);

// Create an array of all the dog names spelled backwards
let reverseNames = [];
reverseNames.push(dogs.map(function(pup) {
    return pup.name.split('').reverse().join('');
}))
console.log(reverseNames);

// Create an array of the dogs' ages in dog years (One human year is equal to seven "dog years")
let dogYears = [];
dogYears.push(dogs.map(function(pup) {
    return pup.age * 7
}))
console.log(dogYears)



// .REDUCE()
// Reduce collapses an array into a single value by applying the callback function to each item in the array.

// EXAMPLE
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// array.reduce(reducer);
// array.reduce(reducer, startingValue);

// PRACTICE PROBLEMS:
// How many spots do all the dogs have between them?
let spotsOnDogs = dogs.reduce(function(total, pup) {
    return total + pup.spots;
}, 0)
console.log(spotsOnDogs)

// How much do all the dogs weigh, in total?
let pupWeight = dogs.reduce(function(total, pup) {
    return total + pup.weight;
}, 0)
console.log(pupWeight)

// How many inches tall are all of the dogs combined?
let pupHeight = dogs.reduce(function(total, pup) {
    return total + pup.height;
}, 0);
console.log(pupHeight)

// What is the total of all the dogs' ages (in human years)?
let agesOfPups = dogs.reduce(function(total, pup) {
    return total + pup.age;
}, 0)
console.log(agesOfPups)

// It costs one dollar per letter to print name tags for the dogs. How many dollars will it cost to print tags for every dog?
let numberOfPups = dogs.reduce(function(total) {
    return total + 1;
}, 0);
console.log(numberOfPups)



// .FILTER()
// Filter creates a new array consisting of all the elements of the original array that pass a true/false test implemented by the callback function.

// EXAMPLE
// const callback = (item) => item.value === testValue;
// array.filter(callback);

// PRACTICE PROBLEMS:
// Create an array of dogs who have fewer than ten spots
let lessSpot = [];
lessSpot.push(dogs.filter(function(pup) {
    return pup.spots < 10;
}))
console.log(lessSpot)

// Create an array of dogs who have exactly one spot
let oneSpot = []
oneSpot.push(dogs.filter(function(pup) {
    return pup.spots === 0;
}))
console.log(oneSpot);

// Create an array of dogs who are three years old or younger
let youngPups = [];
youngPups.push(dogs.filter(function(pup) {
    return pup.age <= 3;
}))
console.log(youngPups)

// Create an array of dogs who are more than 15 inches tall
let fifteenInches = []
fifteenInches.push(dogs.filter(function(pup) {
    return pup.height > 15;
}))
console.log(fifteenInches)

// Create an array of dogs whose names start with a "P"
let pDogs = [];
pDogs.push(dogs.filter(function(pup) {
    return pup.name.startsWith('P')
}))
console.log(pDogs)
// Create an array of dogs whose names start with "R" or "S"
let rSPups = [];
rSPups.push(dogs.filter(function(pup) {
    return pup.name.startsWith('R') || pup.name.startsWith('S');
}))
console.log(rSPups)

// Create an array of dogs who are more than 12 inches tall
let twelveInchers = [];
twelveInchers.push(dogs.filter(function(pup) {
    return pup.height > 12;
}))
console.log(twelveInchers);

// Create an array of dogs whose weights are 20 to 30 pounds (inclusive)
let twentyToThirty = [];
twentyToThirty.push(dogs.filter(function(pup) {
    return pup.weight >= 20 && pup.weight <= 30;
}))
console.log(twentyToThirty)

// Create an array of dogs whose heights are 15 to 18 inches (inclusive)
let fifteenToEighteen = [];
fifteenToEighteen.push(dogs.filter(function(pup) {
    return pup.height <= 18 && pup.height >= 15;
}))
console.log(fifteenToEighteen)



// .FOREACH()
// ForEach executes a callback function for each array element.

// EXAMPLE
// const callback = (x) => console.log(x);
// array.forEach(callback);

// PRACTICE PROBLEMS
// Console.log() the name of each dog
console.log(dogs.forEach(function(pup){ console.log(pup.name)}))
// Add a "gender" property to each dog in the original array and randomly assign "M" or "F"
dogs.gender = [];
dogs.forEach(function(pup) {
        randomNum = Math.floor((Math.random() * 100) + 1)
                        if (randomNum >= 50) {
                             pup.gender = "F";
                            } else {
                              pup.gender = "M";
                             }
                             dogs.gender = pup.gender;
                            })
console.log(dogs)

// Console.log() "<dog> is a good boy/girl!" for each dog based on the gender property you added
dogs.forEach(function(pup) {
    if (pup.gender === 'F') {
        console.log(`${pup.name} is a good girl!`)
    } else {
        console.log(`${pup.name} is a good boy!`)
    }
})