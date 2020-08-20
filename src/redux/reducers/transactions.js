const initialState = {
  items: [
    { id: 0, wallet: 'Безналичный', value: '200', type: 'Приход', time: '07.07.2020 18:56:23' },
    { id: 1, wallet: 'Безналичный', value: '15500', type: 'Приход', time: '08.07.2020 19:07:20' },
    { id: 2, wallet: 'Наличный', value: '800', type: 'Расход', time: '08.07.2020 13:00:49' },
    { id: 3, wallet: 'Перевод', value: '395', type: 'Приход', time: '10.07.2020 09:36:07' },
  ],
};

const transactions = (state = initialState, action) => {
  switch(action.type) {
  case 'SET_TRANSACTIONS': {
    return {
      ...state,
      items: action.payload,
    };
  }
  case 'ADD_TRANSACTION': {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }
  case 'SELECT_TRANSACTION': {
    return {
      ...state,
      selectedItem: state.items.find((item) => item.id === action.payload.id),
    };
  }
  case 'EDIT_TRANSACTION': {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { id: item.id, ...action.payload };
        }
  
        return item;
      }),
    };
  }
  case 'DELETE_TRANSACTION': {
    return {
      ...state,
      items: state.items.filter(({ id }) => id !== action.payload),
    };
  }
  default: return state;
  }
};

export default transactions;
