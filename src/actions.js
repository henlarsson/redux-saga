export const incrementAsync = () => ({
  type: "INCREMENT_ASYNC"
});

export const increment = () => ({
  type: "INCREMENT"
});

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};
