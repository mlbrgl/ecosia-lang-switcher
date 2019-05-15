<template>
  <li :class="{[$style.active]: active}">{{region.name}}</li>
</template>

<script>
export default {
  name: "RegionItem",
  props: ["region", "active"]
};
</script>

<style module>
.active {
  font-weight: bold;
}
</style>