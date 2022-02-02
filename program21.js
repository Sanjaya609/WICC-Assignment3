const prompt=require('prompt-sync')();
var inputString= prompt("Enter a string: ");

/* const stringArray=(inputString)=>{
    let Array= inputString.split("");
    return Array;
}
console.log(stringArray(inputString)); */


const stringArray=(inputString)=>{
    let Array=[];
    for(let i=0;i<inputString.length;i++){
        Array[i]=inputString.charAt(i);
    }
    return Array;
}
console.log(stringArray(inputString));