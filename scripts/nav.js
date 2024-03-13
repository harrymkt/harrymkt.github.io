function navstart()
{
var confg=document.createElement("a");
confg.href="/config";
confg.title="make the site as your preferences!";
confg.textContent="config site";
document.body.appendChild(confg);
// Create h1 element with id "accessibility"
var h1Element = document.createElement("h1");
h1Element.id = "accessibility";
h1Element.textContent = "accessibility links";

// Create first anchor element
var skipToMainContentLink = document.createElement("a");
skipToMainContentLink.href = "#mainc";
skipToMainContentLink.className = "skip-link";
skipToMainContentLink.textContent = "skip to main content";

// Create second anchor element
var skipToNavigationLink = document.createElement("a");
skipToNavigationLink.href = "#navigation";
skipToNavigationLink.className = "skip-link";
skipToNavigationLink.textContent = "skip to navigation";
var skipfooterLink = document.createElement("a");
skipfooterLink.href = "#footersection";
skipfooterLink.className = "skip-link";
skipfooterLink.textContent = "skip to footer";
// Append elements to the document body or any other target element
document.body.appendChild(h1Element);
document.body.appendChild(skipToMainContentLink);
document.body.appendChild(skipToNavigationLink);
document.body.appendChild(skipfooterLink);
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
// Create nav element with id "navigation" and ARIA attributes
var navigationElement = document.createElement("nav");
navigationElement.id = "navigation";
navigationElement.setAttribute("role", "navigation");
navigationElement.setAttribute("aria-label", "main menu");

// Create h1 element inside the nav element
var h1Element = document.createElement("h1");
h1Element.textContent = "main menu";

// Create dl element inside the nav element
var dlElement = document.createElement("dl");

// Append elements to the nav element
navigationElement.appendChild(h1Element);
navigationElement.appendChild(dlElement);

// Append nav element to the document body or any other target element
document.body.appendChild(navigationElement);

// Define pages array
var pages = [
{ name: "Home", url: "/", accesskey: "h" },
{ name: "Projects", url: "/projects/", accesskey: "p" },
{ name: "Useful communities", url: "/community", accesskey: "" },
{ name: "blog", url: "https://hblog.rf.gd", accesskey: "b" }
];

// Get the current URL
var current_url = window.location.pathname;

// Loop through the pages array
for (var i = 0; i < pages.length; i++) {
var page = pages[i];
var class_name = "";
var link_text = page.name;
var onclick_attr = "";

// Normalize the URLs for comparison
//var currentUrlObj = new URL(current_url);
//var pageUrlObj = new URL(page.url);

// Normalize the paths for comparison (remove trailing slashes)
var currentPath = current_url.replace(/\/$/, "");
var pagePath = page.url.replace(/\/$/, "");

// Check if the hosts and normalized paths match
if (currentPath === pagePath) {
class_name = "active";
link_text = page.name + " (current page)";
onclick_attr = "event.preventDefault();";
}

// Create a link element
var linkElement = document.createElement('a');
linkElement.href = page.url;
linkElement.className = class_name;
linkElement.onclick = function () { eval(onclick_attr); }; // Avoid using eval if possible
if (page.accesskey !== "" && page.accesskey !== "undefined") linkElement.accessKey = page.accesskey;
linkElement.textContent = link_text;

// Create a list item element (dt in this case)
var listItemElement = document.createElement('dt');
listItemElement.appendChild(linkElement);

// Append the list item to the dl element
dlElement.appendChild(listItemElement);
}
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
var currentage=y-birthyear;
if(m == 6 && dy == 26)
dt += "this is harry min khant's " + currentage + " year"+(currentage===1?"":"s")+" birthday. ";
if((m == 11 && dy == 31) || (m == 0 && dy == 1))
dt += "happy new year! ";
else if(m == 1 && dy == 14)
dt += "happy valentine's day! ";
else if(m == 3 && (dy >= 12 && dy <= 16))
dt += "happy thingyan to myanmar people!";
if(d >= 20 || (d >= 0 && d < 6))
dt += "wow, thank you "+get_storage("visitname","visiter")+" for visiting over sleep time!";
else if(d >= 6 && d < 11)
dt += "good morning "+get_storage("visitname","visiter")+", thanks for visiting to my website!";
else if(d >= 11 && d < 16)
dt += "good afternoon "+get_storage("visitname","visiter")+", thank you for visiting to my website!";
else
dt += "good evening "+get_storage("visitname","visiter")+", have a nice day!";
document.getElementById("greetings").textContent = dt;
}