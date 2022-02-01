const prompt=require('prompt-sync')();
var num= parseInt(prompt("Enter a number: "));

const OddEven=(num)=>{
    if(num%2==0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}
OddEven(num);