import { useEffect } from "react";
import { connect } from "react-redux";
const { getUsersRequest } = require("../store/actions/users");

function _App(props) {
  const { getUsersRequest, users } = props;
  useEffect(getUsersRequest, [getUsersRequest]);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.firstName} {user.lastName}
        </div>
      ))}
    </div>
  );
}

export const App = connect(
  ({ users }) => ({
    users: users.items,
  }),
  { getUsersRequest }
)(_App);
