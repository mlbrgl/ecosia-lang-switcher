<template>
  <div id="app">
    <h1>{{ value }}</h1>
    <RegionInput v-model="value"/>
    <RegionsList :regions="regions" :filter="value"/>
  </div>
</template>

<script>
import RegionInput from "./RegionInput.vue";
import RegionsList from "./RegionsList.vue";

export default {
  name: "App",
  props: ["regions"],
  data() {
    return {
      value: ""
    };
  },
  components: {
    RegionInput,
    RegionsList
  }
};
</script>
