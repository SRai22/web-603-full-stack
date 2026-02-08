import Todos from "./Todos";

import type { ListKey, State } from "./App";
import type { Todo } from "./TodoData";

type DaySection = {
  label: string;
  key: ListKey;
};

type AllTodosProps = {
  // Received from Nav route, which received from App
  todoLists: State;
  onToggleTodo: (id: number, listKey: ListKey) => void;
  sortType: "asc" | "desc";
  listNum: string;
  onSort: (listNum: Todo[], sortType: "asc" | "desc") => void;
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

      {sections.map((s) => {
        const todos = props.todoLists[s.key] as Todo[];
        return (
          <div key={s.label} className="border mx-5 my-3 py-3">
            <h3 className="text-info">{s.label}</h3>

            {/* Restores: click item => show note + Done button, and toggle icon */}
            <Todos
              todos={todos}
              onToggle={(id) => props.onToggleTodo(id, s.key)}
            />

            <button
              className="mx-1 mt-2 bg-info text-white border-0"
              onClick={() => props.onSort(todos, "asc")}
            >
              Rush
            </button>

            <button
              className="mx-1 mt-2 bg-info text-white border-0"
              onClick={() => props.onSort(todos, "desc")}
            >
              Relax
            </button>
          </div>
        );
      })}
    </div>
  );
}
