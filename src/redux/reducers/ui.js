const initialState = {
  showTablePopover: false,
};

const ui = (state = initialState, action) => {
  switch(action.type) {
  case 'TOGGLE_TABLE_POPOVER': {
    return {
      ...state,
      showTablePopover: !state.showTablePopover,
    };
  }
  default: return state;
  }
};

export default ui;
