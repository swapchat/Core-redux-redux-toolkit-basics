import { DECREMENT, INCREMENT, RESET } from "../utils/constants";

export const incrementByOne = () => ({
  type: INCREMENT,
});

export const incrementByPayload = (payload) => ({
  type: INCREMENT,
  payload,
});

export const decrementByOne = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});
