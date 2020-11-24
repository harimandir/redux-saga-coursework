import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersRequest, createUserRequest } from "../store/actions/users";
import { UsersList } from "./UsersList";
import { NewUserForm } from "./NewUserForm";

function _App({ getUsersRequest, users, createUserRequest }) {
  useEffect(getUsersRequest, [getUsersRequest]);

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <NewUserForm onSubmit={createUserRequest} />
      <UsersList users={users} />
    </div>
  );
}

export const App = connect(
  ({ users }) => ({
    users: users.items,
  }),
  { getUsersRequest, createUserRequest }
)(_App);
