import Vue from "vue";
import App from "./components/App.vue";

Vue.config.productionTip = false;

const html = `
<ul class="flags-dropdown-list">
<li data-selected="es-ar"><span class="flag ar"></span>Argentina</li>
<li data-selected="en-au"><span class="flag au"></span>Australia</li>
<li data-selected="de-at"><span class="flag at"></span>Austria</li>
<li data-selected="fr-be"><span class="flag be"></span>Belgium (fr)</li>
<li data-selected="nl-be"><span class="flag be"></span>Belgium (nl)</li>
<li data-selected="pt-br"><span class="flag br"></span>Brazil</li>
<li data-selected="bg-bg"><span class="flag bg"></span>Bulgaria</li>
<li data-selected="en-ca"><span class="flag ca"></span>Canada (en)</li>
<li data-selected="fr-ca"><span class="flag ca"></span>Canada (fr)</li>
<li data-selected="es-cl"><span class="flag cl"></span>Chile</li>
<li data-selected="zh-cn"><span class="flag cn"></span>China</li>
<li data-selected="es-co"><span class="flag co"></span>Colombia</li>
<li data-selected="hr-hr"><span class="flag hr"></span>Croatia</li>
<li data-selected="da-dk"><span class="flag dk"></span>Denmark</li>
<li data-selected="fi-fi"><span class="flag fi"></span>Finland</li>
<li data-selected="fr-fr"><span class="flag fr"></span>France</li>
<li data-selected="de-de"><span class="flag de"></span>Germany</li>
<li data-selected="zh-hk"><span class="flag hk"></span>Hong Kong</li>
<li data-selected="en-in"><span class="flag in"></span>India</li>
<li data-selected="en-id"><span class="flag id"></span>Indonesia</li>
<li data-selected="en-ie"><span class="flag ie"></span>Ireland</li>
<li data-selected="it-it"><span class="flag it"></span>Italy</li>
<li data-selected="ja-jp"><span class="flag jp"></span>Japan</li>
<li data-selected="lv-lv"><span class="flag lv"></span>Latvia</li>
<li data-selected="lt-lt"><span class="flag lt"></span>Lithuania</li>
<li data-selected="en-my"><span class="flag my"></span>Malaysia</li>
<li data-selected="es-mx"><span class="flag mx"></span>Mexico</li>
<li data-selected="nl-nl"><span class="flag nl"></span>Netherlands</li>
<li data-selected="en-nz"><span class="flag nz"></span>New Zealand</li>
<li data-selected="nb-no"><span class="flag no"></span>Norway</li>
<li data-selected="es-pe"><span class="flag pe"></span>Peru</li>
<li data-selected="en-ph"><span class="flag ph"></span>Philippines</li>
<li data-selected="pl-pl"><span class="flag pl"></span>Poland</li>
<li data-selected="pt-pt"><span class="flag pt"></span>Portugal</li>
<li data-selected="ru-ru"><span class="flag ru"></span>Russia</li>
<li data-selected="ar-sa"><span class="flag sa"></span>Saudi Arabia (ar)</li>
<li data-selected="en-sa"><span class="flag sa"></span>Saudi Arabia (en)</li>
<li data-selected="en-sg"><span class="flag sg"></span>Singapore</li>
<li data-selected="sk-sk"><span class="flag sk"></span>Slovakia</li>
<li data-selected="en-za"><span class="flag za"></span>South Africa</li>
<li data-selected="ko-kr"><span class="flag kr"></span>South Korea</li>
<li data-selected="es-es"><span class="flag es"></span>Spain</li>
<li data-selected="sv-se"><span class="flag se"></span>Sweden</li>
<li data-selected="de-ch"><span class="flag ch"></span>Switzerland (de)</li>
<li data-selected="fr-ch"><span class="flag ch"></span>Switzerland (fr)</li>
<li data-selected="zh-tw"><span class="flag tw"></span>Taiwan</li>
<li data-selected="en-th"><span class="flag th"></span>Thailand (en)</li>
<li data-selected="th-th"><span class="flag th"></span>Thailand (th)</li>
<li data-selected="tr-tr"><span class="flag tr"></span>Turkey</li>
<li data-selected="uk-ua"><span class="flag ua"></span>Ukraine</li>
<li data-selected="en-gb"><span class="flag gb"></span>United Kingdom</li>
<li data-selected="en-us"><span class="flag us"></span>United States (en)</li>
<li data-selected="es-us"><span class="flag us"></span>United States (es)</li>
<li data-selected="es-ve"><span class="flag ve"></span>Venezuela</li>
<li data-selected="en-vn"><span class="flag vn"></span>Vietnam (en)</li>
<li data-selected="vi-vn"><span class="flag vn"></span>Vietnam (vi)</li>
<li data-selected="en-ww"><span class="flag ww"></span>All regions</li>
</ul>
`;

const cookieString =
  "a=1:as=1:cs=1:dt=pc:f=i:fr=0:fs=0:l=en:lt=1557900448:mc=en-us:nf=1:nt=0:t=83:tt=na:tu=auto:wu=auto:ma=1";

const parser = new DOMParser();
const doc = parser.parseFromString(html, "text/html");
const matches = doc.querySelectorAll("li");
const matchesArr = [...matches];
const regions = matchesArr.map(item => ({
  locale: item.getAttribute("data-selected"),
  name: item.innerText,
  class: item.firstChild.getAttribute("class")
}));

new Vue({
  render: h => h(App, { props: { regions, cookieString } })
}).$mount(".js-select-market");
