<template>
  <div class="title-wrapper">
    <div class="dropdown-arrow" @click="toggleList">
      <span v-if="!isOpen">></span>
      <span v-else>˅</span>
    </div>
    <app-checkbox :isChecked="checkboxStatus === 'true'" :isIndeterminate="checkboxStatus === 'part'" @check="checkList" />
    <h4>{{ list.title }}</h4>
  </div>
  <div v-if="isOpen">
    <div v-for="item in list.items" :key="item.id">
      <list-item :item="item" :list="list"/>
    </div>
  </div>
</template>

<script>
  import ListItem from './ListItem.vue';

  export default {
    components: {
      ListItem,
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
      checkboxStatus() {
        return this.list.checkboxStatus;
      }
    },
    methods: {
      checkList(checked) {
        this.list.items.forEach(item => {
          this.$store.commit('setItemChecked', { listId: this.list.id, itemId: item.id, checked });
        });
      },
      toggleList() {
        this.isOpen = !this.isOpen;
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