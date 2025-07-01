// what I think is happening: This file houses our main application, where it imports all of the functions from outside files and allows us to use them throughout the main file. All of these functions return arrays in various ways, and so we reference them in the console.log() messages near the bottom of the file

// what I think is happening: an import from cattle.js, where we are specifically using the roundup function
const { roundup } = require("./cattle.js")

// what I think is happening: an import from drovers.js, where we are specifically using the hireDrovers function
const { hireDrovers } = require("./drovers.js")

// what I think is happening: an import from journey.js, where we are specifically using the journeyMaker function
const { journeyMaker } = require("./journey.js")

// what I think is happening: a variable representing the number of cattle that will need to be drove for the current session
const cattleToDrive = 50

// what I think is happening: a variable that calls the function to select the drovers(based on the number of cattle that are REQUIRED to be drove). This will return an array of objects which will be used in the console.log() messages near the bottom of the file
const drovers = hireDrovers(cattleToDrive)

// what I think is happening: a variable that calls the function to gather which cattle types will be drove(based on the number of cattle that are REQUIRED to be drove) during this current session. This will return an array of objects which will be used in the console.log() messages near the bottom of the file
const cattle = roundup(cattleToDrive)

// what I think is happening: a variable that calls the function to generate the path in which this current session will be traveled. This will return an array of strings which will be used in the console.log() messages near the bottom of the file
const journey = journeyMaker()

// what I think is happening: a lovely console.log() message showing the itinerary of the current session
console.log(`
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\\|/         (__)
     '\------(oo)
       ||   (__)               \\|/
       ||w--||     \\|/
   \\|/
            \\|/                     (__)
                             '\------(oo)
                               ||   (__)
                               ||w--||     \\|/
`)

console.log(`You will be accompanying ${drovers.length} drovers as they drive ${cattleToDrive} cattle to Old Red's Ranch for grazing`)
console.log(`\nThe herd is made of up the following cattle:`)


const cowBreedArray = []
for (const cow of cattle) {
    cowBreedArray.push(cow.breed)
}
console.log(`${cowBreedArray.join(", ")}`)

console.log("\nHere is the team of drovers you will be joining")
for (const drover of drovers) {
    console.log(`\t* ${drover.first_name} ${drover.last_name}`)
}

console.log("\n\nYour journey will take you through the wildness of the American Midwest and across the following terrain")
for (const area of journey) {
    console.log(`\t* ${area}`)
}
