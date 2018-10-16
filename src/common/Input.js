import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
  render() {
    const className = `rvl-input`;

    return (
      <div className={className}>
        <input type="text" />
      </div>
    );
  }
}

export default Input;
