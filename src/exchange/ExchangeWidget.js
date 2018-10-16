import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccountCard from './AccountCard';
import Button from '../common/Button';

import './ExchangeWidget.css';

class ExchangeWidget extends Component {
  render() {
    return (
      <div className="exchange-widget">
        <AccountCard direction="from" />
        <AccountCard direction="to" />
        <Button caption="Exchange" type="primary" />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  account: store.account,
  exchange: store.exchange,
});

export default connect(mapStateToProps)(ExchangeWidget);
