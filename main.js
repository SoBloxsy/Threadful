// ==UserScript==
// @name         Threadful
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  threads style theme for x.com / twitter
// @author       Irenfw
// @match        https://x.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=x.com
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