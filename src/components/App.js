import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersRequest } from "../store/actions/users";
import { UsersList } from "./UsersList";
import { NewUserForm } from "./NewUserForm";

function _App({ getUsersRequest, users }) {
  useEffect(getUsersRequest, [getUsersRequest]);
  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <NewUserForm />
      <UsersList users={users} />
    </div>
  );
}

export const App = connect(
  ({ users }) => ({
    users: users.items,
  }),
  { getUsersRequest }
)(_App);
