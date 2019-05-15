<template>
  <div id="app">
    <h1>{{ value }}</h1>
    <RegionInput v-model="value" @up="up" @down="down"/>
    <RegionsList :regions="regions" :filter="value" :highlightedIndex="highlightedIndex"/>
  </div>
</template>

<script>
import RegionInput from "./RegionInput.vue";
import RegionsList from "./RegionsList.vue";

export default {
  name: "App",
  props: ["regions"],
  data() {
    return {
      value: "",
      highlightedIndex: 0
    };
  },
  methods: {
    up: function() {
      return this.highlightedIndex > 0
        ? (this.highlightedIndex -= 1)
        : this.highlightedIndex;
    },
    down: function() {
      return this.highlightedIndex < this.regions.length
        ? (this.highlightedIndex += 1)
        : this.highlightedIndex;
    }
  },
  components: {
    RegionInput,
    RegionsList
  }
};
</script>
