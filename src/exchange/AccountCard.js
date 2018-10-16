import React, { Component } from 'react';

import Dropdown from '../common/Dropdown';
import Input from '../common/Input';
import Label from '../common/Label';

import './AccountCard.css';

class AccountCard extends Component {
  state = {
    accounts: [
      {
        icon: 'g',
        shortName: 'GBP',
        balance: 133.5,
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

    const amount = direction === 'from' ? <Input /> : <Label caption={'10'} />;

    return (
      <div className="account-card">
        <Label caption={direction} size="middle" />
        <div>
          <Dropdown
            options={this.state.accounts}
            value={this.state.accounts[0]}
            optionTemplate={dropdownOptionTemplate}
            onSelect={this.selectAccount}
          />
          {amount}
        </div>
        <Label caption="You have balance" />
      </div>
    );
  }
}

export default AccountCard;
