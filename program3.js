const prompt=require('prompt-sync')();
let string= prompt("Enter a string ");
string=string.toLowerCase();
let stringArray=string.split("");//creating array of character of string


//function to create new array without duplication
function toUniqueString(char){
    var newArr = [];
    for (var i = 0; i < char.length; i++) {
        if (newArr.indexOf(char[i]) === -1) {
            newArr.push(char[i]);
        }
    }
  return newArr;
  }
let uniqueString= toUniqueString(stringArray);
console.log(uniqueString.join(""));