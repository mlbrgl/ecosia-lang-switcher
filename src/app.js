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

  new Vue({
    render: h => h(App, { props: { regions, cookieString } })
  }).$mount(".js-select-market");
});
