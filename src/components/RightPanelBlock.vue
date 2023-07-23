<template>
  <div class="right-panel-block">
    <div class="right-panel-block__header">
      <h5 class="right-panel-block__title"> {{ list.title }}</h5>
      <button 
        v-if="!shuffled" 
        class="right-panel-block__action-btn"
        @click="shuffleSquares(shuffledArray)"
      >
        Перемешать
      </button>
      <button 
        v-else 
        class="right-panel-block__action-btn"
        @click="sortSquares"
      >
        Сортировать
      </button>
    </div>
    <div 
      v-if="list.checkboxStatus === 'true' || list.checkboxStatus === 'part'"
      class="right-panel-block__content"
    >
      <div 
        class="right-panel-block__squares-wrap"
        v-for="item in list.items" 
        :key="item.id" 
      >
        <div v-if="item.isChecked && !shuffled" 
          class="right-panel-block__squares"
        >
          <div
            v-for="(square, index) in selectedSquares(item)" 
            :key="index"
            class="square" 
            :style="{ backgroundColor: item.color }"
            @click="deleteSquare(item)"
          ></div>
        </div>  
      </div>
      <div v-if="shuffled" class="right-panel-block__squares">
        <div
          v-for="(item, index) in shuffledArray" 
          :key="index"
          class="square" 
          :style="{ backgroundColor: item.color }"
          @click="deleteSquare(item)"
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
      selectedSquares() {
        return (item) => {
          // New array for storage selected squares
          const squares = [];
          // Quantity of cheked items
          const quantity = +item.quantity;
          for (let i = 0; i < quantity; i++) {
            squares.push({ id: item.id, color: item.color });
          }
          return squares;
        };
      },
      checkedItems() {
        return this.list.items.filter((item) => item.isChecked);
      },
      shuffledArray() {
        // An array of objects, where each object represents an item,
        // and the number of objects for each element is equal to its quantity property
        const commonArray = [];
        this.checkedItems.forEach((item) => {
          const quantity = item.quantity;
          for (let i = 0; i < quantity; i++) {
            commonArray.push({ id: item.id, color: item.color });
          }
        })
        this.shuffleSquares(commonArray);
        return commonArray;
      }
    },
    methods: {
      shuffleSquares(array) {     
        this.shuffled = true;
        const shuffledArray = array.slice();
        // Fisher-Yates shuffle
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return shuffledArray;
      },
      sortSquares() {
        this.shuffled = false;
      },
      deleteSquare(item) {
        if (this.shuffled) {
          const id = item.id;
          const shuffledItem = this.shuffledArray.find((item) => item.id === id);
          if (shuffledItem) {
            this.$store.commit('quantityDecrement', {
              listId: this.list.id,
              itemId: shuffledItem.id
            });
          }
        } else {
          this.$store.commit('quantityDecrement', {
            listId: this.list.id,
            itemId: item.id
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.right-panel-block {
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.35);
  padding: 20px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    margin: 0;
    font-size: 16px;
  }

  &__action-btn {
    color: #fff;
    background-color: #337ab7;
    border: none;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    padding: 6px 12px;
    font-size: 16px;
    border-radius: 4px;
  }

  &__content {
    margin-top: 10px;
  }

  &__squares-wrap {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__squares {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }
}

.square {
  width: 20px;
	height: 20px;
  border-radius: 6px;
  cursor: pointer;
}
</style>