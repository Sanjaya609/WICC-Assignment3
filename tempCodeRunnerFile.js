
let dob = prompt("Enter your DOB in YYYY/MM/DD format");

function calcAge(dateOfBirth){
    
    let currentDate = new Date();
    let birthDate = new Date(dateOfBirth);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let m = currentDate.getMonth() - birthDate.getMonth();
    if (m < 0) {
        age--;
    }
    return age;
}


console.log(`Your current age is: ${calcAge(dob)}`);