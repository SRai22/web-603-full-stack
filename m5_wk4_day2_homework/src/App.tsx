import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./Nav";
import { TodoData, Todo } from "./TodoData";

export type State = {
  TodoList1: Todo[];
  TodoList2: Todo[];
  TodoList3: Todo[];
  TodoList4: Todo[];
  TodoList5: Todo[];
  TodoList6: Todo[];
  TodoList7: Todo[];
  sortType: "asc" | "desc";
  listNum: string;
};

export type ListKey = keyof State;

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    // Single source of truth: initialize all lists here, and pass them down.
    this.state = {
      sortType: "asc",
      listNum: "",
      ...TodoData,
    };
  }

  handleAddTodo = (newItem: Omit<Todo, "id">, listKey: ListKey) => {
    this.setState((prev) => {
      const current = prev[listKey];
      const nextId = current.length
        ? Math.max(...current.map((t) => t.id)) + 1
        : 1;
      return {
        ...prev,
        [listKey]: [...current, { ...newItem, id: nextId }],
      };
    });
  };

  handleToggleTodo = (todoId: number, listKey: ListKey) => {
    this.setState((prev) => ({
      ...prev,
      [listKey]: prev[listKey].map((t) =>
        t.id === todoId ? { ...t, done: !t.done } : t
      ),
    }));
  };

  onSort = (listNum: Todo[], sortType: "asc" | "desc") => {
    listNum.sort((a, b) => {
      const isReversed = sortType === "asc" ? 1 : -1;
      return isReversed * a.text.localeCompare(b.text);
    });
    this.setState({ sortType });
  };

  render() {
    return (
      <div className="App text-secondary">
        {/* App only renders Nav; Nav decides whether Home or AllTodos shows */}
        <Nav
          todoLists={this.state}
          onAddTodo={this.handleAddTodo}
          onToggleTodo={this.handleToggleTodo}
          sortType={this.state.sortType}
          listNum={this.state.listNum}
          onSort={this.onSort}
        />
      </div>
    );
  }
}

export default App;
