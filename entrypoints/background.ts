export default defineBackground(() => {
  console.log('Scripts are running in background!', { id: browser.runtime.id });
});


chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.from === "insert-btn") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
          sendResponse(response);
        });
      }
    });
    return true;
  }
});