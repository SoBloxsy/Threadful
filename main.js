// ==UserScript==
// @name         Threadful
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  
// @author       Irenfw
// @match        https://x.com/*
// @icon         https://icons.duckduckgo.com/ip2/x.com/ico
// @updateURL    https://raw.githubusercontent.com/SoBloxsy/Threadful/main/main.js
// @downloadURL  https://raw.githubusercontent.com/SoBloxsy/Threadful/main/main.js
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';

  // URL of the external CSS file
  var cssUrl = 'https://raw.githubusercontent.com/SoBloxsy/Threadful/main/the.css';

  // Create a new link element
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = cssUrl;

  // Append the link element to the head
  document.head.appendChild(link);
})();