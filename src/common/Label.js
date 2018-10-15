import React, { Component } from 'react';

import './Label.css';

class Label extends Component {
  render() {
    const { caption, size } = this.props;
    const className = `rvl-label ${size || 'small'}`;

    return <div className={className}>{caption}</div>;
  }
}

export default Label;
