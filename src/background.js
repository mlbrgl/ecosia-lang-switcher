chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "get") {
    chrome.cookies.get({ url: "https://www.ecosia.org", name: "ECFG" }, function(cookie) {
      sendResponse({ cookieString: cookie.value });
    });
  } else if (request.type === "set") {
    chrome.cookies.set({
      url: "https://www.ecosia.org",
      name: "ECFG",
      value: request.cookieString,
      domain: "ecosia.org"
      // expirationDate: ""
    });
    sendResponse({ status: "ok" });
  }
  return true;
});
