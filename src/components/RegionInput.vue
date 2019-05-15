<template>
  <input
    :value="value"
    @keydown.up="$emit('up', $event.target.value)"
    @keydown.down="$emit('down', $event.target.value)"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: "RegionInput",
  props: ["value"]
};
</script>
