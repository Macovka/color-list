<template>
  <div class="list-block">
    <div class="list-block__title-wrapper">
      {{ list }}
      <button>Премешать</button>
    </div>
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

<style lang="scss" scoped>
.list-block {
  border: 1px solid black;
  padding: 10px;

  &__title-wrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>