export const setProducts = (items) => {
  return {
    type: 'SET_PRODUCTS',
    payload: items,
  };
};

export const addProduct = (obj) => {
  return {
    type: 'ADD_PRODUCT',
    payload: obj,
  };
};

export const selectProduct = (id) => {
  return {
    type: 'SELECT_PRODUCT',
    payload: id,
  };
};

export const editProduct = (id, obj) => {
  return {
    type: 'EDIT_PRODUCT',
    payload: { id, ...obj },
  };
};

export const deleteProduct = (id) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: id,
  };
};
