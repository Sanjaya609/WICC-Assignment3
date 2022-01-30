let inputString= "This is orange juice";
let position = inputString.search("orange");
if (position===-1){
    console.log(`'orange' is not present in "${inputString}"`);
}else{
    console.log(`'orange' is  present in "${inputString}"`);
}
