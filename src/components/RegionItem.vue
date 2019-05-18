<template>
  <li
    :data-selected="region.locale"
    :class="{ [$style.highlighted]: highlighted }"
    @mouseenter="$emit('highlight', region)"
    @click="$emit('select')"
  >
    <span :class="`flag ${country}`" />
    {{ region.name }}
  </li>
</template>

<script>
export default {
  name: 'RegionItem',
  props: {
    region: { type: Object, required: true },
    highlighted: { type: Boolean, required: true },
  },
  computed: {
    country() {
      return this.region.locale.split('-')[1];
    },
  },
};
</script>

<style module>
.highlighted {
  background-color: lightblue;
}
</style>
