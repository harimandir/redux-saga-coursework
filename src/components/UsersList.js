import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function UsersList({ users }) {
  return (
    <ListGroup>
      {users.sort(usersByName).map((user) => (
        <ListGroupItem key={user.id}>
          {user.firstName} {user.lastName}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

const usersByName = (prev, next) => {
  if (prev.firstName < next.firstName) {
    return -1;
  }
  if (prev.firstName > next.firstName) {
    return 1;
  }
  if (prev.lastName < next.lastName) {
    return -1;
  }
  if (prev.lastName > next.lastName) {
    return 1;
  }
  return 0;
};
