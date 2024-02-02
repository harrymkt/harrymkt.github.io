//all.js
var mtcs=document.createElement("meta");
mtcs.setAttribute("charset","UTF-8");
document.head.appendChild(mtcs);

// Meta tag for author
var metaAuthor = document.createElement("meta");
metaAuthor.setAttribute("name", "author");
metaAuthor.setAttribute("content", "harry min khant");
document.head.appendChild(metaAuthor);

// Meta tag for keywords
var metaKeywords = document.createElement("meta");
metaKeywords.setAttribute("name", "keywords");
metaKeywords.setAttribute("content", "harry, min, khant, blind, social, visually impaired, computer, pc, mobile, android");
document.head.appendChild(metaKeywords);

var birthyear = 2006; //the variable of the year which harry min khant born.
var ptype="https"; //the protercall type, http/"+ptype+".
var domain="harry.github.io"; //domain.
var linkElement = document.createElement("link");
linkElement.href = ptype + "://" + domain + "/css/style.css";
linkElement.rel = "stylesheet";
linkElement.type = "text/css";

document.head.appendChild(linkElement);

function sett(pagett="untitled",wtt="harry min khant")
{
var finaltt="";
if(pagett=="") finaltt=wtt;
else
finaltt=pagett+""+(wtt==""?"":" | "+wtt);
document.title=finaltt;
}