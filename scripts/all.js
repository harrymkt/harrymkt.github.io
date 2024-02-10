//all.js
var birthyear = 2006; //the variable of the year which harry min khant born.
var ptype="https"; //the protercall type, http/"+ptype+".
var domain="harrymkt.github.io"; //domain.

function sett(pagett="untitled",wtt="harry min khant")
{
var finaltt="";
if(pagett=="") finaltt=wtt;
else
finaltt=pagett+""+(wtt==""?"":" | "+wtt);
document.title=finaltt;
}