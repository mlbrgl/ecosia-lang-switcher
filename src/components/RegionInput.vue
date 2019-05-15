<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
    @keydown.up="$emit('up')"
    @keydown.down="$emit('down')"
    @keydown.enter="$emit('enter')"
  >
</template>

<script>
export default {
  name: "RegionInput",
  props: ["value"]
};
</script>
