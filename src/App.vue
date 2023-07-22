<template>
  <div class="panels-wrapper">
    <left-panel />
    <right-panel />
  </div>
</template>

<script>
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'

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
  margin-top: 60px;
}

.panels-wrapper {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 20px;
}
</style>
