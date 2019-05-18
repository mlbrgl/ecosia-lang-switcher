<template>
  <div
    class="js-select-market dropdown-menu flags-dropdown-content"
    data-update="mc"
  >
    <div class="flags-dropdown-arrow" />
    <RegionInput
      :value="value"
      @input="onInput"
      @up="onUp"
      @down="onDown"
      @enter="onSelectRegion"
      @reset="onReset"
    />
    <RegionsList
      :regions="filteredRegions"
      :filter="value"
      :highlighted-index="highlightedIndex"
      :selected="selectedRegion"
      @select="onSelectRegion"
    />
    <a
      :href="moreParameters.href"
      class="flags-dropdown-more"
    >{{ moreParameters.text }}</a>
  </div>
</template>

<script>
import RegionInput from './RegionInput.vue';
import RegionsList from './RegionsList.vue';

export default {
  name: 'App',
  components: {
    RegionInput,
    RegionsList,
  },
  props: {
    regions: { type: Object, required: true },
    cookieString: { type: String, required: true },
    moreParameters: { type: Object, required: true },
  },
  data() {
    return {
      value: '',
      highlightedIndex: 0,
    };
  },
  computed: {
    selectedLocale() {
      return this.cookieString
        .split(':')
        .find(param => param.startsWith('mc='))
        .substr(3);
    },
    selectedRegion() {
      return this.regions.filter(region => region.locale === this.selectedLocale)[0];
    },
    filteredRegions() {
      /* eslint-disable-next-line max-len */
      return this.regions.filter(region => region.name.toLowerCase().match(this.value.toLowerCase()));
    },
  },
  methods: {
    onUp() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex -= 1;
      }
    },
    onDown() {
      if (this.highlightedIndex < this.filteredRegions.length - 1) {
        this.highlightedIndex += 1;
      }
    },
    onInput(value) {
      this.value = value;
      this.highlightedIndex = 0;
    },
    onSelectRegion() {
      const updatedCookieString = this.cookieString
        .split(':')
        .map((paramString) => {
          const [name, value] = paramString.split('=');
          return {
            name,
            value: name === 'mc' ? this.filteredRegions[this.highlightedIndex].locale : value,
          };
        })
        .reduce((accCookieString, param) => {
          const separator = accCookieString === '' ? '' : ':';
          return `${accCookieString}${separator}${param.name}=${param.value}`;
        }, '');

      window.chrome.runtime.sendMessage({ type: 'set', cookieString: updatedCookieString }, () => {
        window.location.reload();
      });
    },
    onReset() {
      this.value = '';
    },
  },
};
</script>
