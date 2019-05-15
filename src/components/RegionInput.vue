<template>
  <input
    :value="value"
    @:input="$emit('input', $event.target.value)"
    @keydown.up="$emit('up', $event.target.value)"
    @keydown.down="$emit('down', $event.target.value)"
  >
</template>

<script>
export default {
  name: "RegionInput",
  props: ["value"]
};
</script>
