const prompt=require('prompt-sync')();
var Num= prompt("Enter a number: ");


//If we treat Number as a string
var reverseNum="";
for(let i=Num.length-1;i>=0;i--){
    reverseNum+=Num[i];
}
console.log(reverseNum);

/*
var reverse= Num.split("").reverse().join("");

console.log(reverse);
*/

/* function reverseNum(Num){
    let reverse=0;remainder=0;
    while (Num!=0) {
        remainder = Num % 10;
        reverse = reverse * 10 + remainder;
        Num /= 10;
    }
}
reverseNum(Num); */
