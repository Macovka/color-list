<template>
  <div>
    <input type="checkbox" v-model="isOpen" name="list-1">
    <label for="list-1">List 1</label>
    <ul v-if="isOpen">
      <li v-for="item in items" :key="item">
        <list-item :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  components: {
    ListItem
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