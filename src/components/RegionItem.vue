<template>
  <li
    :data-selected="region.locale"
    :class="[$style.item, { [$style.highlighted]: highlighted }]"
    @click="$emit('select', region)"
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
.highlighted,
.item:hover {
  background-color: rgb(237, 237, 237);
}
.highlighted.item:hover {
  background-color: rgb(224, 224, 224);
}
</style>
