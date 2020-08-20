const initialState = {
  items: [
    { id: 0, type: 'Наличный', balance: '82450' },
    { id: 1, type: 'Безналичный', balance: '42500' },
    { id: 2, type: 'Перевод', balance: '1000' },
  ],
};

const wallets = (state = initialState, action) => {
  switch(action.type) {
  case 'SET_WALLETS': {
    return {
      ...state,
      items: action.payload,
    };
  }
  case 'ADD_WALLET': {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }
  case 'SELECT_WALLET': {
    return {
      ...state,
      selectedItem: state.items.find((item) => item.id === action.payload.id),
    };
  }
  case 'EDIT_WALLET': {
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
  case 'DELETE_WALLET': {
    return {
      ...state,
      items: state.items.filter(({ id }) => id !== action.payload),
    };
  }
  default: return state;
  }
};

export default wallets;
