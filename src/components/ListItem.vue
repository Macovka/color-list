<template>
  <div class="list-item">
    <div>
      <h5>{{ item.title }}</h5>
      <app-checkbox :isChecked="item.isChecked" @check="check" />
    </div>
    <div>
      <input type="number" :value="item.quantity" @input="changeQuantity($event.target.value)">
      <input type="color" :value="item.color" @input="changeColor($event.target.value)">
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
      check(checked) {
        this.$store.commit('setItemChecked', { listId: this.list.id, itemId: this.item.id, checked });
      },
      changeQuantity(value) {
        value = Math.max(0, value);
        this.$store.commit('changeQuantity', { item: this.item, value });
      },
      changeColor(value) {
        this.$store.commit('changeColor', { item: this.item, value });
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