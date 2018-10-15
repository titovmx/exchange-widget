import React, { Component } from 'react';

import Dropdown from '../common/Dropdown';
import Label from '../common/Label';

import './AccountCard.css';

class AccountCard extends Component {
  state = {
    accounts: [
      {
        icon: 'g',
        shortName: 'GBP',
        balance: 233.5,
      },
      {
        icon: '$',
        shortName: 'USD',
        balance: 50,
      },
    ],
    selectedAccount: 'GBP',
  };

  selectAccount(option) {
    console.log('SELECT ACCOUNT ', option);
  }

  render() {
    const { direction } = this.props;

    const dropdownOptionTemplate = option => (
      <div className="account-dropdown-option">
        <div>
          {option.icon} {option.shortName}
        </div>
        <Label caption={option.balance} />
      </div>
    );

    return (
      <div className="account-card">
        <Label caption={direction} size="middle" />
        <Dropdown
          options={this.state.accounts}
          value={this.state.accounts[0]}
          optionTemplate={dropdownOptionTemplate}
          onSelect={this.selectAccount}
        />
        <Label caption="You have balance" />
      </div>
    );
  }
}

export default AccountCard;
