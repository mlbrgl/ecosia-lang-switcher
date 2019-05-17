<template>
  <div class="flags-dropdown-body">
    <p class="flags-dropdown-chosen js-select-chosen">
      <span :class="selectedRegion.class" />
      <strong class="js-selected-text">{{ selectedRegion.name }}</strong>
    </p>
    <ul class="flags-dropdown-list">
      <RegionItem
        v-for="(region, index) in regions"
        :key="region.id"
        :region="region"
        :highlighted="index === highlightedIndex"
      />
    </ul>
  </div>
</template>

<script>
import RegionItem from './RegionItem.vue';

export default {
  name: 'RegionList',
  components: {
    RegionItem,
  },
  props: {
    regions: { type: Object, required: true },
    filter: { type: String, required: true },
    highlightedIndex: { type: Number, required: true },
    selectedRegion: { type: Object, default: () => ({}) },
  },
};
</script>
