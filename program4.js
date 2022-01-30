let inputString="hello_i_am_string";
let stringArray= inputString.split("_");
console.log(stringArray);
let output1= stringArray.join(" ");
console.log(output1);
let output2= stringArray.join("").toUpperCase();
console.log(output2);

console.log(stringArray[0]);
var output=[];
for (var i=0;i<stringArray.length;i++){
    output[i]=stringArray[i].charAt(0).toUpperCase()+stringArray[i].slice(1);
}
let output3=output.join(" ");
console.log(output3);
console.log(stringArray);