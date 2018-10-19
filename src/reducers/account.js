import { GET_WALLETS_REQUEST, GET_WALLETS_SUCCESS, UPDATE_WALLETS } from '../actions/account';

const initialState = {
  wallets: [],
  loading: false,
};

export function accountReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WALLETS_REQUEST:
      return { ...state, loading: true };
    case GET_WALLETS_SUCCESS:
      return { ...state, wallets: action.payload, loading: false };
    case UPDATE_WALLETS:
      return { ...state, wallets: action.payload };
    default:
      return state;
  }
}
