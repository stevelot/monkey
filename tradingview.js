// ==UserScript==
// @name         Tradingview hide sorter
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Disable annoying sorting
// @author       You
// @match        https://*.tradingview.com/*
// @grant        GM_addStyle

// ==/UserScript==

GM_addStyle('.symbol-list-header {display: none !important;}');
//Does not work: $().ready(e => $(".sorter").off().css("text-decoration", "line-through"));
console.log("Tradingview hide sorter");
