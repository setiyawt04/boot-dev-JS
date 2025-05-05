// let myName;
// console.log(myName); // undefined


// let myName = null;
// console.log(myName); // null

// To be clear, null is its own type according to the ECMAScript specification, but the "object" type report is a historical quirk that can't be easily fixed now.

let sentMessages = null;
let deliveredMessages = null;
let failedMessages = null;

// don't touch below this line

console.log("Sent is null:", sentMessages === null);
console.log("Delivered is null:", deliveredMessages === null);
console.log("Failed is null:", failedMessages === null);
