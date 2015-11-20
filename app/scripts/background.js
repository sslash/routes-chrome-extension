'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

console.log('\'Allo \'Allo! Event Page for Browser Action');




function genericOnClick(info, tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {info: info, tab: tab, greeting: 'hello'}, function(response) {
            console.log(response.farewell);
        });
    });
}

// Create one test item for each context type.
chrome.contextMenus.create({'title': 'Add spot to Route', 'contexts':['image'], 'onclick': genericOnClick});

// for (var i = 0; i < contexts.length; i++) {
//     var context = contexts[i];
//     var title = 'Test ' + context + ' menu item';
//     var id = chrome.contextMenus.create({'title': title, 'contexts':[context], 'onclick': genericOnClick});
//     console.log('' + context + ' item:' + id);
// }
