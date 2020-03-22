import { createStore, combineReducers } from 'redux'
import axios from 'axios'
import { find } from 'lodash'

const initialState = {
    schedules: [],
    selectedHalls: [],
}

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SHEDULES':
      const colors = ['#67b7dc', '#6771dc', '#a367dc', '#dc67ce', '#dc6788', '#dc8c67', '#dcd267'];
      return {
        schedules: action.schedules,
        selectedHalls: action.schedules.reduce((memo, item) => {
          if (!find(memo, { name: item.hall }))
            memo.push({
              name: item.hall,
              color: colors[memo.length],
              selected: true
            });
          return memo;
        }, [])
      };
    case 'TOGGLE_HALL':      
      return {
        ...state,
        selectedHalls: state.selectedHalls.map(item => {
          return {...item, selected: item.name === action.name ? !item.selected : item.selected}
        })        
      }
    default:
      return state;
  }
}

const store = createStore(combineReducers({calendar}))

axios.get('https://kirill-for-testjob.azurewebsites.net/api/calendar').then(response => {
  store.dispatch({
    type: 'FETCH_SHEDULES',
    schedules: response.data
  });
})

export default store

//store.subscribe(()=> console.log(store.getState()))