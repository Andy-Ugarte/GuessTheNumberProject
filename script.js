/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/

function randomNumber(userGuess, computersNumber) {

    // YOUR CODE BELOW
    if (userGuess < 1 || userGuess > 100) {
        //console.log(userGuess);
        //console.log(computersNumber);
        return "guess is out of scope"
    }
    else if (userGuess == computersNumber){
        return "Correct!!";
    }  
    else if (userGuess < computersNumber){
        return "Higher!";
    }
    else {
        return "Lower!";
    }

    // YOUR CODE ABOVE
};


//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/
//var firstGuess = 1;
var currentNumber = 1; // = Math.floor(Math.random() * (100)) + 1;
console.log("start number " + currentNumber);
function startCompGuess(num) {
    firstGuess = num;
    currentNumber = num;
    return num;

    // This should return a string that denotes the first guessed number

    // YOUR CODE ...
}
// let currentNumber = 1;
let lowest;
let highest;

function compGuess(reply) {
    console.log("reply =" + reply);
    console.log("currentNumber =" + currentNumber);
    if (reply == "lower"){
        highest = currentNumber - 1;
        createGuess();
    } else if (reply == "higher"){
        lowest = currentNumber + 1;
        createGuess();
    } else {
        // return reply;
    }
    return (currentNumber);
   
   
   
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating the logic and response.

    This should return a string indicating the computers response.
    */
  
}


function createGuess(){
    currentNumber = Math.floor(Math.random() * () //lowest/highest to create range)) + 1;
    console.log("createGuess =" + currentNumber)
    return currentNumber;
} 



// ### Ticket: `#U2_02`
// - **Given** there is a need to store a value in the global scope of the `script.js` file.
// - **Then** create a variable called `currentNumber`.
// - **And** assign a value of 1 to the variable.
// - **Given** that a value is stored in the `currentNumber` variable.
// - **Then** return a string that states, "Is your number <`currentNumber`>?" within the `startCompGuess()` function.

// ### Ticket: `#U2_03`
// - **Given** that there is a variable to store a current value.
// - **Then** create a new function outside of all other functions as a **block body arrow function**, called `createGuess`.
// - **Then**, within the newly created function, reassign the `currentNumber` variable to house a random number.
// - **Then** return the reassigned variable.

// **Hint:**
// [Math Object](https://www.w3schools.com/jsref/jsref_obj_math.asp)

// ### Ticket: `#U2_04`
// - **Given** the `Lower` button is clicked. 
// - **Then** return a string that states, "Your number is lower? Is it <`currentNumber`>?".
// - **Given** the `Higher` button is clicked. 
// - **Then** return a string that states, "Your number is higher? Is it <`currentNumber`>?".
// - **Given** the `That's it!` button is clicked.
// - **Then** return a string that states, "I knew it was <`currentNumber`>!"

// **Ticket Requirement**
// - This conditional needs to be a switch statement.

// ### Ticket: `#U2_05`
// Refactoring your values.
// - **Given** the `Lower` button is clicked.
// - **Then** the `currentValue` should be stored in a new variable called `lowest`.
// - **And** the `createGues()` should consider this variable.
// - **Given** the `Higher` button is clicked.
// - **Then** the `currentValue` should be stored in a variable called `highest`.
// - **And** the `createGues()` should consider this variable.

// **Note:** Consider initial values.

// ### Ticket: `#U2_06`
// Considering the `compGuess()` conditional
// - **Given** the `Lower` button is clicked.
// - **Then** a new guess should be invoked.
// - **And** the value should be reassigned to the appropriate variable.
// - **Given** the `Higher` button is clicked.
// - **Then** a new guess should be invoked.
// - **And** the value should be reassigned to the appropriate variable.

// # Stretch Goals
// ### Note:
// Stretch goals should not be attempted until previous tickets have been completed and tested.

// ## Ticket `#U2_07`
// - Update the `README.md` in the **root** directory.
//   - Detail the concept of this project in psuedo code within the document.
//   -  **[Pseudo Code Article](https://www.geeksforgeeks.org/how-to-write-a-pseudo-code/)**
//   -  [What is a README file?](https://www.mygreatlearning.com/blog/readme-file/)
// - Deploy this project through **GitHub Pages**.
//    -  Update your **README.md** with a hyperlink to the deployed URL.
// - Provide a **Error Handling** condition within the `randomNumber()` function that will respond with a "Please input a number between 1 and 100" if a user does not provide a value.
// - Create a variable that will track the number of guesses by the user and update the return within `randomNumber()` to display how many guesses it took to get the correct value.
