import React from "react";

import Todos from "./Todos";

import type { ListKey, State } from "./App";

type DaySection = {
  label: string;
  key: ListKey;
};

type AllTodosProps = {
  // Received from Nav route, which received from App
  todoLists: State;
  onToggleTodo: (id: number, listKey: ListKey) => void;
};

const sections: DaySection[] = [
  { label: "Sunday", key: "TodoList1" },
  { label: "Monday", key: "TodoList3" },
  { label: "Tuesday", key: "TodoList2" },
  { label: "Wednesday", key: "TodoList4" },
  { label: "Thursday", key: "TodoList5" },
  { label: "Friday", key: "TodoList6" },
  { label: "Saturday", key: "TodoList7" },
];

export default function AllTodos(props: AllTodosProps) {
  return (
    <div>
      <h2 className="mt-4">Todo Lists</h2>

      {sections.map((s) => (
        <div key={s.label} className="border mx-5 my-3 py-3">
          <h3 className="text-info">{s.label}</h3>

          {/* Restores: click item => show note + Done button, and toggle icon */}
          <Todos
            todos={props.todoLists[s.key]}
            onToggle={(id) => props.onToggleTodo(id, s.key)}
          />
        </div>
      ))}
    </div>
  );
}
