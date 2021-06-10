import { TOGGLE_APP_MENU } from "./actionTypes";

const initialState = {
  isOpenMenu: false,

};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_APP_MENU:
      return {
        ...state,
        isOpenMenu: !state.isOpenMenu,
      };
    default:
      return state;
  }
};
