export function formatBalance(account) {
  return account ? `${account.balance.toFixed(2)}${account.currency.symbol}` : 'N/A';
}
