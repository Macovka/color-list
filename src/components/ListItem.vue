<template>
  <div class="list-item">
    <div>
      <h5>{{ item.title }}</h5>
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
    methods: {
      check(checked) {
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