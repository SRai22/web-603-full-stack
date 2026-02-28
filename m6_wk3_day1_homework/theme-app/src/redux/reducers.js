import { TOGGLE_DARKTHEME } from './actions';

const initialState = {
  preferences: {
    darkThemeEnabled: false
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKTHEME:
      return {
        ...state,
        preferences: {
          ...state.preferences,
          darkThemeEnabled: !state.preferences.darkThemeEnabled
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
