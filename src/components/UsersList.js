import { ListGroup, ListGroupItem, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function UsersList({ users }) {
  return (
    <ListGroup>
      {users.sort(usersByName).map((user) => (
        <ListGroupItem key={user.id}>
          <section style={{ display: "flex" }}>
            <div style={{ flexGrow: "1", margin: "auto 0" }}>
              {user.firstName} {user.lastName}
            </div>
            <div>
              <Button outline color="danger">
                Delete
              </Button>
            </div>
          </section>
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
