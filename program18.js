
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
console.log(detect_data_type(true));
console.log(detect_data_type(15.4));
console.log(detect_data_type("INFODEV"));
console.log(detect_data_type(func));
console.log(detect_data_type(obj));