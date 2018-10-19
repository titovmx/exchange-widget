import { SET_FROM, SET_TO, UPDATE_RATE, UPDATE_RATE_SUCCESS } from '../actions/exchange';

const initialState = {
  rate: 1,
  rateLoading: false,
  from: null,
  to: null,
  fromAmount: 0,
  toAmount: 0,
};

export function exchangeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FROM:
      return { ...state, from: action.payload, rate: { base: action.payload.currency } };
    case SET_TO:
      return { ...state, to: action.payload, rate: { to: action.payload.currency } };
    case UPDATE_RATE:
      return { ...state, rateLoading: true };
    case UPDATE_RATE_SUCCESS:
      return { ...state, rate: action.payload, rateLoading: false };
    default:
      return state;
  }
}
