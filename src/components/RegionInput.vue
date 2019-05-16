<template>
  <div class="flags-dropdown-header">
    <div :class="$style.wrapper">
      <input
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keydown.up.prevent="$emit('up')"
        @keydown.down.prevent="$emit('down')"
        @keydown.enter="$emit('enter')"
        :class="$style.input"
        ref="input"
      >
      <button
        class="search-form-button"
        :class="[$style.reset, {[$style.resetActive]: resetActive}]"
        type="reset"
        @click="reset"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
          <path
            fill="#9B9B9B"
            fill-rule="nonzero"
            d="M7.426 6l4.285 4.284a1 1 0 0 1 0 1.415l-.012.012a1 1 0 0 1-1.415 0L6 7.426l-4.284 4.285a1 1 0 0 1-1.415 0l-.012-.012a1 1 0 0 1 0-1.415L4.574 6 .289 1.716A1 1 0 0 1 .29.3L.301.29a1 1 0 0 1 1.415 0L6 4.574 10.284.289a1 1 0 0 1 1.415 0l.012.012a1 1 0 0 1 0 1.415L7.426 6z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegionInput",
  props: ["value"],
  computed: {
    resetActive: function() {
      return !!this.value;
    }
  },
  methods: {
    reset: function() {
      this.$emit("reset");
      this.$refs.input.focus();
    }
  }
};
</script>

<style module>
.wrapper {
  display: flex;
  margin: 10px 0;
  padding-left: 10px;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  background-color: #fff;
}

.input {
  border: none;
  line-height: inherit;
  outline: none;
  flex-grow: 1;
}

.reset {
}

.resetActive {
  display: inline-block;
  color: #4a4a4a;
}
</style>
