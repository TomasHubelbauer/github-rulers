chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  if (changeInfo.status === 'complete') {
    chrome.tabs.insertCSS(tabId, { file: '/background.css' });
  }
})
