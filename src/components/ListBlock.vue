<template>
  <div class="list-block">
    <div class="list-block__title-wrapper">
      {{ list.title }}
      <button @click="shuffleSquares(commonArray)">Перемешать</button>
      <button @click="sortSquares">Сортировать</button>
    </div>
    <div v-if="list.checkboxStatus === 'true' || 'part'">
      <div 
        v-for="item in list.items" 
        :key="item.id" 
      >
        <div v-if="item.isChecked">
          <div v-if="!shuffled" class="list-block__squares">
            <div
              v-for="(square, index) in selectedSquares(item)" 
              :key="index"
              class="square" 
              :style="{ backgroundColor: item.color }"
            ></div>
          </div>  
        </div>
      </div>
      <div v-if="shuffled" class="list-block__squares">
        <div
          v-for="item in commonArray" 
          :key="item.color"
          class="square" 
          :style="{ backgroundColor: item.color }"
        ></div>
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
    data() {
      return {
        shuffled: false,
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
      checkedItems() {
        return this.list.items.filter((item) => item.isChecked);
      },
      commonArray() {
        // Создание массив объектов, где каждый объект представляет элемент item,
        // и количество объектов для каждого элемента равно его свойству quantity
        const commonArray = [];
        this.checkedItems.forEach((item) => {
          const quantity = item.quantity;
          for (let i = 0; i < quantity; i++) {
            commonArray.push({ id: item.id, color: item.color });
          }
        });
        return commonArray;
      }
    },
    methods: {
      shuffleSquares(array) {     
        // Тасование Фишера — Йетса
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        
        this.shuffled = true;
      },
      sortSquares() {
        this.shuffled = false;
      }
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