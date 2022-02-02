
function dataType(value)
{
var dataTypes = [Function, RegExp, Number, String, Boolean, Object];
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (let i=0;i<dataTypes.length;i++) 
     {
            if (value instanceof dataTypes[i])
            {
                return dataTypes[i];
            }
      }
    }
    
    return typeof value;
}
const func=()=>{
    return "hello";
}
const obj={
    a:1,
    b:2
}
console.log(dataType(true));
console.log(dataType(15.4));
console.log(dataType("INFODEV"));
console.log(dataType(func));
console.log(dataType(obj));