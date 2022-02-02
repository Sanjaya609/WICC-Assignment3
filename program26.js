const prompt=require('prompt-sync')();
let DOB= prompt("Enter your DOB in YYYY/MM/DD format: ");

//console.log(date);

function Age(DOB){
    let date= new Date(DOB);
    let currentDate= new Date();
    let age= currentDate.getFullYear() - date.getFullYear();
    let i= currentDate.getMonth()-date.getMonth();
    if(i<0){
        age--;
    }
    return age;
}
let age= Age(DOB);
console.log(`You're ${age} years old`);
