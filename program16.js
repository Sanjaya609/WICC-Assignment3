const prompt=require('prompt-sync')();

var start= parseInt(prompt("Enter the starting number of range: "));
var end= parseInt(prompt("Enter the ending number of range: "));

function oddWithinRange(start,end){
    for(i=start;i<=end;i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}
oddWithinRange(start,end);