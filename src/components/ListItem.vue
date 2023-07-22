<template>
  <div class="list-item">
    <div>
      <label>
        <input type="checkbox">
        {{ item.title }}
      </label>
    </div>
    <div>
      <input type="number" :value="item.quantity">
      <input type="color" :value="item.color">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
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