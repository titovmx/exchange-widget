import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  render() {
    const { caption, canClick, onClick, type } = this.props;
    const disabled = !canClick();

    return (
      <div className="rvl-button">
        <button className={type} onClick={onClick} disabled={disabled}>
          {caption}
        </button>
      </div>
    );
  }
}

export default Button;
