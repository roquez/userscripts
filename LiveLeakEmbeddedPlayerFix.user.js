// ==UserScript==
// @name         LiveLeak embedded player fix
// @namespace    https://github.com/roquez/
// @version      1.0
// @description  Prevents LiveLeak embedded player from opening unwanted tabs
// @author       roquez
// @match        https://www.liveleak.com/*embed*
// @match        https://www.liveleak.com/e/*
// @downloadURL  https://raw.githubusercontent.com/roquez/userscripts/master/LiveLeakEmbeddedPlayerFix.user.js
// @updateURL    https://raw.githubusercontent.com/roquez/userscripts/master/LiveLeakEmbeddedPlayerFix.user.js
// @grant        none
// ==/UserScript==

(function() {
    $(document.querySelector("video").parentElement).off();
})();
