export default {
  setCount(state: {count: number}, action: {payload: number}) {
    state.count += action.payload;
  },
};