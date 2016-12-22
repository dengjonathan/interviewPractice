import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';

/********************************REDUX*****************************************/
//default state
const INITIAL_STATE = {
  value: 0
};

//REDUCER: how Redux updates state; it takes a old state and returns a new state in a pure function
const counterReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {value: state.value + 1};
    case 'DECREMENT':
      return {value: state.value + 1};
    default:
      return state;
  }
};

// Create Redux store using Reducer (this is how Redux updates state)
const store = createStore(counterReducer);

// ACTION CREATORS: in Redux an action is just a normal object with a type property
const incrementAction = () => ({type: 'INCREMENT'});
const decrementAction = () => ({type: 'DECREMENT'});

/********************************REACT*****************************************/

// PRESENTATIONAL COMPONENT: a simple stateless React View
const Button = ({onClick, label}) => (
  <button onClick={onClick}>{label}</button>
);

// With Redux we can refactor most components to presentation components
const Counter = ({value, increment, decrement}) => (
  <div className="counter">
    <Button onClick={increment} label={'+'}/>
    <p id="count">{value}</p>
    <Button onClick={decrement} label={'-'}/>
  </div>
);

/***********************CONNECTING REDUX TO REACT******************************/

// Because Counter is now stateless, we have to pass in props through a container
// containers are made using the connect function from the react-redux library

// Bind props passed into Counter component to values in state
const mapStateToProps = state => ({value: state.value});

// Bind click handlers in component to store update functions
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementAction()),
  decrement: () => dispatch(decrementAction())
})

// the Container automatically passes in updated props to the component
// every time the state in the Redux store changes
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

const App = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));