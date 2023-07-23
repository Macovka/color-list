<template>
  <div class="list-item">
    <div>
      <h3>{{ item.title }}</h3>
      <app-checkbox :isChecked="item.isChecked" @check="check" />
    </div>
    <div>
      <input type="number" :value="item.quantity">
      <input type="color" :value="item.color">
    </div>
  </div>
</template>

<script>
  import AppCheckbox from '@/components/UI/AppCheckbox.vue';

  export default {
    components: {
      AppCheckbox
    },
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
      },
      check(checked) {
        console.log(this.list.id)
        this.$store.commit('setItemChecked', { listId: this.list.id, itemId: this.item.id, checked });
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