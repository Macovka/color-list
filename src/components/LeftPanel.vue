<template>
  <div class="left-panel">
    <div v-for="list in lists" :key="list.id">
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
    computed: {
      lists () {
        return this.$store.state.lists
      }
    }
  }
</script>

<style scoped>
.left-panel {
  border: 1px solid black;
  padding: 20px;
}
</style>