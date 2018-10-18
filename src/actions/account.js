import wallets from '../assets/data/wallets.json';
import { SET_FROM, SET_TO } from './exchange.js';

export const GET_WALLETS_REQUEST = 'GET_WALLETS_REQUEST';

export const GET_WALLETS_SUCCESS = 'GET_WALLETS_SUCCESS';

export const GET_WALLETS_FAILED = 'GET_WALLETS_FAILED';

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
        dispatch({
          type: SET_FROM,
          payload: wallets[0],
        });
        dispatch({
          type: SET_TO,
          payload: wallets[1],
        });
      }
    }, 1000);
  };
}
