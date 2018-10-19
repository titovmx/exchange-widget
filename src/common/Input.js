import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
  render() {
    const { autoFocus, onChange } = this.props;
    const className = `rvl-input`;

    return (
      <div className={className}>
        <input type="text" autoFocus={autoFocus} onChange={onChange} />
      </div>
    );
  }
}

export default Input;
