import React, { Component } from 'react';

import Dropdown from '../common/Dropdown';
import Input from '../common/Input';
import Label from '../common/Label';
import * as accountUtils from '../utils/account';

import './ExchangeCard.css';

class ExchangeCard extends Component {
  render() {
    const { direction, wallets, selected, onSelect } = this.props;

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

    const amount = direction === 'from' ? <Input /> : <Label caption={10} size="middle" />;

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
          {amount}
        </div>
      </div>
    );
  }
}

export default ExchangeCard;
