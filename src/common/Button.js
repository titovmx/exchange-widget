import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  render() {
    const { caption, onClick, type } = this.props;

    return (
      <div className="rvl-button">
        <button className={type} onClick={onClick}>
          {caption}
        </button>
      </div>
    );
  }
}

export default Button;
