const date= new Date();

console.log(`Today is ${date.toLocaleString('en-US')}`)
let month=date.getMonth();


function newDate(date,month){
    let newMonth=month+3;
    date.setMonth(newMonth);
    return date;
}
newDate(date,month);

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = days[date.getDay()];

console.log(`Three months from today is ${date.toLocaleString('en-US')}} and ${day}`);
