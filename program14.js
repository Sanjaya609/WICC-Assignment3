const prompt=require('prompt-sync')();
var Age= parseInt(prompt("Enter the age of a person: "));

function checkEligiblity(Age){
    if (Age>=18&&Age<=200){
        console.log("You're eligible to vote. :) ");
    }else{
        console.log("Sorry! You're not eligible to vote. ");
    }
}

checkEligiblity(Age);