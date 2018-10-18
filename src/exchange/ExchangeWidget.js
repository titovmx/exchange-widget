import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExchangeCard from './ExchangeCard';
import Button from '../common/Button';
import { getWallets } from '../actions/account';

import './ExchangeWidget.css';
import { setFrom, setTo } from '../actions/exchange';

class ExchangeWidget extends Component {
  submit = {
    canExecute: () => true,
    execute: () => {
      console.log('Exchangeqewqwe!');
    },
  };

  componentDidMount() {
    this.props.getWalletsAction();
  }

  render() {
    const { from, to } = this.props.exchange;
    const { wallets } = this.props.account;
    const { setFromAction, setToAction } = this.props;

    return (
      <div className="exchange-widget">
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
