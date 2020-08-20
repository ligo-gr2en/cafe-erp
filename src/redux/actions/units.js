export const setUnits = (items) => {
  return {
    type: 'SET_UNITS',
    payload: items,
  };
};

export const addUnit = (obj) => {
  return {
    type: 'ADD_UNIT',
    payload: obj,
  };
};

export const selectUnit = (id) => {
  return {
    type: 'SELECT_UNIT',
    payload: id,
  };
};

export const editUnit = (id, obj) => {
  return {
    type: 'EDIT_UNIT',
    payload: { id, ...obj },
  };
};

export const deleteUnit = (id) => {
  return {
    type: 'DELETE_UNIT',
    payload: id,
  };
};
