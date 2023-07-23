<template>
  <div class="right-panel">
    <div 
      v-for="list in lists" 
      :key="list.id"
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
  padding: 20px;
  flex: 1 1 50%;
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0,0,0,.35);
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>