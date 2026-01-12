import "./styles.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const d = new Date();

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const n = day[d.getDay()];

  let todo;

  if (n === "Sunday") {
    todo = <TodoList1 />;
  } else if (n === "Monday") {
    todo = <TodoList3 />;
  } else if (n === "Tuesday") {
    todo = <TodoList2 />;
  } else if (n === "Wednesday") {
    todo = <TodoList4 />;
  } else if (n === "Thursday") {
    todo = <TodoList5 />;
  } else if (n === "Friday") {
    todo = <TodoList6 />;
  } else if (n === "Saturday") {
    todo = <TodoList7 />;
  }

  return (
    <div className="App">
      <h1>
        <span className="d-flex justify-content-center text-warning">
          {n}'s
        </span>
        Todo List
      </h1>
      {todo}
    </div>
  );
}

const itemClass = "align-self-center py-2 w-50 bg-info text-white";

// Sunday
function TodoList1() {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Cook Breakfast
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Walk Dog
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Take Shower
      </ListGroupItem>
    </ListGroup>
  );
}

// Monday
function TodoList2() {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Get Lunch
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Run a Mile
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Take Bath
      </ListGroupItem>
    </ListGroup>
  );
}

// Tuesday
function TodoList3() {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Plan the week
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Clean workspace
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Grocery
      </ListGroupItem>
    </ListGroup>
  );
}

// Wednesday
function TodoList4() {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Workout
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Laundry
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Call family
      </ListGroupItem>
    </ListGroup>
  );
}

// Thursday
function TodoList5() {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Review goals
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Meal prep
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Read 20 minutes
      </ListGroupItem>
    </ListGroup>
  );
}

// Friday
function TodoList6() {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Wrap up work
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Tidy apartment
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Plan weekend
      </ListGroupItem>
    </ListGroup>
  );
}

// Saturday
function TodoList7() {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Outdoor activity
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Errands
      </ListGroupItem>
      <ListGroupItem tag="a" href="#" className={itemClass}>
        Relax / hobby time
      </ListGroupItem>
    </ListGroup>
  );
}
