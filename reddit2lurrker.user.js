// ==UserScript==
// @version         0.0.8
// @name            Reddit2Lurrker
// @namespace       https://github.com/dstojakovic/Reddit2Lurrker
// @description     Redirect reddit.com to lurrker.com
// @compatible      firefox
// @compatible      chrome
// @icon            https://lurrker.com/images/comments.png
// @match           *://*.reddit.com/*
// @run-at          document-start
// @grant           none
// @homepageURL     https://github.com/dstojakovic/Reddit2Lurrker
// @supportURL      https://github.com/dstojakovic/Reddit2Lurrker/issues
// @updateURL       https://github.com/dstojakovic/Reddit2Lurrker/raw/master/reddit2lurrker.user.js
// @downloadURL     https://github.com/dstojakovic/Reddit2Lurrker/raw/master/reddit2lurrker.user.js
// @contributionURL https://www.paypal.com/cgi-bin/TODO
// ==/UserScript==


var currentURL = window.document.location.toString();
var re = new RegExp('((www.|old.){0,}reddit.com)');
var redirectUrl = 'lurrker.com';
var newUrl = currentURL.replace(re, redirectUrl);
window.document.location.replace(newUrl);
