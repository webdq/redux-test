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

document.body.innerHTML = `
  <p id="counter"></p>
  <button id="increaseBtn">+</button>
  <button id="decreaseBtn">-</button>
`;

let store = createStore(reducer);
let render = () => {
  document.querySelector("#counter").innerHTML = store.getState().number;
};
render();
store.subscribe(render);
document.querySelector("#increaseBtn").addEventListener("click", () => {
  store.dispatch({ type: INCREASE });
});
document.querySelector("#decreaseBtn").addEventListener("click", () => {
  store.dispatch({ type: DECREASE });
});
