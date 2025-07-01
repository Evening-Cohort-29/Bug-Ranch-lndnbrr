// what I think is happening: This file houses the main function called 'hireDrovers', where based on the size of the herd when called, it gathers a random assortment of drovers until the counter is no longer less than the number of drovers needed. The function returns an array of objects

// what I think this is: an import from database.js. This looks different from ESM, but serves the same purpose in modularizing various values
const { database } = require("./database.js")

// what I think is happening: a function that, when called with the param of representing cattleHerdSize, will run a for loop based on the number of drovers/herders needed(through numberNeeded). Inside of the loop, a random header id is pulled from the pool of drovers, and that id is looked up and then pushed to the droverCount array. When the loop is complete, this function will return an array (droverCount) of objects
const hireDrovers = (cattleHerdSize) => {

    // what I think is happening: an empty array that will be filled with objects everytime a for loop is executed
    const droverCount = []

    // what I think this is: a variable that goes to the database and defines the all of the types of drovers (array of objects)
    const allDrovers = database.drovers

    // what I think this is: a variable that takes the param (which should be a number when called) and divides the number by 10. This represents that for every 10 cattle, there should be 1 herder present
    const numberNeeded = cattleHerdSize / 10

    // what I think this is: a standard for loop that starts the counter at 0, goes until the counter is no longer less thanthe number represented by numberNeeded, and is incrementing by 1. This will ultimately fill up the droverCount array
    for (let counter = 0; counter < numberNeeded; counter++) {

        // what I think this is: a variable that acts as a randomizer
        // Math.floor rounds up the number to the nearest whole 
        // Math.random generates a random floating point between 0 and 1
        // allDrovers.length is the number value for the length of allDrovers
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)

        // what I think is happening: an array method that will push the result of "(allDrovers[randomHerderId])"
            // what is happening inside of (allDrovers[randomHerderId]) is that allDrovers represents a seperate database that is an array itself, and since you can index an array to select one of the positions inside of it(selecting the id in this case), [randomHerderId] is used as an index to find this drover in that seperate database to push into the droverCount array.
        droverCount.push(allDrovers[randomHerderId])
    }

    // what I think this is: a return statement that appears when the hireDrovers function is executed. This will show the assigned drovers based on the cattle herd size, an array of objects
    return droverCount
}

// what I think this is: an export for a specific value. In this case, we are exporting the hireDrovers function, so that when it is used in another file (through referencing require("./drovers.js")), we will have access to the droverCount array when called.
module.exports = { hireDrovers }
