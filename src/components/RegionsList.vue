<template>
  <div class="flags-dropdown-body">
    <p class="flags-dropdown-chosen js-select-chosen">
      <span :class="selectedRegion.class"></span>
      <strong class="js-selected-text">{{selectedRegion.name}}</strong>
    </p>
    <ul class="flags-dropdown-list">
      <RegionItem
        v-for="(region, index) in regions"
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
  props: ["regions", "filter", "highlightedIndex", "selectedRegion"],
  components: {
    RegionItem
  }
};
</script>
