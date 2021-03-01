const myVar = setInterval(myTimer, 100);
var moment = require('moment');

function myTimer() {
    document.getElementById("time").innerHTML = moment().format("MM/DD/YYYY hh:mm A");
}

function dateFunction() {
    const x = document.getElementById("dateInput").value;
    const date1 = moment(x);
    const date2 = moment();
    const diff = date1.diff(date2, 'days') + " days from now";

    document.getElementById("days").innerHTML = diff;
    
}