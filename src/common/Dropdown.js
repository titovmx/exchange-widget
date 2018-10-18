import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Dropdown.css';

class Dropdown extends Component {
  state = {
    isOpen: false,
  };

  constructor() {
    super();
    this.mounted = true;
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
    document.addEventListener('touchend', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    this.mounted = false;
    document.removeEventListener('click', this.handleDocumentClick, false);
    document.removeEventListener('touchend', this.handleDocumentClick, false);
  }

  buildList(options, optionTemplate) {
    const listItems = options.map((option, index) => (
      <li
        className="rvl-dropdown-option"
        key={index}
        onMouseDown={this.selectOption.bind(this, option)}
        onTouchEnd={this.selectOption.bind(this, option)}
      >
        {optionTemplate(option)}
      </li>
    ));
    return <ul className="rvl-dropdown-options">{listItems}</ul>;
  }

  handleDocumentClick(event) {
    if (this.mounted) {
      if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        if (this.state.isOpen) {
          this.setState({ isOpen: false });
        }
      }
    }
  }

  handleMouseDown(event) {
    const { nativeEvent } = event;
    if (nativeEvent.type === 'mousedown' && nativeEvent.button !== 0) {
      return;
    }
    this.setState({ isOpen: !this.state.isOpen });
  }

  selectOption(option, event) {
    console.log(this.props.onSelect);
    this.props.onSelect(option);
    this.setState({ isOpen: false });
  }

  render() {
    const { options, value, optionTemplate } = this.props;
    const optionList = this.buildList(options, optionTemplate);

    return (
      <div className="rvl-dropdown">
        <div
          className="rvl-dropdown-value"
          onMouseDown={this.handleMouseDown.bind(this)}
          onTouchEnd={this.handleMouseDown.bind(this)}
        >
          {optionTemplate(value)}
          <div className="arrow-down" />
        </div>
        {this.state.isOpen ? optionList : null}
      </div>
    );
  }
}

export default Dropdown;
