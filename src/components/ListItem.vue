<template>
  <div class="list-item">
    <div>
      <h5>{{ item.title }}</h5>
      <app-checkbox :isChecked="item.isChecked" @check="check" />
    </div>
    <div class="list-item__editing-properties">
      <div>
        <input 
          type="number" 
          :value="item.quantity" 
          @input="changeQuantity($event.target.value)"
        >
      </div>
      <div>
        <input 
          type="color" 
          :value="item.color" 
          @input="changeColor($event.target.value)"
        >
      </div> 
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

<style lang="scss" scoped>
.list-item {
  display: flex;
  justify-content: space-between;

  &__editing-properties {
    display: flex;
    justify-content: space-between;
  }
}

.square {
  width: 10px;
	height: 10px;
  margin-right: 2px;
}
</style>