import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccountCard from './AccountCard';
import Button from '../common/Button';

import './ExchangeWidget.css';

class ExchangeWidget extends Component {
  submit = {
    canExecute: () => true,
    execute: () => {
      console.log('Exchangeqewqwe!');
    },
  };

  render() {
    const { from, to } = this.props.account;

    return (
      <div className="exchange-widget">
        <AccountCard direction="from" account={from} />
        <AccountCard direction="to" account={to} />
        <Button caption="Exchange" type="primary" canClick={this.submit.canExecute} onClick={this.submit.execute} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  account: store.account,
  exchange: store.exchange,
});

export default connect(mapStateToProps)(ExchangeWidget);
