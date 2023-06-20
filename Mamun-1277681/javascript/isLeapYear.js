function isLeapYear(year){
    const leapYear = year%4;
    if(leapYear===0){
        return false;
    }
    else{
        return true;
    }
}

const leapYear = isLeapYear(2023);
console.log(leapYear)