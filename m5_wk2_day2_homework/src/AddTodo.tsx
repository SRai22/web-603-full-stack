import React from "react";
import { Todo } from "./TodoData";

type AddTodoProps = {
  onAdd: (item: Omit<Todo, "id">) => void;
};

function AddTodo(props: AddTodoProps) {
  const addTodoRef = React.useRef<HTMLInputElement | null>(null);
  const addNoteRef = React.useRef<HTMLInputElement | null>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const text = (
      form.elements.namedItem("addTodoItem") as HTMLInputElement
    ).value.trim();
    const note = (
      form.elements.namedItem("addTodoNote") as HTMLInputElement
    ).value.trim();

    if (!text) return;

    props.onAdd({
      text,
      note,
      done: false,
    });

    if (addTodoRef.current) addTodoRef.current.value = "";
    if (addNoteRef.current) addNoteRef.current.value = "";
  };

  return (
    <div className="border border-dark m-4 p-3">
      <form onSubmit={submit}>
        <input
          type="text"
          name="addTodoItem"
          ref={addTodoRef}
          placeholder="Add Todo Item"
          className="d-block d-sm-inline my-2 mt-3 mx-auto mx-sm-2"
        />
        <input
          type="text"
          name="addTodoNote"
          ref={addNoteRef}
          placeholder="Add Todo Note"
          className="d-block d-sm-inline my-2 mx-auto mx-sm-2"
        />
        <button className="d-block d-sm-inline mx-auto my-3 mx-sm-2">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
