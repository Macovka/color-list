import { createStore } from 'vuex'

const store = createStore({
  state: {
    lists: [
      {
        title: 'List 1',
        id: 1,
        selected: false,
        partSelect: false,
        checkboxStatus: '',
        items: [
          {
            title: 'Item 1',
            id: 1,
            quantity: 10,
            color: '#f50505',
            selected: false,
            isChecked: false,
          },
          {
            title: 'Item 2',
            id: 2,
            quantity: 16,
            color: '#FFFF06',
            selected: false,
            isChecked: false,
          },
          {
            title: 'Item 3',
            id: 3,
            quantity: 40,
            color: '#48FF06',
            selected: false,
            isChecked: false,
          },
          {
            title: 'Item 4',
            id: 4,
            quantity: 0,
            color: '#0616FF',
            selected: false,
            isChecked: false,
          }
        ]
      },
      {
        title: 'List 2',
        id: 2,
        selected: false,
        partSelect: false,
        checkboxStatus: '',
        items: [
          {
            title: 'Item 1',
            id: 1,
            quantity: 10,
            color: '#f50505',
            selected: false,
            isChecked: false,
          },
          {
            title: 'Item 2',
            id: 2,
            quantity: 16,
            color: '#FFFF06',
            selected: false,
            isChecked: false,
          },
          {
            title: 'Item 3',
            id: 3,
            quantity: 40,
            color: '#48FF06',
            selected: false
          },
          {
            title: 'Item 4',
            id: 4,
            quantity: 0,
            color: '#0616FF',
            selected: false,
            isChecked: false,
          }
        ]
      },
      {
        title: 'List 3',
        id: 3,
        selected: false,
        partSelect: false,
        checkboxStatus: '',
        items: [
          {
            title: 'Item 1',
            id: 1,
            quantity: 10,
            color: '#f50505',
            selected: false,
            isChecked: false,
          },
          {
            title: 'Item 2',
            id: 2,
            quantity: 16,
            color: '#FFFF06',
            selected: false
          },
          {
            title: 'Item 3',
            id: 3,
            quantity: 40,
            color: '#48FF06',
            selected: false,
            isChecked: false,
          },
          {
            title: 'Item 4',
            id: 4,
            quantity: 0,
            color: '#0616FF',
            selected: false,
            isChecked: false,
          }
        ]
      },
      {
        title: 'List 4',
        id: 4,
        selected: false,
        partSelect: false,
        checkboxStatus: '',
        items: [
          {
            title: 'Item 1',
            id: 1,
            quantity: 10,
            color: '#f50505',
            selected: false,
            isChecked: false,
          },
          {
            title: 'Item 2',
            id: 2,
            quantity: 16,
            color: '#FFFF06',
            selected: false,
            isChecked: false,
          },
          {
            title: 'Item 3',
            id: 3,
            quantity: 40,
            color: '#48FF06',
            selected: false,
            isChecked: false,
          },
          {
            title: 'Item 4',
            id: 4,
            quantity: 0,
            color: '#0616FF',
            selected: false,
            isChecked: false,
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
    },
    setItemChecked(state, payload) {
      let { listId, itemId, checked } = payload;
      let list = state.lists.find(list => list.id === listId);
      console.log(list)
      let item = list.items.find(item => item.id === itemId);
      item.isChecked = checked;
      // Update list's checkboxStatus
      let allChecked = list.items.every(item => item.isChecked);
      let noneChecked = list.items.every(item => !item.isChecked);
      list.checkboxStatus = allChecked ? true : noneChecked ? '' : 'part';
  },
  },
  getters: { 
    
  },
  actions: {

  }
})

export default store;