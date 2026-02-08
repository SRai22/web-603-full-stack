import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClipboardList } from "@fortawesome/free-solid-svg-icons";

import Home from "./Home";
import AllTodos from "./AllTodos";

import type { ListKey, State } from "./App";
import type { Todo } from "./TodoData";

type NavProps = {
  todoLists: State;
  onAddTodo: (item: Omit<Todo, "id">, listKey: ListKey) => void;
  onToggleTodo: (id: number, listKey: ListKey) => void;
  sortType: "asc" | "desc";
  listNum: string;
  onSort: (listNum: Todo[], sortType: "asc" | "desc") => void;
};

function Nav(props: NavProps) {
  return (
    <Router>
      <nav className="bg-dark p-3">
        <ul className="nav mx-2 mb-4">
          <li className="nav-item mx-4">
            <Link to="/" className="nav-link">
              <FontAwesomeIcon icon={faHome} className="fa-2x text-white" />
            </Link>
          </li>

          <li className="nav-item mx-4">
            <Link to="/allLists" className="nav-link">
              <FontAwesomeIcon
                icon={faClipboardList}
                className="fa-2x text-white"
              />
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              todoLists={props.todoLists}
              onAddTodo={props.onAddTodo}
              onToggleTodo={props.onToggleTodo}
            />
          }
        />

        <Route
          path="/allLists"
          element={
            <AllTodos
              todoLists={props.todoLists}
              onToggleTodo={props.onToggleTodo}
              sortType={props.sortType}
              listNum={props.listNum}
              onSort={props.onSort}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default Nav;
