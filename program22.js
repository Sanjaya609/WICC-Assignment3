const prompt=require('prompt-sync')();

var Array=[];
var arraySize= prompt("Enter the number of elements you want to enter: ");

for(i=0;i<arraySize;i++){
    Array[i]= prompt("values:  ");
}

var choice= prompt("You want to enter index? (Y/N): ");

var items;
if(choice.toUpperCase()==='Y'){
    items= prompt("Enter number of last elements you want to see:  ");
    function lastElement(n){
        return Array.slice(-n);
    }   
    console.log(lastElement(items,Array));
}else{ 
 console.log(Array[Array.length-1]);
}
 


