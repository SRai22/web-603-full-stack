import "./styles.css";
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

type Todo = {
  id: number;
  text: string;
  note: string;
  done: boolean;
};

type State = {
  TodoList1: Todo[];
  TodoList2: Todo[];
  TodoList3: Todo[];
  TodoList4: Todo[];
  TodoList5: Todo[];
  TodoList6: Todo[];
  TodoList7: Todo[];
};

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    // Todos stored in state
    this.state = {
      // Sunday
      TodoList1: [
        {
          id: 1,
          text: "Eat Breakfast",
          note: "Make Eggs and Pancakes",
          done: false,
        },
        {
          id: 2,
          text: "Walk Dog",
          note: "Bring doggie bag",
          done: false,
        },
        {
          id: 3,
          text: "Take Shower",
          note: "Shower no later than 10am!",
          done: false,
        },
      ],

      // Tuesday
      TodoList2: [
        {
          id: 1,
          text: "Get Lunch",
          note: "Lunch at Sandbox",
          done: false,
        },
        {
          id: 2,
          text: "Run a Mile",
          note: "Stop by mom at end of run",
          done: false,
        },
        {
          id: 3,
          text: "Take Bath",
          note: "Prep half hour before. Replenish bath oil.",
          done: false,
        },
      ],

      // Monday
      TodoList3: [
        {
          id: 1,
          text: "Plan the week",
          note: "Outline tasks and priorities for the week",
          done: false,
        },
        {
          id: 2,
          text: "Clean workspace",
          note: "Organize desk and clear clutter",
          done: false,
        },
        {
          id: 3,
          text: "Grocery",
          note: "Buy essentials for the next few days",
          done: false,
        },
      ],

      // Wednesday
      TodoList4: [
        {
          id: 1,
          text: "Workout",
          note: "30–45 minute strength or cardio session",
          done: false,
        },
        {
          id: 2,
          text: "Laundry",
          note: "Wash, dry, and fold clothes",
          done: false,
        },
        {
          id: 3,
          text: "Call family",
          note: "Catch up and check in",
          done: false,
        },
      ],

      // Thursday
      TodoList5: [
        {
          id: 1,
          text: "Review goals",
          note: "Reflect on weekly progress and blockers",
          done: false,
        },
        {
          id: 2,
          text: "Meal prep",
          note: "Prepare meals for the next few days",
          done: false,
        },
        {
          id: 3,
          text: "Read 20 minutes",
          note: "Read a book or article for personal growth",
          done: false,
        },
      ],

      // Friday
      TodoList6: [
        {
          id: 1,
          text: "Wrap up work",
          note: "Close pending tasks and send updates",
          done: false,
        },
        {
          id: 2,
          text: "Tidy apartment",
          note: "Light cleaning before the weekend",
          done: false,
        },
        {
          id: 3,
          text: "Plan weekend",
          note: "Decide activities or outings",
          done: false,
        },
      ],

      // Saturday
      TodoList7: [
        {
          id: 1,
          text: "Outdoor activity",
          note: "Go for a hike, walk, or outdoor sport",
          done: false,
        },
        {
          id: 2,
          text: "Errands",
          note: "Finish shopping and miscellaneous tasks",
          done: false,
        },
        {
          id: 3,
          text: "Relax / hobby time",
          note: "Unwind or work on a personal hobby",
          done: false,
        },
      ],
    };
  }

  itemClass = "align-self-center py-2 w-50 bg-info text-white";

  // Helper: pick which list to show
  getTodayTodos(dayName: string): Todo[] {
    if (dayName === "Sunday") return this.state.TodoList1;
    if (dayName === "Monday") return this.state.TodoList3;
    if (dayName === "Tuesday") return this.state.TodoList2;
    if (dayName === "Wednesday") return this.state.TodoList4;
    if (dayName === "Thursday") return this.state.TodoList5;
    if (dayName === "Friday") return this.state.TodoList6;
    return this.state.TodoList7; // Saturday
  }

  render() {
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

    const todaysTodos = this.getTodayTodos(n);

    return (
      <div className="App">
        <h1>
          <span className="d-flex justify-content-center text-warning">
            {n}'s
          </span>
          Todo List
        </h1>
        <Todos todolists={todaysTodos} />
      </div>
    );
  }
}

export default App;

function Todos(props) {
  handleNote = (getNote) => {
    $("#note").empty().append(getNote);
    $("#notebox").css("visibility", "visible");
  };

  dismissNote = () => {
    $("#note").empty();
    $("#notebox").css("visibility", "hidden");
  };

  return (
    <ListGroup>
      {props.todolists.map((todo) => (
        <ListGroupItem
          key={todo.id}
          tag="button"
          onClick={() => this.handleNote(todo.note)}
          className="align-self-center py-2 w-50 bg-info text-white"
        >
          {todo.text}
        </ListGroupItem>
      ))}
      <ListGroupItem id="notebox" className="border border-dark rounded m-5">
        <div id="note" className="mt-5 font-weight-bold text-dark"></div>
        <button
          id="btn"
          className="w-25 mt-2 align-self-center bg-warning border-0"
          onClick={() => this.dismissNote()}
        >
          Done
        </button>
      </ListGroupItem>
    </ListGroup>
  );
}
