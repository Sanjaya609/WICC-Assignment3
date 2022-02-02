const prompt=require('prompt-sync')();

var Array=[];
var arraySize= prompt("Enter the size of array: ");

for(i=0;i<arraySize;i++){
    Array[i]= prompt("value: ");
}

// took help for this function to return random number.
let min=0;
let max=arraySize;
function randomNum(min,max){
    let possibleNum=max-min+1;
    let n= Math.random()*possibleNum;
    let randomNumber=Math.floor(n)+min;
    
    return randomNumber;
}


let randomIndex=randomNum(min,max);
function randomItem(index){
    return Array[index];
}
console.log(randomItem(randomIndex));

