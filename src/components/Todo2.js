import React from 'react';
import { ADD_TODO, DELETE_TODO } from '../actiontypes';
import { store } from '../store';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: store.getState().todo.list
    };
  }
  handleKeyDown = e => {
    if (e.keyCode === 13 && e.target.value.length > 0) {
      store.dispatch({ type: ADD_TODO, text: e.target.value });
      e.target.value = '';
    }
  };
  deleteTodo = index => {
    store.dispatch({
      type: DELETE_TODO,
      index
    });
  };
  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        list: store.getState().todo.list
      });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <input onKeyDown={this.handleKeyDown} type="text" />
        <ul>
          {this.state.list.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.deleteTodo(index)}>-</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
