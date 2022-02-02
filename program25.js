const date= new Date();

console.log(`Today is ${date.toLocaleString('en-US')}`)
let month=date.getMonth();


function newDate(date,month){
    let newMonth=month+3;
    date.setMonth(newMonth);
    return date;
}
newDate(date,month);
let day=date.getDay();
console.log(`Three months from today is ${date.toLocaleString('en-US')}}`);
