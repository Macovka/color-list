<template>
  <div class="list-item">
    <div>
      <label>
        <input 
          type="checkbox" 
          :checked="item.selected"
          @change="toggleItemSelect(item)"
        >
        {{ item.title }}
      </label>
    </div>
    <div>
      <input type="number" :value="item.quantity">
      <input type="color" :value="item.color">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Object,
        reqired: true
      },
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      toggleItemSelect(currentItem) {
        this.$store.commit('toggleItemSelected', currentItem);
      }
    }
  }
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
}
</style>