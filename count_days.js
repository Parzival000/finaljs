const numDays = (...data) => {
   
    let date1 = new Date(data[0])
    let date2 = new Date(data[1])

    var Time = date2.getTime() - date1.getTime();
    var Day = Time / (1000 * 3600 * 24);

    return  Day
}

console.log(numDays("June-12-2019","June 20, 2019"))
console.log(numDays("December-28-2018","January 1, 2019"))
console.log(numDays("June-25-2019","July 2, 2019"))