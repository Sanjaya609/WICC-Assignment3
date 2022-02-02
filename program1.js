const prompt=require('prompt-sync')();
let string= prompt("Enter a string ");

let length= string.length;
let lastChar= string.charAt(length-1);
console.log(`The length of  ${string} is ${length}`);
console.log(`The last character of  ${string} is ${lastChar}`);