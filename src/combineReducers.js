// {counter: {number: 0}, todo: {list: []}}
let combineReducers = reducers => (state = {}, action) => {
  let newState = {};
  for (let key in reducers) {
    newState[key] = reducers[key](state[key], action);
  }
  return newState;
};

export default combineReducers;
