import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExchangeCard from './ExchangeCard';
import ExchangeRate from './ExchangeRate';
import Button from '../common/Button';
import { getWallets, updateAccount } from '../actions/account';
import { setFrom, setTo, updateAmount } from '../actions/exchange';

import './ExchangeWidget.css';

class ExchangeWidget extends Component {
  submit = {
    canExecute: () => {
      const { from, fromAmount, to } = this.props.exchange;
      const isEnoughBalance = from && from.balance >= fromAmount;
      const isValidAmount = !isNaN(fromAmount);
      return (
        from &&
        to &&
        parseFloat(fromAmount) !== 0 &&
        from.currency.shortName !== to.currency.shortName &&
        isEnoughBalance &&
        isValidAmount
      );
    },
    execute: () => {
      const { from, fromAmount, to, toAmount } = this.props.exchange;
      const { setFromAction, setToAction } = this.props;

      from.balance -= fromAmount;
      const newFrom = { ...from };
      updateAccount(newFrom);
      setFromAction(newFrom);

      to.balance += toAmount;
      const newTo = { ...to };
      updateAccount();
      setToAction(newTo);
    },
  };

  componentDidMount() {
    this.props.getWalletsAction();
  }

  handleKeydown(event) {
    if (event.key === 'Enter' && this.submit.canExecute()) {
      this.submit.execute();
    }
  }

  render() {
    const { from, to, rate, rateLoading, fromAmount, toAmount } = this.props.exchange;
    const baseCurrency = from ? from.currency : null;
    const targetCurrency = to ? to.currency : null;
    const { wallets } = this.props.account;
    const { setFromAction, setToAction, changeAmountAction } = this.props;

    return (
      <div className="exchange-widget" onKeyDown={this.handleKeydown.bind(this)}>
        <ExchangeRate base={baseCurrency} target={targetCurrency} rate={rate} loading={rateLoading} />
        <ExchangeCard
          direction="from"
          wallets={wallets}
          selected={from}
          onSelect={setFromAction}
          amount={fromAmount}
          onAmountChange={changeAmountAction}
        />
        <ExchangeCard direction="to" wallets={wallets} selected={to} onSelect={setToAction} amount={toAmount} />
        <Button caption="Exchange" type="primary" canClick={this.submit.canExecute} onClick={this.submit.execute} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  account: store.account,
  exchange: store.exchange,
});

const mapDispatchToProps = dispatch => ({
  getWalletsAction: () => dispatch(getWallets()),
  setFromAction: account => dispatch(setFrom(account)),
  setToAction: account => dispatch(setTo(account)),
  changeAmountAction: amount => dispatch(updateAmount(amount)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeWidget);
