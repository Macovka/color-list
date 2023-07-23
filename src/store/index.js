import { createStore } from 'vuex'

const store = createStore({
  state: {
    lists: [
      {
        title: 'List 1',
        id: 1,
        checkboxStatus: '',
        items: [
          {
            title: 'Item 1',
            id: 1,
            quantity: 10,
            color: '#f50505',
            isChecked: false,
          },
          {
            title: 'Item 2',
            id: 2,
            quantity: 16,
            color: '#FFFF06',
            isChecked: false,
          },
          {
            title: 'Item 3',
            id: 3,
            quantity: 40,
            color: '#48FF06',
            isChecked: false,
          },
          {
            title: 'Item 4',
            id: 4,
            quantity: 0,
            color: '#0616FF',
            isChecked: false,
          }
        ]
      },
      {
        title: 'List 2',
        id: 2,
        checkboxStatus: '',
        items: [
          {
            title: 'Item 1',
            id: 1,
            quantity: 14,
            color: '#B22222',
            isChecked: false,
          },
          {
            title: 'Item 2',
            id: 2,
            quantity: 6,
            color: '#00FA9A',
            isChecked: false,
          },
          {
            title: 'Item 3',
            id: 3,
            quantity: 35,
            color: '#C71585',
            isChecked: false
          },
          {
            title: 'Item 4',
            id: 4,
            quantity: 1,
            color: '#20B2AA',
            isChecked: false,
          },
          {
            title: 'Item 5',
            id: 5,
            quantity: 10,
            color: '#BDB76B',
            isChecked: false,
          },
          {
            title: 'Item 6',
            id: 6,
            quantity: 0,
            color: '#F5F5DC',
            isChecked: false,
          },
          {
            title: 'Item 7',
            id: 7,
            quantity: 18,
            color: '#F4A460',
            isChecked: false,
          },
          {
            title: 'Item 8',
            id: 8,
            quantity: 21,
            color: '#696969',
            isChecked: false,
          }
        ]
      },
      {
        title: 'List 3',
        id: 3,
        checkboxStatus: '',
        items: [
          {
            title: 'Item 1',
            id: 1,
            quantity: 8,
            color: '#808000',
            isChecked: false,
          },
          {
            title: 'Item 2',
            id: 2,
            quantity: 1,
            color: '#FF00FF',
            isChecked: false
          },
          {
            title: 'Item 3',
            id: 3,
            quantity: 2,
            color: '#808080',
            isChecked: false,
          },
          {
            title: 'Item 4',
            id: 4,
            quantity: 24,
            color: '#00FFFF',
            isChecked: false,
          },
          {
            title: 'Item 5',
            id: 5,
            quantity: 19,
            color: '#800000',
            isChecked: false,
          },
          {
            title: 'Item 6',
            id: 6,
            quantity: 16,
            color: '#00FF00',
            isChecked: false,
          }
        ]
      },
      {
        title: 'List 4',
        id: 4,
        checkboxStatus: '',
        items: [
          {
            title: 'Item 1',
            id: 1,
            quantity: 1,
            color: '#2F4F4F',
            isChecked: false,
          },
          {
            title: 'Item 2',
            id: 2,
            quantity: 0,
            color: '#D2691E',
            isChecked: false,
          },
          {
            title: 'Item 3',
            id: 3,
            quantity: 40,
            color: '#6A5ACD',
            isChecked: false,
          },
          {
            title: 'Item 4',
            id: 4,
            quantity: 4,
            color: '#9932CC',
            isChecked: false,
          },
          {
            title: 'Item 5',
            id: 5,
            quantity: 10,
            color: '#87CEFA',
            isChecked: false,
          },
          {
            title: 'Item 6',
            id: 6,
            quantity: 21,
            color: '#FF8C00',
            isChecked: false,
          },
          {
            title: 'Item 7',
            id: 7,
            quantity: 31,
            color: '#00FA9A',
            isChecked: false,
          },
          {
            title: 'Item 8',
            id: 8,
            quantity: 6,
            color: '#FF69B4',
            isChecked: false,
          },
          {
            title: 'Item 9',
            id: 9,
            quantity: 18,
            color: '#FFE4E1',
            isChecked: false,
          },
          {
            title: 'Item 10',
            id: 10,
            quantity: 16,
            color: '#006400',
            isChecked: false,
          }
        ]
      },
      {
        title: 'List 5',
        id: 5,
        checkboxStatus: '',
        items: [
          {
            title: 'Item 1',
            id: 1,
            quantity: 6,
            color: '#8B0000',
            isChecked: false,
          },
          {
            title: 'Item 2',
            id: 2,
            quantity: 2,
            color: '#006400',
            isChecked: false,
          },
          {
            title: 'Item 3',
            id: 3,
            quantity: 4,
            color: '#FF1493',
            isChecked: false,
          },
          {
            title: 'Item 4',
            id: 4,
            quantity: 40,
            color: '#FF4500',
            isChecked: false,
          },
          {
            title: 'Item 5',
            id: 5,
            quantity: 10,
            color: '#191970',
            isChecked: false,
          },
          {
            title: 'Item 6',
            id: 6,
            quantity: 16,
            color: '#8B008B',
            isChecked: false,
          },
          {
            title: 'Item 7',
            id: 7,
            quantity: 25,
            color: '#000000',
            isChecked: false,
          }
        ]
      }
    ],
  },
  mutations: { 
    setItemChecked(state, payload) {
      let { listId, itemId, checked } = payload;
      let list = state.lists.find(list => list.id === listId);
      let item = list.items.find(item => item.id === itemId);
      item.isChecked = checked;
      // Update list's checkboxStatus
      let allChecked = list.items.every(item => item.isChecked);
      let noneChecked = list.items.every(item => !item.isChecked);
      list.checkboxStatus = allChecked ? 'true' : noneChecked ? '' : 'part';
    },
    changeQuantity(state, payload) {
      payload.item.quantity = payload.value;
    },
    changeColor(state, payload) {
      payload.item.color = payload.value;
    },
    quantityDecrement(state, payload) {
      const { listId, itemId } = payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        const item = list.items.find((item) => item.id === itemId);
        if (item) {
          item.quantity--;
        }
      }
    }
  },
  getters: { 
    
  },
  actions: {

  }
})

export default store;