const prompt=require('prompt-sync')();
var string= prompt("Enter a string: ");


function oddIndex(string){
    let result="";
    for(i=0;i<=string.length-1;i+=2){
        result+= string.charAt(i);
    }
    return result;
}
console.log(oddIndex(string));