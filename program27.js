const prompt=require('prompt-sync')();
var dec= parseInt(prompt("Enter decimal input: "));
var choice= prompt("Hexadecimal or Binary or Octal (H/B/O): ");

function decTo(n, base) {
switch (base)  
{  
case 'B':  
return parseInt(n, 10).toString(2);
break;  
case 'H':  
return parseInt(n, 10).toString(16);
break;  
case 'O':  
return parseInt(n, 10).toString(8);
break;  
default:  
return("Wrong input.........");  
}  
}

console.log(` Result of ${dec} into ${choice} is  ${decTo(dec,choice)}`);
