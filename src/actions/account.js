import wallets from '../assets/data/wallets.json';
import { setFrom, setTo } from './exchange.js';

export const GET_WALLETS_REQUEST = 'GET_WALLETS_REQUEST';

export const GET_WALLETS_SUCCESS = 'GET_WALLETS_SUCCESS';

export const GET_WALLETS_FAILED = 'GET_WALLETS_FAILED';

export const UPDATE_WALLETS = 'UPDATE_WALLETS';

export function getWallets() {
  return dispatch => {
    dispatch({
      type: GET_WALLETS_REQUEST,
    });

    setTimeout(() => {
      dispatch({
        type: GET_WALLETS_SUCCESS,
        payload: wallets,
      });
      if (wallets.length > 1) {
        dispatch(setFrom(wallets[0]));
        dispatch(setTo(wallets[1]));
      }
    }, 100);
  };
}

export function updateAccount(account) {
  return (dispatch, getState) => {
    const wallets = getState().account.wallets;
    const accountIndex = wallets.findIndex(w => w.name === account.name);
    wallets.splice(accountIndex, 1, [account]);
    dispatch({
      type: UPDATE_WALLETS,
      payload: [...wallets],
    });
  };
}
