import React from "react";

import Todos from "./Todos";
import AddTodo from "./AddTodo";

import type { ListKey, State } from "./App";
import type { Todo } from "./TodoData";

type DayKey =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

type HomeProps = {
  todoLists: State;
  onAddTodo: (item: Omit<Todo, "id">, listKey: ListKey) => void;
  onToggleTodo: (id: number, listKey: ListKey) => void;
};

function getKeyForDay(dayName: DayKey): ListKey {
  if (dayName === "Sunday") return "TodoList1";
  if (dayName === "Monday") return "TodoList3";
  if (dayName === "Tuesday") return "TodoList2";
  if (dayName === "Wednesday") return "TodoList4";
  if (dayName === "Thursday") return "TodoList5";
  if (dayName === "Friday") return "TodoList6";
  return "TodoList7";
}

export default function Home(props: HomeProps) {
  const d = new Date();
  const dayNames: DayKey[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today: DayKey = dayNames[d.getDay()];

  const listKey = getKeyForDay(today);
  const currentList = props.todoLists[listKey];

  return (
    <div className="App">
      <h1>
        <span className="d-flex justify-content-center text-warning">
          {today}'s
        </span>
        Todo List
      </h1>

      <Todos
        todos={currentList}
        onToggle={(id) => props.onToggleTodo(id, listKey)}
      />

      <AddTodo onAdd={(item) => props.onAddTodo(item, listKey)} />
    </div>
  );
}
