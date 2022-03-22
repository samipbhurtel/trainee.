import { INCREMENT } from "./countertypes";
const initialState = {
  counter: 10,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 5,
      };
    default:
      return state;
  }
};

export default counterReducer;
