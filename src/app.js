import Vue from "vue";
import App from "./components/App.vue";

Vue.config.productionTip = false;

chrome.runtime.sendMessage({ type: "get" }, function(response) {
  const cookieString = response.cookieString;
  const regions = [...document.querySelector("ul.flags-dropdown-list").querySelectorAll("li")].map(
    (item, index) => ({
      locale: item.getAttribute("data-selected"),
      name: item.innerText,
      class: item.firstChild.getAttribute("class"),
      id: index
    })
  );
  const moreParametersElement = document.querySelector(".flags-dropdown-more");
  const moreParameters = {
    href: moreParametersElement.getAttribute("href"),
    text: moreParametersElement.innerText
  };

  new Vue({
    render: h => h(App, { props: { regions, cookieString, moreParameters } })
  }).$mount(".js-select-market");
});
