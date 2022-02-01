const prompt=require('prompt-sync')();
var radius= Number(prompt("Enter the radius of circle: "));
var pi=3.14;
const Circumference=(pi,rad)=>{
    return 2*pi*rad;
}



const Area=(pi,rad)=>{
    return pi*rad**2;
    //return pi*Math.pow(rad,2);
}

console.log(`The circumference of circle with the radius ${radius} is ${Circumference(pi,radius)}`);
console.log(`The area of circle with the radius ${radius} is ${Area(pi,radius)}`);
