const prompt=require('prompt-sync')();
var string= prompt("Enter a string: ");

let stringArray=string.split("");
//console.log(stringArray);
let sortedArray= stringArray.sort();
//console.log(sortedArray);
let sortedString= sortedArray.join("");
console.log(sortedString);