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
        color: '#f50505'
      },
      {
        title: 'Item 2',
        quantity: 16,
        color: '#FFFF06'
      },
      {
        title: 'Item 3',
        quantity: 40,
        color: '#48FF06'
      },
      {
        title: 'Item 4',
        quantity: 0,
        color: '#0616FF'
      }
    ]
  },
  mutations: { 
    
  },
  getters: { 
    
  },
  actions: {

  }
})

export default store;