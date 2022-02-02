const prompt=require('prompt-sync')();
var string= prompt("Enter a string: ");
function isNum(val) {
    return !isNaN(val);
  }
console.log(isNum(string));
