const prompt=require('prompt-sync')();
var string= prompt("Enter a string ");

/*
var reverseString="";
for(let i=string.length-1;i>=0;i--){
    reverseString+=string[i];
}
console.log(reverseString);

*/

let stringArray=string.split("");
//console.log(stringArray);
let reverseArray= stringArray.reverse();
//Sconsole.log(reverseArray);
let reverseString= reverseArray.join("");
console.log(reverseString);

