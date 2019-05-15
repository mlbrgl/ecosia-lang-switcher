<template>
  <li :class="{[$style.highlighted]: highlighted}">{{region.name}}</li>
</template>

<script>
export default {
  name: "RegionItem",
  props: ["region", "highlighted", "selected"]
};
</script>

<style module>
.highlighted {
  font-weight: bold;
}
</style>