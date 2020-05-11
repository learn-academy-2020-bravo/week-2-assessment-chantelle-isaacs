// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


// create a function that takes in a number
const divizByThree = (number) => {
 // create a conditional that checks if the number modulo is = to 0
    if (number % 3 === 0){
        // if it is, return it is div by three
        return `${number} is divisible by three`
    }
    // if number modulo is NOT = 0 
    else {
        // return it is not div by three
        return `${number} is not divisible by three`
    }
}
console.log (divizByThree(num1))
console.log (divizByThree(num2))
console.log (divizByThree(num3))


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

// create a function that takes in an array
const capitalizer = (array) => {
    // create a new array to hold the capitalized words
    let capArray = []
    // map over the array 
    capArray = array.map(value => {
        //change the value at index0 of each word to a capital and then concat it to the remainder of the substring
        return value[0].toUpperCase() + value.substring(1)
    })
    //return the capitalized array
    return capArray
}

console.log(capitalizer(randomNouns))


// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]


//create a function that filters out the array
const numsOnly = (array) => {
    //filter through the array use the typeof operator to retrieve "number"
    let numbers = array.filter(value => typeof value === "number")
    //sort the numbers with a comparison filter
    numbers.sort((a,b) => a-b)
    return numbers
}
console.log(numsOnly(mixedDataArray))
//return arrays




// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

//create a function that takes in a string
const vowelFinder = (string) => {
    //split that string into an array
    let stringArray = string.split("")
    //use .findIndex to find the first instance in the array that there is a vowel and returns truthy
    let foundTheVowel = stringArray.findIndex(i => i === "a" || i === "e" || i === "i" || i === "o" || i === "u")
    // return the index of the vowel
    return foundTheVowel
}

console.log(vowelFinder(vowelTester1))
console.log(vowelFinder(vowelTester2))


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

// create a function that take in two numbers separated by a mathematical operator
const doinMath = (num1, op, num2) => {
    // if the operator is a / and the second number is 0, it won't work
    if (op === "/" && num2 === 0) {
        return "Can't divide by zero!"
    // create conditionals that evaluate the operator's string and returns the two numbers doin the math
    } else if (op === "+"){
        return num1+num2
    } else if (op === "-"){
        return num1-num2
    } else if (op === "*"){
        return num1*num2
    } else if (op === "/"){
        return num1/num2
    // just in case someone doesn't enter the right stuff in the input
    } else {
        return "You're a nincompoop."
    }
}

// Uncomment and use the following console logs to test your function
console.log(doinMath(3, "*", 9))
// Expected output: 27

console.log(doinMath(16, "+", 3))
// Expected output: 19

console.log(doinMath(89, "/", 0))
// Expected output: "Can't divide by 0!"
