<template>
  <li :data-selected="region.locale" :class="{[$style.highlighted]: highlighted}">
    <span :class="`flag ${country}`"></span>
    {{region.name}}
  </li>
</template>

<script>
export default {
  name: "RegionItem",
  props: ["region", "highlighted", "selected"],
  computed: {
    country: function() {
      return this.region.locale.split("-")[1];
    }
  }
};
</script>

<style module>
.highlighted {
  background-color: lightblue;
}
</style>