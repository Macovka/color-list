<template>
  <div class="list-block">
    <div class="list-block__title-wrapper">
      {{ list.title }}
      <button>Премешать</button>
    </div>
    <div v-if="list.selected">
      <div 
        v-for="item in items" 
        :key="item" 
        class="list-block__squares"
      >
        <div 
          v-for="index in item.quantity" 
          :key="index"
          class="square" 
          :style="{ backgroundColor: item.color }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      list: {
        type: String,
        required: true
      }
    },
    computed: {
      ...mapState({
        items: state => state.items
      }),
    }
  }
</script>

<style lang="scss" scoped>
.list-block {
  border: 1px solid black;
  padding: 10px;

  &__title-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__squares {
    display: flex;
    flex-direction: row;
  }
}

.square {
  width: 10px;
	height: 10px;
  margin-right: 2px;
}
</style>