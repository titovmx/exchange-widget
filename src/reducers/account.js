import { GET_WALLETS_REQUEST, GET_WALLETS_SUCCESS, GET_WALLETS_FAILED } from '../actions/account';

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
    case GET_WALLETS_FAILED:
      return state;
    default:
      return state;
  }
}
