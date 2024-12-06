import { DECREMENT, INCREMENT, RESET } from "../utils/constants";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  const { payload = 1 } = action;
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + payload,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
