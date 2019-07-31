import React from "react";
import ReactDOM from 'react-dom';
import { createStore } from "./redux";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

let reducer = (state = { number: 0 }, action) => {
  if (action === undefined) return state;
  switch (action.type) {
    case INCREASE:
      return { number: state.number + 1 };
    case DECREASE:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

let store = createStore(reducer);

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p id="counter" >{store.getState().number}</p>
        <button onClick={()=>store.dispatch({type:INCREASE})} id="increaseBtn">+</button>
        <button onClick={()=>store.dispatch({type:DECREASE})} id="decreaseBtn">-</button>
      </div>
    );
  }
}

let render = ()=>{
  ReactDOM.render(<Counter/>,document.querySelector('#root'))
}
render();
store.subscribe(render);