const prompt=require('prompt-sync')();
var string= prompt("Enter a string: ");
console.log(string);
//console.log(string.charAt(0));
let stringArray=string.split("")
//console.log(stringArray);
function vowel(string){
    let vowelCount=0;
    for(i=0;i<string.length-1;i++){
        if(string.charAt(i).toLowerCase==='a'||string.charAt(i)==='e'||string.charAt(i)==='i'||string.charAt(i)==='o'||string.charAt(i)==='u'){
        vowelCount+=1;
    }
    return console.log(`${string} contains ${vowelCount} vowel`);
}
}
vowel(string);