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
  import AppCheckbox from '@/components/UI/AppCheckbox.vue';

  export default {
    components: {
      ListItem,
      AppCheckbox
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
      },
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
      },
      /*toggleListSelect() {
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
      }*/
    },
    watch: {
      /*list: {
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
      }*/
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