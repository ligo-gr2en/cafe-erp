export const setWallets = (items) => {
  return {
    type: 'SET_WALLETS',
    payload: items,
  };
};

export const addWallet = (obj) => {
  return {
    type: 'ADD_WALLET',
    payload: obj,
  };
};

export const selectWallet = (id) => {
  return {
    type: 'SELECT_WALLET',
    payload: id,
  };
};

export const editWallet = (id, obj) => {
  return {
    type: 'EDIT_WALLET',
    payload: { id, ...obj },
  };
};

export const deleteWallet = (id) => {
  return {
    type: 'DELETE_WALLET',
    payload: id,
  };
};
