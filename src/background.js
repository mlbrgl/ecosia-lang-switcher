window.chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'get') {
    window.chrome.cookies.get({ url: 'https://www.ecosia.org', name: 'ECFG' }, (cookie) => {
      sendResponse({ cookieString: cookie.value });
    });
  } else if (request.type === 'set') {
    window.chrome.cookies.set({
      url: 'https://www.ecosia.org',
      name: 'ECFG',
      value: request.cookieString,
      domain: 'ecosia.org',
      // expirationDate: ""
    });
    sendResponse({ status: 'ok' });
  }
  return true;
});
