<template>
  <div id="app">
    <h1>{{ value }}</h1>
    <RegionInput v-model="value" @up="up" @down="down" @enter="enter"/>
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
    up: function() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex -= 1;
      }
    },
    down: function() {
      if (this.highlightedIndex < this.regions.length) {
        this.highlightedIndex += 1;
      }
    },
    enter: function() {
      console.log(
        this.cookieString
          .split(":")
          .map(paramString => {
            const [name, value] = paramString.split("=");
            return {
              name,
              value:
                name === "mc"
                  ? this.regions[this.highlightedIndex].locale
                  : value
            };
          })
          .reduce((updatedCookieString, param) => {
            const separator = updatedCookieString === "" ? "" : ":";
            return `${updatedCookieString}${separator}${param.name}=${
              param.value
            }`;
          }, "")
      );

      // location.reload();
    }
  },
  components: {
    RegionInput,
    RegionsList
  }
};
</script>
