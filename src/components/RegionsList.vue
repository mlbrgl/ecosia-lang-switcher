<template>
  <div class="flags-dropdown-body">
    <p class="flags-dropdown-chosen js-select-chosen">
      <span :class="selectedRegion[0].class"></span>
      <strong class="js-selected-text">{{selectedRegion[0].name}}</strong>
    </p>
    <ul class="flags-dropdown-list">
      <RegionItem
        v-for="(region, index) in filteredRegions"
        :key="region.id"
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
      return this.regions
        .filter(region => region.locale === this.selectedLocale)
        .map(region => ({ ...region, class: `flag ${region.locale}` }));
    },
    filteredRegions: function() {
      return this.regions.filter(region => {
        return region.name.toLowerCase().match(this.filter.toLowerCase());
      });
    }
  },
  components: {
    RegionItem
  }
};
</script>
