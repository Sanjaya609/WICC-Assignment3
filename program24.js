const date= new Date();
//console.log(date);
let monthVal= date.getMonth()+1;//getMonth returns number of months from 0-11

function monthName(monthVal){
        switch(monthVal){
        case 1:
            month="January";
            break;
        case 2:
            month="February";
            break;
        case 3:
            month="March";
            break;
        case 4:
            month="April";
            break;
        case 5:
            month="May";
            break;
        case 6:
            month="Jun";
            break;
        case 7:
            month="July";
            break;
        case 8:
            month="August";
            break;
        case 9:
            month="September";
            break;
        case 10:
            month="October";
            break;
        case 11:
            month="November";
            break;
        case 12:
            month="December";
            break;
        }
        return month;
    }

monthName(monthVal);
console.log(`It's ${month}!`);