const prompt=require('prompt-sync')();

var countryName=[];
var listSize= prompt("Enter the number of countries you want to enter: ");

for(i=0;i<listSize;i++){
    countryName[i]= prompt("Country Name:  ");
}


function longestCountry(countryName){
    return countryName.reduce((lastName,country)=>{
        if (lastName.length>country.length){
            return lastName;
        }else{
            return country;
        }
    })
}
let longestCountryName=longestCountry(countryName);

console.log(`The longest country name among ${countryName} is ${longestCountryName}`);