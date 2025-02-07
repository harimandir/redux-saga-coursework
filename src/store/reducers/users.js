import { Types } from "../actions/users";

const initialState = {
  items: [],
  error: "",
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
      };
    case Types.USERS_ERROR:
      return {
        ...state,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
