/*
Common truthy values include:

    true
    42 (any number that isn't 0)
    "hello" (any non-empty string)
    [] (an empty array)
    {} (an empty object)
    function() {} (an empty function)

Common falsy values include:

    false
    0
    "" (an empty string)
    null
    undefined
    NaN (Not a Number)

*/

const userCredits = -2;

// don't touch above this line

if (userCredits == true) {
  console.log("Sending message...");
} else {
  console.log("Not enough credits.");
}
