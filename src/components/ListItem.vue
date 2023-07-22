<template>
  <div class="list-item">
    <div>
      <label>
        <input type="checkbox">
        {{ item }}
      </label>
    </div>
    <div>
      <input type="number" v-model="quantity">
      <input type="color" v-model="color">
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      item: {
        type: String,
        reqired: true
      }
    },
    computed: {
      ...mapState({
        quantity: state => state.quantity,
        color: state => state.color,
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