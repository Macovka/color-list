<template>
  <div class="list-item__wrapper">
    <div>
      <label>
        <input type="checkbox">
        {{ item }}
      </label>
    </div>
    <div>
      <input type="number" v-model="quantity">
      <input type="text" v-model="color">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: String,
        reqired: true
      }
    },
    data () {
      return {
        quantity: 10,
        color: 'red'
      }
    }
  }
</script>

<style scoped>
.list-item__wrapper {
  display: flex;
  justify-content: space-between;
}
</style>