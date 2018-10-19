import React, { Component } from 'react';

import Label from '../common/Label';

import './ExchangeRate.css';

class ExchangeRate extends Component {
  render() {
    const { base, target, rate, loading } = this.props;
    let caption = '...';
    if (base && target && !loading) {
      caption = `
        ${base.symbol}1
        = 
        ${target.symbol}${rate.toFixed(4)}`;
    }

    return (
      <div className="exchange-rate">
        <Label caption={caption} size="middle" />
      </div>
    );
  }
}

export default ExchangeRate;
