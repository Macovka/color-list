<template>
  <div class="title-wrapper">
    <div class="dropdown-arrow" @click="toggleList">
      <span v-if="!isOpen">></span>
      <span v-else>˅</span>
    </div>
    <label>
      <input type="checkbox">
      {{ list.title }}
    </label>
  </div>
  <div v-if="isOpen">
    <div v-for="title in titles" :key="title">
      <list-item :title="title" />
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
      isOpen: false
    }
  },
  computed: {
    titles () {
      return this.$store.state.items.map(item => item.title);
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