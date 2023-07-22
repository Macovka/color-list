<template>
  <div class="list-item__wrapper">
    <div>
      <input type="checkbox" :id="item" name="item">
      <label :for="item">{{ item }}</label>
    </div>
    <div>
      {{ quantity }}
      {{ color }}
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