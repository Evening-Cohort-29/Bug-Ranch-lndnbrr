// what I think is happening: This file houses the main function called 'journeyMaker', where it generates a path for herders and herd to traverse through. This is done through various functions OUTSIDE of the scope of the journeyMaker function and the for loops INSIDE of the scope of the journeyMaker function. The function returns an array of strings

// what I think this is: an import from utils.js. This looks different from ESM, but serves the same purpose in modularizing various values
const { randomize } = require("./utils.js")

// what I think is happening: a function that, when called, will return a random number between 1-4
const createRivers = () => {
    const rivers = Math.floor(Math.random() * 3) + 1
    return rivers
}

// what I think is happening: a function that, when called, will return a random number between 1-3
const createMountains = () => {
    const mountains = Math.floor(Math.random() * 2) + 1
    return mountains
}

// what I think is happening: a function that, when called, will return a random number between 1-3
const createForests = () => {
    const forests = Math.floor(Math.random() * 2) + 1
    return forests
}

// what I think is happening: a function that, when called, will return a random number between 1-5
const createPlains = () => {
    const plains = Math.floor(Math.random() * 4) + 1
    return plains
}

// what I think is happening: a function that, when called, will run the for loops for each terrain type in order. When an instance of a loop is completed, the corresponsing string for that loop will be pushed to the journey array. This function will return the array in a randomized order
const journeyMaker = () => {
    
    // what I think is happening: an empty array that will be filled with string values when a for loop is executed
    const journey = []

    // what I think is happening: an object that holds a key (terrain name) that will represent it's corresponding value(a function that returns a number) 
    const areas = {
        rivers: createRivers(),
        forests: createForests(),
        mountains: createMountains(),
        plains: createPlains()
    }

    // what I think is happening: a for loop that starts at 0, will run until the conditional statement is no longer true(when it's no longer less than the number of rivers generated) and will positively increment by one. For everytime it loops, it will push a string labeled "river" to the journey array
    for (let riverNumber = 0; riverNumber < areas.rivers; riverNumber++) {
        journey.push("river")
    }

    // what I think is happening: a for loop that starts at 0, will run until the conditional statement is no longer true(when it's no longer less than the number of forests generated) and will positively increment by one. For everytime it loops, it will push a string labeled "forest" to the journey array
    for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
        journey.push("forest")
    }

    // what I think is happening: a for loop that starts at 0, will run until the conditional statement is no longer true(when it's no longer less than the number of mountains generated) and will positively increment by one. For everytime it loops, it will push a string labeled "mountain" to the journey array
    for (let mountainNumber = 0; mountainNumber < areas.mountains; mountainNumber++) {
        journey.push("mountain")
    }

    // what I think is happening: a for loop that starts at 0, will run until the conditional statement is no longer true(when it's no longer less than the number of plains generated) and will positively increment by one. For everytime it loops, it will push a string labeled "plain" to the journey array
    for (let plainNumber = 0; plainNumber < areas.plains; plainNumber++) {
        journey.push("plain")
    }

    // what I think is happening: a return statement that will return the journey array, but will return it in a randomized order
    return randomize(journey)
}

// what I think this is: an export for a specific value. In this case, we are exporting the journeyMaker function, so that when it is used in another file (through referencing require("./journey.js")), we will have access to the journey array when called.
module.exports = { journeyMaker }
