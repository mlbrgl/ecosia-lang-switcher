<template>
  <div>
    <RegionItem :region="selectedRegion[0]" :selected="true"></RegionItem>
    <ul>
      <RegionItem
        v-for="(region, index) in filteredRegions"
        :key="region.locale"
        :region="region"
        :highlighted="index === highlightedIndex"
      ></RegionItem>
    </ul>
  </div>
</template>

<script>
import RegionItem from "./RegionItem.vue";

export default {
  name: "RegionList",
  props: ["regions", "filter", "highlightedIndex", "selectedLocale"],
  computed: {
    selectedRegion: function() {
      return this.regions.filter(
        region => region.locale === this.selectedLocale
      );
    },
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
