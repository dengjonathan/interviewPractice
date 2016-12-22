import React from 'react';
import ReactDOM from 'react-dom';

const Counter extends React.class {
  constructor() {
    super();
    this.state = {
      value: 0;
    }
  }
  increment() {
    this.setState({value: this.state.value + 1});
  }
  decrement() {
    this.setState({value: this.state.value + 1});
  }
}