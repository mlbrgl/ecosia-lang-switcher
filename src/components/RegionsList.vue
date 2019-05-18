<template>
  <div class="flags-dropdown-body">
    <p class="flags-dropdown-chosen js-select-chosen">
      <span :class="selected.class" />
      <strong class="js-selected-text">{{ selected.name }}</strong>
    </p>
    <ul
      ref="regionItems"
      class="flags-dropdown-list"
    >
      <RegionItem
        v-for="(region, index) in regions"
        :key="region.id"
        :region="region"
        :highlighted="index === highlightedIndex"
        @select="$emit('select')"
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
    selected: { type: Object, default: () => ({}) },
  },
  computed: {
    listItemHeight() {
      return this.$refs.regionItems.querySelector('li').clientHeight;
    },
  },
  beforeUpdate() {
    this.$refs.regionItems.scrollTop = this.listItemHeight * this.highlightedIndex;
  },
};
</script>
