<template>
  <div class="flags-dropdown-header">
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keydown.up="$emit('up')"
      @keydown.down="$emit('down')"
      @keydown.enter="$emit('enter')"
    >
  </div>
</template>

<script>
export default {
  name: "RegionInput",
  props: ["value"]
};
</script>
