import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

import { Todo } from "./TodoData";

type TodosProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
};

function Todos(props: TodosProps) {
  const [noteOpen, setNoteOpen] = React.useState(false);
  const [activeNote, setActiveNote] = React.useState<string>("");

  const handleNote = (note: string) => {
    setActiveNote(note);
    setNoteOpen(true);
  };

  const dismissNote = () => {
    setActiveNote("");
    setNoteOpen(false);
  };

  return (
    <ListGroup>
      {props.todos.map((todo) => (
        <div className="d-flex justify-content-center" key={todo.id}>
          <ListGroupItem
            tag="button"
            style={{ textDecoration: todo.done ? "line-through" : "" }}
            onClick={() => handleNote(todo.note)}
            className="align-self-center py-2 w-50 bg-info text-white"
          >
            {todo.text}
          </ListGroupItem>

          <button
            type="button"
            className="border border-0"
            onClick={() => props.onToggle(todo.id)}
          >
            {todo.done ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="fas fa-sm text-danger"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCheck}
                className="fas fa-sm text-success"
              />
            )}
          </button>
        </div>
      ))}

      {noteOpen && (
        <ListGroupItem className="border border-dark rounded m-5">
          <div className="mt-5 font-weight-bold text-dark">{activeNote}</div>
          <button
            className="w-25 mt-2 align-self-center bg-warning border-0"
            onClick={dismissNote}
          >
            Done
          </button>
        </ListGroupItem>
      )}
    </ListGroup>
  );
}

export default Todos;
