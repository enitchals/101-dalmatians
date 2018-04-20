// This line imports the dogs array from data.js. You don't need to do anything with it :)
import dogs from './data.js';

// This problem set contains the same problems as sorted.js, but in a random order. Use .map(), .reduce(), .filter(), or .forEach() to solve each of the problems below.


// Console.log() the name of each dog
console.log(dogs.map(function (puppy) {
    return puppy.name
}))

// Create an array of all the dog names
let printedPups = dogs.map(
    function (puppy) {
        return puppy.name;
    })
console.log(printedPups);
// Create an array of dogs who are more than 15 inches tall
let tallPups = [];
tallPups = dogs.filter(function (pup) {
    return pup.height > 15;
})
console.log(tallPups);
// Create an array of dogs whose names start with "R" or "S"
let rascals = [];
let scoundrels = []
let rascallyScoundrels = []
function rS() {
    rascallyScoundrels.push(dogs.filter(function (pup) {
        return pup.name.startsWith('R');
    }))
    rascallyScoundrels.push(dogs.filter(function (pup) {
        return pup.name.startsWith('S')
    }))
    return rascallyScoundrels
}
console.log(rS())

//Could you also do it ....

let ragTag = [];
ragTag.push(dogs.filter(function (pup) {
    return pup.name.startsWith('R') || pup.name.startsWith('S')
}))
console.log(ragTag);
// How many spots do all the dogs have between them?
let spots = dogs.reduce(function (total, individual) {
    return total + individual.spots;
}, 0)
console.log(spots);
// Create an array of dogs who are more than 12 inches tall
let twelveInchers = []
twelveInchers.push(dogs.filter(function (pup) {
    return pup.height > 12
}))
console.log(twelveInchers);
// Create an array of all the dog names in lowercase
let lowercasePups = [];
lowercasePups.push(dogs.map(function (pup) {
    return pup.name.toLowerCase()
}))
console.log(lowercasePups)
// How much do all the dogs weigh, in total?
let weightyPups = dogs.reduce(function (total, pup) {
    return total + pup.weight
}, 0)
console.log(weightyPups)

// Create an array of the dogs' ages in dog years (One human year is equal to seven "dog years")
let dogYears = [];
dogYears.push(dogs.map(function (pup) {
    return pup.age * 7
}, 0))
console.log(dogYears)

// How many inches tall are all of the dogs combined?
let pupHeight = dogs.reduce(function (total, pup) {
    return total + pup.height;
}, 0)
console.log(pupHeight)
// Create an array of dogs who are three years old or younger
let youngPups = [];
youngPups.push(dogs.filter(function (pup) {
    return pup.age <= 3
}))
console.log(youngPups);
// Create an array of dogs whose heights are 15 to 18 inches (inclusive)
let middleHeights = [];
middleHeights.push(dogs.filter(function (pup) {
    return 15 <= pup.height && pup.height <= 18;
}))
console.log(middleHeights);
// It costs one dollar per letter to print name tags for the dogs. How many dollars will it cost to print tags for every dog?
let costOfPrinting = dogs.length;

console.log(costOfPrinting)
// Create an array of dogs who have fewer than ten spots
let lessSpotty = [];
lessSpotty.push(dogs.filter(function (pup) {
    return pup.spots < 10;
}));
console.log(lessSpotty);

// What is the total of all the dogs' ages (in human years)?
let totalAges = dogs.reduce(function (total, pup) {
    return total + pup.age;
}, 0)
console.log(totalAges)

// Create an array of dogs who have exactly one spot
let oneSpotPups = [];
oneSpotPups = dogs.filter(function (pup) {
    return pup.spots === 1;
})
console.log(oneSpotPups)

// Create an array of all the dog names spelled backwards
let backwardPupNames = [];
backwardPupNames.push(dogs.map(function (pup) {
    return pup.name.split('').reverse().join('')
}))
console.log(backwardPupNames)

// Add a "gender" property to each dog in the original array and randomly assign "M" or "F"
dogs.map(function (pup) {
    randomNum = Math.floor((Math.random() * 100) + 1)
    if (randomNum >= 50) {
        pup.gender = "F";
    } else {
        pup.gender = "M";
    }
    return pup.gender;
})
console.log(dogs)


// Create an array of all the dog names in uppercase
let uppercasePups = [];
uppercasePups.push(dogs.map(function (pup) {
    return pup.name.toUpperCase()
}))
console.log(uppercasePups)

// Create an array of dogs whose names start with a "P"
let pDogs = [];
pDogs.push(dogs.filter(function (pup) {
    return pup.name.startsWith('P');
}))
console.log(pDogs)

// Create an array of dogs whose weights are 20 to 30 pounds (inclusive)
let largerWeights = [];
largerWeights.push(dogs.filter(function (pup) {
    return pup.weight >= 20 && pup.weight <= 30;
}))
console.log(largerWeights)

// Console.log() "<dog> is a good boy/girl!" for each dog based on the gender property you added earlier
let pupMessage = dogs.map(function (pup) {
    if (pup.gender === 'M') {
        console.log(`${pup.name} is a good boy`)
    }
    if (pup.gender === 'F') {
        console.log(`${pup.name} is a good girl`)
    }
})