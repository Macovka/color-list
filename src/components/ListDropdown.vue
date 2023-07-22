<template>
  <div class="title-wrapper">
    <div class="dropdown-arrow" @click="toggleList">
      <span v-if="!isOpen">></span>
      <span v-else>˅</span>
    </div>
    <label>
      <input type="checkbox">
      {{ list }}
    </label>
  </div>
  <div v-if="isOpen">
    <div v-for="item in items" :key="item">
      <list-item :item="item" />
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  components: {
    ListItem
  },
  props: {
      list: {
        type: String,
        reqired: true
      }
    },
  data() {
    return {
      isOpen: false,
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
    }
  },
  methods: {
    toggleList() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
.dropdown-arrow {
  cursor: pointer;
}

.title-wrapper {
  display: flex;
}
</style>