import { createStore } from 'vuex'

const store = createStore({
  state: {
    lists: [
      {
        title: 'List 1',
        selected: false,
        partSelect: false,
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
      {
        title: 'List 2',
        selected: false,
        partSelect: false,
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
      {
        title: 'List 3',
        selected: false,
        partSelect: false,
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
      {
        title: 'List 4',
        selected: false,
        partSelect: false,
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
    ],
  },
  mutations: { 
    toggleListSelected(state, currentList) {
      currentList.selected = !currentList.selected;
    },
    setListSelectValue(state, payload) {
      const { currentList, value } = payload;
      currentList.selected = value;
    },
    toggleItemSelected(state, currentItem) {
      currentItem.selected = !currentItem.selected;
    },
    setItemSelectValue(state, payload) {
      const { currentList, value } = payload;
      currentList.items.forEach(item => item.selected = value);
    },
    setPartSelect(state, payload) {
      const { currentList, value } = payload;
      currentList.partSelect = value;
    }
  },
  getters: { 
    
  },
  actions: {

  }
})

export default store;