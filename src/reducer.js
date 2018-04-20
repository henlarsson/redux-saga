export default function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    // case "INCREMENT_ASYNC":
    //   return state % 2 !== 0 ? state + 1 : state;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
