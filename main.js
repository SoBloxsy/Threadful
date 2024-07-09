// ==UserScript==
// @name         Threadful
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  
// @author       Irenfw
// @match        https://x.com/*
// @icon         https://icons.duckduckgo.com/ip2/x.com/ico
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
'use strict';
GM_addStyle(`
html, body {
  background-color: rgb(39, 41, 43) !important;
}
[role=region] > div > div > div article > div{
  background-color: hsla(213, 5%, calc(19% * (1 + 0 )), 1);
  border-radius: 6px;
  padding: 12px;
border: 1px solid hsl(213, 4%, calc(26% * (1 + 0 )));
}
[data-testid=cellInnerDiv] > div {
  border: 0px;
}
[role=region] > div > div > div {
    background-color: rgb(39, 41, 43);
}
[role=region] > div > div > div article {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  padding: 0 !important;
  margin: 8px;
    border-radius: 6px;
  }
form {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}
[role=region] > div > div {
  border: 0px;
}

[data-testid=tweetText],a[role="link"] span {
   color: white !important;
}
[data-testid=tweetPhoto] img {
  border-radius: 6px;
}
[data-testid=like] svg, [data-testid="unlike"] svg {
  color: red
}
[data-testid=retweet] svg, [data-testid="unretweet"] svg {
  color: rgb(0, 186, 124)
}

[data-testid="app-text-transition-container"] {
  color: white;
}
svg {
  color: white
}
[data-testid=icon-verified] {
  display: none
}

article .r-1867qdf { 
  border-radius: 6px;
}
a {
  color: hsl(calc(212 - 15), calc(1*100%), 47.8%);
}
button[style="border-color: rgba(0, 0, 0, 0); background-color: rgb(239, 243, 244);"] {
  background-color: transparent !important;
border-color: hsl(213, 4%, calc(26% * (1 + 0 ))) !important;
  border: 1px solid hsl(213, 4%, calc(26% * (1 + 0 )));
}
button[style="border-color: rgba(0, 0, 0, 0); background-color: rgb(239, 243, 244);"] span {
    color: white;
}
[aria-label="Subscribe to Premium"] {
  display: none
}
.r-kemksi {
  background-color: transparent;
}
`);
})();
