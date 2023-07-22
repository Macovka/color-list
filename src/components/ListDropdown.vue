<template>
  <div class="title-wrapper">
    <div class="dropdown-arrow" @click="toggleList">
      <span v-if="!isOpen">></span>
      <span v-else>˅</span>
    </div>
    <div>
      <label>
        <input type="checkbox" 
          :checked="list.selected" 
          @change="toggleListSelect"
          :class="{dot: list.partSelect}"
        >
        {{ list.title }}
      </label>
    </div>   
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
    computed: {
      items () {
        return this.list.items;
      },
      partSelect () {
        return this.list.partSelect;
      }
    },
    methods: {
      toggleList() {
        this.isOpen = !this.isOpen;
      },
      toggleListSelect() {
        if (this.list.selected) {
          if (this.partSelect) {
            this.$store.commit('setItemSelectValue', { currentList: this.list, value: true });
          } else {
            this.$store.commit('setListSelectValue', { currentList: this.list, value: false });
          this.$store.commit('setItemSelectValue', { currentList: this.list, value: false });
          }         
        } else {
          this.$store.commit('setListSelectValue', { currentList: this.list, value: true });
          this.$store.commit('setItemSelectValue', { currentList: this.list, value: true });
        }
      }
    },
    watch: {
      list: {
        handler(newList) {
          const selectValues = newList.items.map(item => item.selected);
          const isAnyUnselect = selectValues.includes(false);
          const isAnySelected = selectValues.includes(true);

          if (!isAnyUnselect) {
            this.$store.commit('setPartSelect', { currentList: this.list, value: false });
            if (!newList.selected) {
              this.$store.commit('setListSelectValue', { currentList: this.list, value: true });
            }
          } else if (!isAnySelected) {
            this.$store.commit('setPartSelect', { currentList: this.list, value: false });
            if (newList.selected) {
              this.$store.commit('setListSelectValue', { currentList: this.list, value: false });
            }
          }
        },
        deep: true
      }
    },
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