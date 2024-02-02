function calculate_age(dob)
{ 
var diff_ms = Date.now() - dob.getTime();
var age_dt = new Date(diff_ms); 

return Math.abs(age_dt.getUTCFullYear() - 1970);
}
function ts_to_readable_time(timestamp, showsecond = false, ltext = '') {
var seconds = Math.floor(Date.now() / 1000) - timestamp;
var minutes = Math.floor(seconds / 60);
var hours = Math.floor(minutes / 60);
var days = Math.floor(hours / 24);
var months = Math.floor(days / 30);
var years = Math.floor(months / 12);

var output = '';

if (years > 0) {
output += years + ' year';
if (years > 1) output += 's';
output += ', ';
}

if (months > 0) {
output += (months % 12) + ' month';
if (months % 12 > 1) output += 's';
output += ', ';
}

if (days > 0) {
output += (days % 30) + ' day';
if (days % 30 > 1) output += 's';
output += ', ';
}

if (hours > 0) {
output += (hours % 24) + ' hour';
if (hours % 24 > 1) output += 's';
output += ', ';
}

if (minutes > 0) {
output += (minutes % 60) + ' minute';
if (minutes % 60 > 1) output += 's';
output += ', ';
}

if (showsecond || (days == 0 && hours == 0 && minutes == 0)) {
output += (seconds % 60) + ' second';
if (seconds % 60 > 1) output += 's';
output += ', ';
}

output = output.trim().replace(/,\s*$/, '');

if (output.includes(',')) {
var lastCommaPos = output.lastIndexOf(',');
output = output.slice(0, lastCommaPos) + ' and' + output.slice(lastCommaPos + 1);
}

output += ltext;

return output;
}
function createLinkListItem(href, text) {
var listItem = document.createElement("li");
var link = document.createElement("a");
link.target = "_blank";
link.href = href;
link.textContent = text;
listItem.appendChild(link);
return listItem;
}