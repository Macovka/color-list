<template>
  <div>
    <input type="checkbox" v-model="isOpen" name="list-1">
    <label for="list-1">List 1</label>
    <ul v-if="isOpen">
      <li v-for="item in items" :key="item">
        <input type="checkbox" :id="item" name="item">
        <label :for="item">{{ item }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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