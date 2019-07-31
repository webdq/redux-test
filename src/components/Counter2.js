import React from 'react';
import { INCREASE, DECREASE } from '../actiontypes';
import { store } from '../store';

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      number: store.getState().counter.number
    };
  }
  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        number: store.getState().counter.number
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p id="counter">{this.state.number}</p>
        <button
          onClick={() => store.dispatch({ type: INCREASE })}
          id="increaseBtn"
        >
          +
        </button>
        <button
          onClick={() => store.dispatch({ type: DECREASE })}
          id="decreaseBtn"
        >
          -
        </button>
      </div>
    );
  }
}
