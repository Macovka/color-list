<template>
  <div class="left-panel">
    <div v-for="list in lists" :key="list">
      <list-dropdown :list="list" />
    </div>
  </div>
</template>

<script>
  import ListDropdown from "@/components/ListDropdown.vue";

  export default {
    components: {
      ListDropdown
    },
    data() {
      return {
        lists: ['List 1', 'List 2', 'List 3', 'List 4']
      }
    },
  }
</script>

<style scoped>
.left-panel {
  border: 1px solid black;
  padding: 20px;
}
</style>