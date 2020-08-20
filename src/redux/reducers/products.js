const initialState = {
  items: [
    { id: 0, name: 'Эспрессо', unit: 'штук', price: 500 },
    { id: 1, name: 'Американо', unit: 'штук', price: 500 },
    { id: 2, name: 'Капучино', unit: 'штук', price: 700 },
    { id: 3, name: 'Флэт Уайт', unit: 'штук', price: 700 },
  ],
};

const products = (state = initialState, action) => {
  switch(action.type) {
  case 'SET_PRODUCTS': {
    return {
      ...state,
      items: action.payload,
    };
  }
  case 'ADD_PRODUCT': {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }
  case 'SELECT_PRODUCT': {
    return {
      ...state,
      selectedItem: state.items.find(({ id }) => id === action.payload),
    };
  }
  case 'EDIT_PRODUCT': {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...action.payload };
        }

        return item;
      }),
    };
  }
  case 'DELETE_PRODUCT': {
    return {
      ...state,
      items: state.items.filter(({ id }) => id !== action.payload),
    };
  }
  default: return state;
  }
};

export default products;
