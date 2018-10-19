import Rate from '../data/Rate';

export const SET_FROM = 'SET_FROM';

export const SET_TO = 'SET_TO';

export const LAUNCH_POLLING = 'LAUNCH_POLLING';

export const FINISH_POLLING = 'FINISH_POLLING';

export const UPDATE_RATE = 'UPDATE_RATE';

export const UPDATE_RATE_SUCCESS = 'UPDATE_RATE_SUCCESS';

export const UPDATE_RATE_FAIL = 'UPDATE_RATE_FAIL';

export function setFrom(wallet) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_FROM,
      payload: wallet,
    });

    dispatch({
      type: UPDATE_RATE,
    });

    const base = wallet.currency.shortName;
    const toAccount = getState().exchange.to;
    if (!toAccount) {
      return;
    }
    const target = toAccount.currency.shortName;
    const pollRate = () =>
      updateRate(base, target).then(rate => {
        dispatch({
          type: UPDATE_RATE_SUCCESS,
          payload: rate,
        });

        setTimeout(pollRate, 10000);
      });
    pollRate();
  };
}

export function setTo(wallet) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TO,
      payload: wallet,
    });

    dispatch({
      type: UPDATE_RATE,
    });

    const base = getState().exchange.from.currency.shortName;
    const target = wallet.currency.shortName;
    const pollRate = () =>
      updateRate(base, target).then(rate => {
        dispatch({
          type: UPDATE_RATE_SUCCESS,
          payload: rate,
        });

        setTimeout(pollRate, 10000);
      });
    pollRate();
  };
}

function updateRate(base, target) {
  return Rate.get(base).then(data => {
    return data.rates[target];
  });
}
