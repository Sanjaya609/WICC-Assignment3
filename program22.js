const prompt=require('prompt-sync')();

var Array=[];
var arraySize= prompt("Enter the number of elements you want to enter: ");

for(i=0;i<arraySize;i++){
    Array[i]= prompt("values:  ");
}

var choice= prompt("You want to enter index? (Y/N): ");

//console.log(choice.toUpperCase());
var items;
if(choice.toUpperCase()==='Y'){
    items= prompt("Enter the index from which you want to see elements: ");
}else{
    items=arraySize;
}

function lastElement(n){
    if (n){
        return Array.slice(-n);
    }else{
        return Array[arraySize];
    }
}   
console.log(lastElement(items,arraySize));