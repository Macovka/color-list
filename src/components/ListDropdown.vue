<template>
  <div class="title-wrapper">
    <div class="dropdown-arrow" @click="toggleList">
      <span v-if="!isOpen">></span>
      <span v-else>˅</span>
    </div>
    <label>
      <input type="checkbox" 
        :checked="list.selected" 
        @change="toggleListSelect(list)"
      >
      {{ list.title }}
    </label>
  </div>
  <div v-if="isOpen">
    <div v-for="item in list.items" :key="item">
      <list-item :item="item" :list="list"/>
    </div>
  </div>
</template>

<script>
  import ListItem from './ListItem.vue';

  export default {
    components: {
      ListItem
    },
    props: {
      list: {
        type: Object,
        reqired: true
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleList() {
        this.isOpen = !this.isOpen;
      },
      toggleListSelect(currentList) {      
        this.$store.commit('toggleListSelected', currentList);
        if (this.list.selected) {
          this.$store.commit('setItemSelectValue', { currentList: this.list, value: true });
        } else {
          this.$store.commit('setItemSelectValue', { currentList: this.list, value: false });
        }
      }
    }
  }
</script>

<style scoped>
.dropdown-arrow {
  cursor: pointer;
}

.title-wrapper {
  display: flex;
}
</style>