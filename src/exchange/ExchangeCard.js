import React, { Component } from 'react';

import Dropdown from '../common/Dropdown';
import Input from '../common/Input';
import Label from '../common/Label';
import * as accountUtils from '../utils/account';

import './ExchangeCard.css';

class ExchangeCard extends Component {
  handleInputChange(event) {
    this.props.onAmountChange(parseFloat(event.target.value));
  }

  render() {
    const { direction, wallets, selected, onSelect, amount } = this.props;

    const dropdownOptionTemplate = option => {
      const currency = option && option.currency;
      const displayName = option ? `${currency && currency.shortName} - ${option.name}` : '';
      const balance = option ? accountUtils.formatBalance(option) : 'N/A';
      return (
        <div className="account-dropdown-option">
          <div>
            {currency && currency.icon} {displayName}
          </div>
          <Label caption={balance} />
        </div>
      );
    };

    const amountTemplate =
      direction === 'from' ? (
        <div className="from-amount">
          <Label caption="-" size="large" />
          <Input value={amount} autoFocus={true} onChange={this.handleInputChange.bind(this)} />
        </div>
      ) : (
        <div className="to-amount">
          <Label caption={`+${amount.toFixed(2)}`} size="middle" />
        </div>
      );

    return (
      <div className="exchange-card">
        <Label caption={direction} size="middle" />
        <div>
          <Dropdown
            options={wallets}
            value={selected}
            optionTemplate={dropdownOptionTemplate}
            onSelect={onSelect}
            size="middle"
          />
          {amountTemplate}
        </div>
      </div>
    );
  }
}

export default ExchangeCard;
