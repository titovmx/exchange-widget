import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExchangeCard from './ExchangeCard';
import ExchangeRate from './ExchangeRate';
import Button from '../common/Button';
import { getWallets } from '../actions/account';
import { setFrom, setTo } from '../actions/exchange';

import './ExchangeWidget.css';

class ExchangeWidget extends Component {
  submit = {
    canExecute: () => {
      const { from, to } = this.props.exchange;
      return from && to && from.currency.shortName !== to.currency.shortName;
    },
    execute: () => {
      console.log('Exchangeqewqwe!');
    },
  };

  componentDidMount() {
    this.props.getWalletsAction();
  }

  render() {
    const { from, to, rate, rateLoading } = this.props.exchange;
    const baseCurrency = from ? from.currency : null;
    const targetCurrency = to ? to.currency : null;
    const { wallets } = this.props.account;
    const { setFromAction, setToAction } = this.props;

    return (
      <div className="exchange-widget">
        <ExchangeRate base={baseCurrency} target={targetCurrency} rate={rate} loading={rateLoading} />
        <ExchangeCard direction="from" wallets={wallets} selected={from} onSelect={setFromAction} />
        <ExchangeCard direction="to" wallets={wallets} selected={to} onSelect={setToAction} />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeWidget);
