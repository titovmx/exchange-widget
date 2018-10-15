export function setFrom(wallet) {
  return {
    type: 'SET_FROM',
    payload: wallet,
  };
}

export function setTo(wallet) {
  return {
    type: 'SET_TO',
    payload: wallet,
  };
}
