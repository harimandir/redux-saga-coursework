import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
} from "../store/actions/users";
import { Alert } from "reactstrap";
import { NewUserForm } from "./NewUserForm";
import { UsersList } from "./UsersList";

function _App({
  errorMessage,
  usersError,
  createUserRequest,
  getUsersRequest,
  users,
  deleteUserRequest,
}) {
  useEffect(getUsersRequest, [getUsersRequest]);

  const handleToggleAlert = () => usersError("");

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <Alert color="danger" isOpen={!!errorMessage} toggle={handleToggleAlert}>
        {errorMessage}
      </Alert>
      <NewUserForm onSubmit={createUserRequest} />
      <UsersList users={users} handleDeleteUser={deleteUserRequest} />
    </div>
  );
}

export const App = connect(
  ({ users }) => ({
    users: users.items,
    errorMessage: users.error,
  }),
  { usersError, getUsersRequest, createUserRequest, deleteUserRequest }
)(_App);
