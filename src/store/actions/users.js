export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  CREATE_USER_REQUEST: "users/create_user_request",
  DELETE_USER_REQUEST: "users/delete_user_request",
  USERS_ERROR: "users/error",
};

export const getUsersRequest = () => ({ type: Types.GET_USERS_REQUEST });

export const getUsersSuccess = (items) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: { items },
});

export const createUserRequest = ({ firstName, lastName }) => {
  return {
    type: Types.CREATE_USER_REQUEST,
    payload: {
      firstName,
      lastName,
    },
  };
};

export const deleteUserRequest = (id) => {
  return {
    type: Types.DELETE_USER_REQUEST,
    payload: { id },
  };
};

export const usersError = (message) => {
  return {
    type: Types.USERS_ERROR,
    payload: { message },
  };
};
