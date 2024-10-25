let now = new Date(1646432432229); // скільки мілісікунд пройшло від 1970 1січня
let century = new Date(2100, // Year 2100
0, // January
1, // 1st
2, 3, 4, 5); // 02:03:04.005, local
// d.setFullYear(d.getFullYear() + 1); 
// d.setMonth(d.getMonth() + 3, d.getDate() + 14);
// d.setTime(d.getTime() + 30000);


let d = new Date(2020, 0, 1, 17, 10, 30); // 5:10:30pm on NewYear's Day 2020
console.log(d.toString()) // => "Wed Jan 01 2020 17:10:30 GMT-0800 (Pacific Standard Time)"
d.toUTCString() // => "Thu, 02 Jan 2020 01:10:30 GMT"
d.toLocaleDateString() // => "1/1/2020": 'en-US' locale
d.toLocaleTimeString() // => "5:10:30 PM": 'en-US' locale
d.toISOString() 
console.log(century.toISOString())