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
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==


(function() {
  'use strict';

  // URL of the external CSS file
  var cssUrl = 'https://raw.githubusercontent.com/SoBloxsy/Threadful/main/the.css';

  // Fetch the CSS content from the external URL
  GM_xmlhttpRequest({
      method: 'GET',
      url: cssUrl,
      onload: function(response) {
          if (response.status === 200) {
              // Add the CSS to the page
              GM_addStyle(response.responseText);
          } else {
              console.error('Failed to load CSS from ' + cssUrl);
          }
      },
      onerror: function() {
          console.error('Error occurred while fetching CSS from ' + cssUrl);
      }
  });
})();