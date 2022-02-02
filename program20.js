/* const prompt=require('prompt-sync')();
var funcName= Number(prompt("Enter function name: "));

var func = new Function("return function"+ funcName +"(){ }")();

func();



 */


function hello(){
    return this.ca.name;
}
console.log(hello());