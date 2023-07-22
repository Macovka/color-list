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
    computed: {
      partSelect () {
        return this.list.partSelect
      }
    },
    methods: {
      toggleItemSelect(currentItem) {
        this.$store.commit('toggleItemSelected', currentItem);

        const selectValues = this.list.items.map(item => item.selected);
        const isAnySelected = selectValues.includes(true);
        const isAnyUnselected = selectValues.includes(false);

        if (isAnySelected) {
          if (isAnyUnselected) {
            this.$store.commit('setPartSelect', { currentList: this.list, value: true });
          }
        }
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