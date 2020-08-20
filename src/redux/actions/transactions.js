export const setTransactions = (items) => {
  return {
    type: 'SET_TRANSACTIONS',
    payload: items,
  };
};

export const addTransaction = (obj) => {
  return {
    type: 'ADD_TRANSACTION',
    payload: obj,
  };
};

export const selectTransaction = (id) => {
  return {
    type: 'SELECT_TRANSACTION',
    payload: id,
  };
};

export const editTransaction = (id, obj) => {
  return {
    type: 'EDIT_TRANSACTION',
    payload: { id, ...obj },
  };
};

export const deleteTransaction = (id) => {
  return {
    type: 'DELETE_TRANSACTION',
    payload: id,
  };
};
