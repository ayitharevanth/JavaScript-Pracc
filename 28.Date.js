/*
Date object is used for working with dates and times. It allows you to create, manipulate, and format dates and times. 
*/

// Current date and time
const currentDate = new Date();

// Specific date and time (year, month (0-11), day, hour, minute, second, millisecond)
const specificDate = new Date(2023, 0, 1, 12, 0, 0, 0); // January is 0 in JavaScript

// Creating a Date object from a string (dateString format: "Month Day, Year Hour:Minute:Second")
const dateString = "October 11, 2023 14:30:00";
const fromString = new Date(dateString);


const date = new Date();

const year = date.getFullYear();
const month = date.getMonth(); // 0-based (January is 0)
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

// Modifying the date object using set methods
date.setFullYear(year + 1); // Setting the year to next year
date.setMonth(month + 1); // Setting the month to next month (0-based, so be careful about December)
date.setDate(day + 1); // Setting the day to tomorrow
date.setHours(hours + 1); // Setting the hours to one hour later
date.setMinutes(minutes + 1); // Setting the minutes to one minute later
date.setSeconds(seconds + 1); // Setting the seconds to one second later
date.setMilliseconds(milliseconds + 1); // Setting the milliseconds to one millisecond later

console.log(date);


const timestamp = Date.now(); // Current timestamp in milliseconds

const dateFromTimestamp = new Date(timestamp); // Convert timestamp to Date object
