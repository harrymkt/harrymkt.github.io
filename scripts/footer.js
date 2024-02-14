//footer.
function addfooter()
{
// Assuming "fdd" is a reference to an existing DOM object
var fdd = document.createElement("div");
fdd.className = "beforefooter";

// "come to me" section
var comeToMeHeading = document.createElement("h1");
comeToMeHeading.textContent = "come to me";

var messageParagraph = document.createElement("p");
messageParagraph.textContent = "If you want to send a message and get in touch with me, check out below.";

var messageLinksList = document.createElement("ul");
var facebookLinkItem = createLinkListItem("https://www.facebook.com/profile.php?id=61555081142615", "add friend / follow on Facebook");
var telegramLinkItem = createLinkListItem("https://t.me/harrymkt", "Message on Telegram");
messageLinksList.appendChild(facebookLinkItem);
messageLinksList.appendChild(telegramLinkItem);

// "keep in touch with Me" section
var keepInTouchHeading = document.createElement("h1");
keepInTouchHeading.textContent = "keep in touch with Me";

var dontMissParagraph = document.createElement("p");
dontMissParagraph.textContent = "Don't let miss anything from me!";

var keepInTouchLinksList = document.createElement("ul");
var githubLinkItem = createLinkListItem("https://github.com/harrymkt", "my GitHub");
var youtubeLinkItem = createLinkListItem("https://youtube.com/@harry_mk", "Subscribe to my YouTube Channel");
var telegramChannelLinkItem = createLinkListItem("https://t.me/harrymktg", "Telegram Channel");
keepInTouchLinksList.appendChild(githubLinkItem);
keepInTouchLinksList.appendChild(youtubeLinkItem);
keepInTouchLinksList.appendChild(telegramChannelLinkItem);

// "useful links" section
var usefulLinksHeading = document.createElement("h1");
usefulLinksHeading.textContent = "useful links";

// Appending all elements to "fdd"
fdd.appendChild(comeToMeHeading);
fdd.appendChild(messageParagraph);
fdd.appendChild(messageLinksList);
fdd.appendChild(keepInTouchHeading);
fdd.appendChild(dontMissParagraph);
fdd.appendChild(keepInTouchLinksList);
fdd.appendChild(usefulLinksHeading);

// Appending "fdd" to the body or any other target element
document.body.appendChild(fdd);

var fd=document.createElement("div");
// Create individual paragraphs with links
var aboutLink = document.createElement("p");
var contactLink = document.createElement("p");
var communityPolicyLink = document.createElement("p");
var privacyPolicyLink = document.createElement("p");

// Create anchor elements and set their attributes
var aboutAnchor = document.createElement("a");
aboutAnchor.href = ptype + "://" + domain + "/about";
aboutAnchor.textContent = "about";
aboutLink.appendChild(aboutAnchor);

var contactAnchor = document.createElement("a");
contactAnchor.href = ptype + "://" + domain + "/contact";
contactAnchor.textContent = "contact";
contactLink.appendChild(contactAnchor);

var communityPolicyAnchor = document.createElement("a");
communityPolicyAnchor.href = ptype + "://" + domain + "/community_policy";
communityPolicyAnchor.textContent = "community policy";
communityPolicyLink.appendChild(communityPolicyAnchor);

var privacyPolicyAnchor = document.createElement("a");
privacyPolicyAnchor.href = ptype + "://" + domain + "/privacy";
privacyPolicyAnchor.textContent = "privacy policy";
privacyPolicyLink.appendChild(privacyPolicyAnchor);

// Append paragraphs to the existing "fd" container
fd.appendChild(aboutLink);
fd.appendChild(contactLink);
fd.appendChild(communityPolicyLink);
fd.appendChild(privacyPolicyLink);
document.body.appendChild(fd);
// Create a footer element
var footerElement = document.createElement("footer");

// Create a paragraph element
var copyrightParagraph = document.createElement("p");

// Create a copyright text node
var copyrightText = document.createTextNode("copyright \u00A9 " + birthyear + "-" + new Date().getFullYear() + ', ');

// Create an anchor element
var anchorElement = document.createElement("a");
anchorElement.href = ptype + "://" + domain;
anchorElement.textContent = "harry min khant.";

// Append the copyright text and anchor element to the paragraph
copyrightParagraph.appendChild(copyrightText);
copyrightParagraph.appendChild(anchorElement);

// Create another text node for "All rights reserved."
var rightsReservedText = document.createTextNode(" All rights reserved.");

// Append the rights reserved text to the paragraph
copyrightParagraph.appendChild(rightsReservedText);

// Append the paragraph to the footer
footerElement.appendChild(copyrightParagraph);

// Append the footer to the body or any other target element
document.body.appendChild(footerElement);
}//end