// what I think is happening: This file houses the main function called 'roundup', where based on the size of the herd when called, it gathers a random assortment of cattle types until the counter is no longer less than the herd size. The function returns an array of objects.

// what I think this is: an import from database.js. This looks different from ESM, but serves the same purpose in modularizing various values. 
const { database } = require("./database.js")

// what I think this is: a function that passes a param for the size of the herd(which was not actually used in the intial commit). Everything in this function will run when roundup is called
const roundup = (herdSize) => {
    
    // what I think this is: a variable that defines an empty array. This will fill up via a push array method by the end of the function
    const cattle = []

    // what I think this is: a variable that goes to the database and defines the all of the types of cattle (array of objects)
    const types = database.cattleTypes

    // what I think this is: a standard for loop that starts the counter at 0, goes until the counter becomes greater than the size(which size was not exactly defined initially), and is incrementing by 1. This will ultimately fill up the cattle array
    for (let counter = 0; counter < herdSize; counter++) {

        // what I think this is: a variable that acts as a randomizer
        // Math.floor rounds up the number to the nearest whole 
        // Math.random generates a random floating point between 0 and 1
        // types.length is the number value for the length of types
        const randomType = Math.floor(Math.random() * types.length)
        
        // what I think this is: a variable that uses types and calls the specific type of a cattle based on the position in the types array
        const animal = types[randomType]

        // what I think this is: an array method that adds this animal to the cattle array
        cattle.push(animal)
    }

    // what I think this is: a return statement that appears when the roundup function is executed. This will show all cattle types in the order that they came, an array of objects
    return cattle
}

// what I think this is: an export for a specific value. In this case, we are exporting the roundup function, so that when it is used in another file (through referencing require("./cattle.js")) and we pass a number to represent herdSize, we will have access to the cattle array of objects when called.
module.exports = { roundup }
