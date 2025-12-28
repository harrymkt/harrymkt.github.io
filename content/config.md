+++
title = "Site Configuration"
+++
# Site Configuration
Here you can change the preferences for the site.

<form>
<fieldset>
<legend><h2>Time Format</h2></legend>
<p>The time format is the format that will be used to display the date and time which you can find at the top of any page.</p>
<p id="timeformat"></p>
<label for="timeformatinp">Choose the time format that will be used</label>
<select name="labeltf" id="timeformatinp" placeholder="Choose the time format" value="">
<option value="">Select format</option>
<option select value="12">12 hour format</option>
<option select value="24">24 hour format</option>
</select>
</fieldset>
<fieldset>
<legend><h2>Visiter Name for the Site</h2></legend>
<p>The visiter's name is the name that will be used in name calling, such as in privacy policy section of greetings message at the top of any page.</p>
<p id="visitname"></p>
<label for="visitnameinp">Enter your name that will be used on the site</label>
<input id="visitnameinp" type="text" placeholder="Enter your name to use"></input>
</fieldset>

<input type="submit" onclick="formsub();" placeholder="Save" value="Save configurations"></input>
<fieldset>
<legend><h2>Reset Configurations</h2></legend>
<input type="button" onclick="removeallcf();" placeholder="Remove all configs" value="Remove all config"></input>
</fieldset>
</form>
<script>
function startform() {
	var tf = localStorage.getItem("timeformat");
	if (tf !== "12") tf = "24";
	document.getElementById("timeformat").textContent = "Current time format, " + tf + " hour format";
	var vu = localStorage.getItem("visitname");
	if (vu === "" || vu === null) vu = "visiter";
	document.getElementById("visitname").textContent = "Current name, "+vu;
}
startform();
function formsub() {
	let o = 0;
	var tf = document.getElementById("timeformatinp").value;
	if (tf !== null && tf !== "") {
		if (tf !== "12") tf = "24";
		localStorage.setItem("timeformat", tf);
		document.getElementById("timeformat").textContent = "Current time format, " + tf + " hour format";
		o++;
	}
	var vu = document.getElementById("visitnameinp").value;
	if (vu !== null && vu !== "") {
		if (vu === "" || vu == null) vu = "visiter";
		localStorage.setItem("visitname", vu);
		document.getElementById("visitname").textContent = "Current name, " + vu;
		o++
	}
	var msg = (o > 0 ? o + " options saved" : "options unchanged");
	alert(msg);
}//end.function
function removeallcf() {
	if (confirm("Are you sure you want to remove all configurations saved on this site? This cannot be undone")) {
		localStorage.clear();
		startform();
		var msg = "All the site configurations have been cleared.";
		alert(msg);
	}
}
</script>