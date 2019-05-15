<template>
  <ul>
    <RegionItem
      v-for="(region, index) in filteredRegions"
      :key="region.locale"
      :region="region"
      :active="index === highlightedIndex"
    ></RegionItem>
  </ul>
</template>

<script>
import RegionItem from "./RegionItem.vue";

export default {
  name: "RegionList",
  props: ["regions", "filter", "highlightedIndex"],
  computed: {
    filteredRegions: function() {
      return this.regions.filter(region =>
        region.name.toLowerCase().match(this.filter.toLowerCase())
      );
    }
  },
  components: {
    RegionItem
  }
};
</script>
