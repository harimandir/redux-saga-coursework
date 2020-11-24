import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function UsersList({ users }) {
  return (
    <ListGroup>
      {users.map((user) => (
        <ListGroupItem key={user.id}>
          {user.firstName} {user.lastName}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
