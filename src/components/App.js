import { connect } from "react-redux";
const { getUsersRequest } = require("../actions/users");

function _App(props) {
  return (
    <div>
      <button onClick={props.getUsersRequest}>Fetch</button>
    </div>
  );
}

export const App = connect(
  ({ users }) => ({
    users,
  }),
  { getUsersRequest }
)(_App);
