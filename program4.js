let inputString="hello_i_am_string";
let stringArray= inputString.split("_");
//console.log(stringArray);

//for hello i am string
let output1= stringArray.join(" ");
console.log(output1);

//for HELLOIAMSTRING
let output2= stringArray.join("").toUpperCase();
console.log(output2);


//for Hello I Am String
var output=[];
for (var i=0;i<stringArray.length;i++){
    output[i]=stringArray[i].charAt(0).toUpperCase()+stringArray[i].slice(1);
}
let output3=output.join(" ");
console.log(output3);


// for helloIAmString
console.log(stringArray);



//for Hello i am string
stringArray= stringArray[0].charAt(0).toUpperCase()+stringArray[0].slice(1);
console.log(stringArray);