import { Types } from "../actions/users";

const initialState = {
  items: [],
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_USERS_REQUEST:
      return {
        items: action.payload.items,
      };
    default:
      return state;
  }
}
