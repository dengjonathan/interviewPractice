// Counter.jsx
import React from 'react';
import ReactDOM from 'react-dom';

// PRESENTATIONAL COMPONENT: a simple stateless React View
const Button = ({onClick, label}) => (
  <button onClick={onClick}>{label}</button>
);

// REACT COMPONENT: a stateful React View (stored in this.state)
// Normally you'd want so other Model to store state (i.e. Redux)
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }
  // CONTROLLERS: update state based on user input
  increment() {
    this.setState({value: this.state.value + 1});
  }
  decrement() {
    this.setState({value: this.state.value - 1});
  }
  render() {
    return (
      <div className="counter">
        <Button onClick={this.increment.bind(this)} label={'+'}/>
        <p id="count">{this.state.value}</p>
        <Button onClick={this.decrement.bind(this)} label={'-'}/>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));