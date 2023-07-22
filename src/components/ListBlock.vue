<template>
  <div class="list-block__wrapper">
    {{ list }}
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: String,
        reqired: true
      }
    },
  }
</script>

<style scoped>
.list-block__wrapper {
  border: 1px solid black;
  padding: 10px;
}
</style>