import { SET_FROM, SET_TO } from '../actions/exchange';

const initialState = {
  rates: [],
  from: null,
  to: null,
};

export function exchangeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FROM:
      return { ...state, from: action.payload };
    case SET_TO:
      return { ...state, to: action.payload };
    default:
      return state;
  }
}
