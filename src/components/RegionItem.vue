<template>
  <li>{{region.name}}</li>
</template>

<script>
export default {
  name: "RegionItem",
  props: ["region"]
};
</script>