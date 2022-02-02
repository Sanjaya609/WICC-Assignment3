/* const prompt=require('prompt-sync')();
var funcName= Number(prompt("Enter function name: ")); */

function funcName(){
    return this.getName;
}
console.log(funcName());