const prompt=require('prompt-sync')();
console.log("Enter your date of birth in YYYY/MM/DD format: ");
var Year= prompt("Year: ");
var Month= prompt("Month: ");
var Day= prompt("Day: ");



var DOB= new Date(Year,Month,Day);

function calculate_age(DOB) { 
    var currentDate= new Date();
    var diff_ms = Date.now() - DOB.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculate_age(new Date(1962, 1, 1)));
