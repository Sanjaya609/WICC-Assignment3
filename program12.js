const prompt=require('prompt-sync')();
var firstNum= Number(prompt("Enter first number: "));
var secondNum= Number(prompt("Enter second number: "));

const Sum=(fnum,lnum)=>{return fnum+lnum};
console.log(Sum(firstNum,secondNum));