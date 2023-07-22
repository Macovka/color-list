import { createStore } from 'vuex'

const store = createStore({
  state: {
    lists: [
      {
        title: 'List 1',
        selected: false
      },
      {
        title: 'List 2',
        selected: false
      },
      {
        title: 'List 3',
        selected: false
      },
      {
        title: 'List 4',
        selected: false
      },
    ],
    items: [
      {
        title: 'Item 1',
        quantity: 10,
        color: '#f50505',
        selected: false
      },
      {
        title: 'Item 2',
        quantity: 16,
        color: '#FFFF06',
        selected: false
      },
      {
        title: 'Item 3',
        quantity: 40,
        color: '#48FF06',
        selected: false
      },
      {
        title: 'Item 4',
        quantity: 0,
        color: '#0616FF',
        selected: false
      }
    ]
  },
  mutations: { 
    toggleListSelected(state, currentList) {
      state.list = currentList;
      state.list.selected = !state.list.selected;
    },
    toggleItemSelected(state, currentItem) {
      state.item = currentItem;
      state.item.selected = !state.item.selected;
    },
  },
  getters: { 
    
  },
  actions: {

  }
})

export default store;