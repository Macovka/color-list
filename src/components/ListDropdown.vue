<template>
  <div class="list-dropdown__wrap">
    <div class="list-dropdown__header" @click="toggleList">
      <div
        class="list-dropdown__arrow"
        :class="{'list-dropdown__arrow_opened': isOpen}"
      >
      </div>
      <app-checkbox 
        class="list-dropdown__checkbox"
        :isChecked="checkboxStatus === 'true'" 
        :isIndeterminate="checkboxStatus === 'part'" 
        @check="checkList" 
      />
      <h4 class="list-dropdown__title">{{ list.title }}</h4>
    </div>
    <div v-if="isOpen" class="list-dropdown__items-wrap">
      <div v-for="item in list.items" :key="item.id">
        <list-item :item="item" :list="list"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ListItem from '@/components/ListItem.vue';

  export default {
    components: {
      ListItem,
    },
    props: {
      list: {
        type: Object,
        required: true
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

<style lang="scss" scoped>
.list-dropdown {
  &__wrap {
    box-shadow: 0 2px 7px rgba(0,0,0,.35);
    border-radius: 10px;
  }

  &__header {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 20px;
  }

  &__arrow {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-chevron-right' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    font-size: 20px;
    transition: all .3s;
    margin-right: 10px;
    
    &_opened {
      transform: rotate(90DEG);
    }
  }

  &__checkbox {
    font-size: 22px;
  }

  &__title {
    font-size: 30px;
    margin: 0 0 0 15px;
    font-weight: 600;
  }

  &__items-wrap {
    padding: 0 20px 20px 57px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>