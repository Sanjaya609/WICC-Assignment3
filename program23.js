/* The shift method changes the original array by removing the first item of an array 
and returns the removed item from the array.
The unshift method does opposite of shift method i.e it adds new element to the first
index of original array and returns the whole array.
*/

//Taking Array from the user
const prompt=require('prompt-sync')();

var Array=[];
var arraySize= prompt("Enter the number of elements you want to enter: ");

for(i=0;i<arraySize;i++){
    Array[i]= prompt("values:  ");
}

//Using shift method to remove first item of array
console.log(`The first item of Array i.e ${Array[0]} will be removed from original array [${Array}]`); 
Array.shift();
console.log(Array);

//Using unshift method to add new value to first index of array
console.log(`100 will be added to the first position of shifted array [${Array}]`); 
Array.unshift("100");
console.log(Array);
