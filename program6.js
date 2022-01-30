const prompt=require('prompt-sync')();
var string= prompt("Enter a string: ");
var upperCount=0; var lowerCount=0;
for (let i=0;i<string.length;i++){
    if(string[i]>="A" && string[i]<="Z")
    {
        upperCount+=1;
    }else if(string[i]>="a"&&string[i]<="z")
    {
        lowerCount+=1;
    }
}
console.log(`${string} contains ${upperCount} uppercases and ${lowerCount} lowercases`);