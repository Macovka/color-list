<template>
  <div class="right-panel">
    <div 
      v-for="list in lists" 
      :key="list"
    >
      <list-block :list="list" />
    </div>
  </div>
</template>

<script>
  import ListBlock from '@/components/ListBlock.vue'

  export default {
    components: {
      ListBlock
    },
    computed: {
      lists () {
        return this.$store.state.lists
      }
    }
  }
</script>

<style lang="scss" scoped>
.right-panel {
  border: 1px solid black;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>