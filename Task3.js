/* 
    A date is given as an integer of 6 digits. For example, the number 181019 represents October 18, 2019.
    Develop an algorithm that has such a number as input, checks that this number corresponds to a valid date and displays the following result:
    Day: 18
    Month: October
    Year: 2019
*/
let monthsObj = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec"
}
function months(x) {
    if (typeof (x) == "number") {
        date = x.toString()
    }
    var days = date[0] + date[1]
    var year = "20" + date[4] + date[5]
    var month = parseInt(date[2] + date[3]);
    return "days: " + days + " month: " + monthsObj[month] + " year: " + year

}
c = 120456
console.log(months(c))