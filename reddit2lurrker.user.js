// ==UserScript==
// @version         0.0.2
// @name            Reddit2Lurrker
// @namespace       https://github.com/AccountName/ProjectNameTODO
// @description     Redirect reddit.com to lurrker.com
// @compatible      firefox
// @compatible      chrome-TODO
// @icon            https://lurrker.com/images/comments.png
// @match           *://*.reddit.com/*
// @run-at          document-start
// @grant           none
// @homepageURL     https://github.com/AccountName/ProjectNameTODO
// @supportURL      https://github.com/AccountName/ProjectNameTODO/wiki
// @updateURL       https://github.com/dstojakovic/Reddit2Lurrker/blob/master/Reddit2Lurrker/reddit2lurrker.user.js
// @downloadURL     https://github.com/dstojakovic/Reddit2Lurrker/blob/master/Reddit2Lurrker/reddit2lurrker.user.js
// @contributionURL https://www.paypal.com/cgi-bin/TODO
// ==/UserScript==


var currentURL = window.document.location.toString();
var newURL = "";

if(currentURL.includes("//www.reddit")) {
    newURL = currentURL.replace("//www.reddit","//lurrker");
    window.document.location.replace(newURL);
}

if(currentURL.includes("//reddit")) {
    newURL = currentURL.replace("//reddit","//lurrker");
    window.document.location.replace(newURL);
}

if(currentURL.includes("//old.reddit")) {
    newURL = currentURL.replace("//old.reddit","//lurrker");
    window.document.location.replace(newURL);
}
