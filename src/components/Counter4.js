import React, { Component } from 'react';
import { INCREASE, DECREASE } from '../actiontypes';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <p>{this.props.value}</p>
        <button onClick={this.props.onIncrease}>+</button>
        <button onClick={this.props.onDecrease}>-</button>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    value: state.number
  };
};

let mapDispatchToProps = dispatch => {
  return {
    onIncrease: () => dispatch({ type: INCREASE }),
    onDecrease: () => dispatch({ type: DECREASE })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
