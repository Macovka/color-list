<template>
  <input type="checkbox" :id="item" name="item">
  <label :for="item">{{ item }}</label>
</template>

<script>
  export default {
    props: {
      item: {
        type: String,
        reqired: true
      }
    }
  }
</script>

<style scoped>

</style>