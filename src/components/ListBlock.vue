<template>
  <div class="list-block">
    <div class="list-block__title-wrapper">
      {{ list.title }}
      <button>Премешать</button>
      <button>Премешать</button>
    </div>
    <div v-if="list.checkboxStatus === 'true' || 'part'">
      <div 
        v-for="item in list.items" 
        :key="item.id" 
      >
      <div v-if="item.isChecked" class="list-block__squares">
        <div
          v-for="(square, index) in selectedSquares(item)" 
          :key="index"
          class="square" 
          :style="{ backgroundColor: item.color }"
        ></div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Object,
        required: true
      }
    },
    computed: {
      // Функция для вычисления выбранных квадратиков для конкретного элемента
      selectedSquares() {
        return (item) => {
          // Создаем новый массив для хранения выбранных квадратиков
          const squares = [];
          // Получаем количество выбранного элемента
          const quantity = +item.quantity;
          // Генерируем объекты с свойствами id и color для каждого квадратика
          for (let i = 0; i < quantity; i++) {
            squares.push({ id: item.id, color: item.color });
          }
          return squares;
        };
      },
    },
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