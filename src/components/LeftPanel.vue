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
  padding: 20px;
  flex: 1 1 50%;
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0,0,0,.35);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>