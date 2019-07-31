import React from 'react';
import { createStore } from '../redux';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
let reducer = (state = { list: [] }, action) => {
  if (action === undefined) return state;
  switch (action.type) {
    case ADD_TODO:
      return { list: [...state.list, action.text] };
    case DELETE_TODO:
      let list = state.list;
      list.splice(action.index, 1);
      return { list: [...list] };
    default:
      return state;
  }
};
let store = createStore(reducer);

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: store.getState().list
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
        list: store.getState().list
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
