browser.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  if (changeInfo.status === 'complete') {
    browser.tabs.insertCSS(tabId, { file: 'index.css' });
  }
})
