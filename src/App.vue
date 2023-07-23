<template>
  <div class="panels-wrapper">
    <left-panel />
    <right-panel />
  </div>
</template>

<script>
import LeftPanel from '@/components/LeftPanel.vue'
import RightPanel from '@/components/RightPanel.vue'

export default {
  name: 'App',
  components: {
    LeftPanel,
    RightPanel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.panels-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 60px 20px 0;
}
</style>
