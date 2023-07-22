<template>
  <div class="list-block">
    <div class="list-block__title-wrapper">
      {{ list }}
      <button>Премешать</button>
    </div>
    <div class="list-block__squares">
      <div v-for="index in quantity" :key="index" class="square"></div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      list: {
        type: String,
        reqired: true
      }
    },
    computed: {
      ...mapState({
        quantity: state => state.quantity,
        color: state => state.color,
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
    justify-content: space-between;
  }
}

.square {
  width: 10px;
	height: 10px;
	background: red;
}
</style>