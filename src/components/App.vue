<template>
  <div class="js-select-market dropdown-menu flags-dropdown-content" data-update="mc">
    <div class="flags-dropdown-arrow"></div>
    <RegionInput
      :value="value"
      @input="onInput($event)"
      @up="onUp"
      @down="onDown"
      @enter="onEnter"
    />
    <RegionsList
      :regions="regions"
      :filter="value"
      :highlightedIndex="highlightedIndex"
      :selectedLocale="selectedLocale"
    />
  </div>
</template>

<script>
import RegionInput from "./RegionInput.vue";
import RegionsList from "./RegionsList.vue";

export default {
  name: "App",
  props: ["regions", "cookieString"],
  data() {
    return {
      value: "",
      highlightedIndex: 0
    };
  },
  computed: {
    selectedLocale: function() {
      return (this.locale = this.cookieString
        .split(":")
        .find(param => {
          return param.startsWith("mc=");
        })
        .substr(3));
    }
  },
  methods: {
    onUp: function() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex -= 1;
      }
    },
    onDown: function() {
      if (this.highlightedIndex < this.regions.length) {
        this.highlightedIndex += 1;
      }
    },
    onInput: function(event) {
      this.value = event;
      this.highlightedIndex = 0;
    },
    onEnter: function() {
      const updatedCookieString = this.cookieString
        .split(":")
        .map(paramString => {
          const [name, value] = paramString.split("=");
          return {
            name,
            value:
              name === "mc" ? this.regions[this.highlightedIndex].locale : value
          };
        })
        .reduce((accCookieString, param) => {
          const separator = accCookieString === "" ? "" : ":";
          return `${accCookieString}${separator}${param.name}=${param.value}`;
        }, "");

      chrome.runtime.sendMessage(
        { type: "set", cookieString: updatedCookieString },
        function(response) {
          location.reload();
        }
      );
    }
  },
  components: {
    RegionInput,
    RegionsList
  }
};
</script>
