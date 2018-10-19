import React, { Component } from 'react';

import './Input.css';

class Input extends Component {
  render() {
    const { onChange } = this.props;
    const className = `rvl-input`;

    return (
      <div className={className}>
        <input type="text" onChange={onChange} />
      </div>
    );
  }
}

export default Input;
