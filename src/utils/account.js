export function formatBalance(account) {
  return account ? `${account.balance}${account.currency.symbol}` : 'N/A';
}
