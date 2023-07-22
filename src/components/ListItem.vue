<template>
  <div class="list-item">
    <div>
      <label>
        <input type="checkbox">
        {{ title }}
      </label>
    </div>
    <div>
      <input type="number" :value="quantity">
      <input type="color" :value="color">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    computed: {
      ...mapState({
        quantity(state) {
          return state.items.find(item => item.title === this.title).quantity;
        },
        color(state) {
          return state.items.find(item => item.title === this.title).color;
        },
      }),
    }
  }
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
}
</style>