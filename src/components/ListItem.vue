<template>
  <div class="list-item">
    <div class="list-item__title-wrap">
      <h5 class="list-item__title">{{ item.title }}</h5>
      <app-checkbox 
        class="list-item__checkbox"
        :isChecked="item.isChecked" 
        @check="check" 
      />
    </div>
    <div class="list-item__editing-properties">
      <input 
        class="list-item__count-input"
        type="number" 
        :value="item.quantity" 
        @input="changeQuantity($event.target.value)"
        min="0"
      >
      <input 
        type="color" 
        :value="item.color" 
        @input="changeColor($event.target.value)"
      >
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

  &__title-wrap {
    display: flex;
  }

  &__title {
    margin: 0 10px 0 0;
    font-size: 18px;
  }

  &__checkbox {
    font-size: 18px;
  }

  &__editing-properties {
    display: flex;
    justify-content: space-between;
  }

  &__count-input{
    font-size: 16px;
    margin-right: 10px;
    width: 100px;
    &:invalid {
      border:1px solid red;
      border-radius: 2px;
    }
  }
}
</style>