function navstart()
{
// Create p element with id "fulldate"
var fulldateElement = document.createElement("p");
fulldateElement.id = "fulldate";

// Create p element with id "greetings"
var greetingsElement = document.createElement("p");
greetingsElement.id = "greetings";

// Append elements to the document body or any other target element
document.body.appendChild(fulldateElement);
document.body.appendChild(greetingsElement);
displaytime();
setInterval(displaytime, 1000);
}//end
function displaytime()
{
//declare a date to display at the top.
const dates = new Date();
const options = {
weekday: "long", 
month: "long", 
day: "numeric",
year: "numeric"
};
const timeformat=localStorage.getItem("timeformat");
const toptions = {
hour: "numeric",
minute: "numeric",
second: "numeric",
hour12: (timeformat==="12"?true:false)
};
var ddate = dates.toLocaleDateString("EN-US", options) + ", " + dates.toLocaleTimeString("EN-US", toptions);
document.getElementById("fulldate").textContent = ddate;
var d = dates.getHours();
var y = dates.getFullYear();
var m = dates.getMonth();
var mn = dates.getMinutes();
var dy = dates.getDate();
var dt = "";
var currentage=calculate_age(new Date(2006, 6, 26));
if(m == 6 && dy == 26)
dt += "This is <b id=\"ownername\"></b>'s " + currentage + " year"+(currentage===1?"":"s")+" Birthday. ";
if((m == 11 && dy == 31) || (m == 0 && dy == 1))
dt += "Happy new year! ";
else if(m == 1 && dy == 14)
dt += "Happy valentine's day! ";
if(d >= 22 || (d >= 0 && d < 6))
dt += "Wow, thank you "+get_storage("visitname","visiter")+" for visiting over sleep time!";
else if(d >= 6 && d < 11)
dt += "Good morning "+get_storage("visitname","visiter")+", thanks for visiting to my website!";
else if(d >= 11 && d < 16)
dt += "Good afternoon "+get_storage("visitname","visiter")+", thank you for visiting to my website!";
else
dt += "Good evening "+get_storage("visitname","visiter")+", have a nice day!";
document.getElementById("greetings").textContent = dt;
var ownernameElement = document.getElementById("ownername");
if (ownernameElement)
{
ownernameElement.textContent = ownername;
}
}//end of nav