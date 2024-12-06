const initialState = {
  name: "",
  age: "",
  city: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
