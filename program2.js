const prompt=require('prompt-sync')();
let string= prompt("Enter a string: ");
string=string.toLowerCase();

let char= prompt("Enter character to check: ")
char=char.toLowerCase();
let stringArray= string.split("");
let count=0;
if (stringArray.lastIndexOf(`${char}`)=== -1){
    console.log(`${string} doesn't contain ${char}`)
}else{
    for(let i=0;i<=string.length-1;i++){  
        if(char===stringArray[i]){
            count+=1;
        }
    }
}
console.log(`${char} occurs ${count} times in ${string}`);