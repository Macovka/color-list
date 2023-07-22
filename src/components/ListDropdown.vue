<template>
  <div class="title-wrapper">
    <div class="dropdown-arrow" @click="toggleList">
      <span v-if="!isOpen">></span>
      <span v-else>˅</span>
    </div>
    <label>
      <input type="checkbox" :value="list.selected" @change="toggleListSelect(list)">
      {{ list.title }}
    </label>
  </div>
  <div v-if="isOpen">
    <div v-for="item in items" :key="item">
      <list-item :item="item" />
    </div>
  </div>
</template>

<script>
  import ListItem from './ListItem.vue';
  import { mapState } from 'vuex'

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
    computed: {
      ...mapState({
        items: state => state.items,
      }),
    },
    methods: {
      toggleList() {
        this.isOpen = !this.isOpen;
      },
      toggleListSelect(currentList) {
        this.$store.commit('toggleSelected', currentList)
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