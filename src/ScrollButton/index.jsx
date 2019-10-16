import React, { Component } from 'react';
import './style.css';

const section = this.state;

export default class ScrollButton extends Component {
  constructor() {
    super();

    this.click = this.click.bind(this);
  }

  click() {
    if (section < 4) {
      window.scrollTo(0, section * 500);

      this.setState({});
    }
  }

  render() {
    return (
      <button type="button" className="button" onClick={this.click}>
        <div className="arrow" />
      </button>
    );
  }
}
