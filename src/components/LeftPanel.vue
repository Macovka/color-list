<template>
  <div class="left-panel">
    <list-dropdown />
  </div>
</template>

<script>
  import ListDropdown from "@/components/ListDropdown.vue";

  export default {
    components: {
      ListDropdown
    }
  }
</script>

<style scoped>
.left-panel {
  border: 1px solid black;
  padding: 20px;
}
</style>