<template>
  <div>
    <input type="checkbox" v-model="isOpen" name="list">
    <label for="list">{{ list }}</label>
    <div v-if="isOpen">
      <div v-for="item in items" :key="item">
        <list-item :item="item" />
      </div>
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
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      selectedItems: []
    }
  },
  computed: {
    areAllItemsSelected() {
      return this.selectedItems.length === this.items.length;
    }
  }
}
</script>

<style scoped>

</style>