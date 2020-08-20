const initialState = {
  items: [
    { id: 0, name: 'Штук', shortName: 'шт.' },
  ],
};

const units = (state = initialState, action) => {
  switch(action.type) {
  case 'SET_UNITS': {
    return {
      ...state,
      items: action.payload,
    };
  }
  case 'ADD_UNIT': {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }
  case 'SELECT_UNIT': {
    return {
      ...state,
      selectedItem: state.items.find((item) => item.id === action.payload.id),
    };
  }
  case 'EDIT_UNIT': {
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
  case 'DELETE_UNIT': {
    return {
      ...state,
      items: state.items.filter(({ id }) => id !== action.payload),
    };
  }
  default: return state;
  }
};

export default units;
