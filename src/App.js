import "./styles.css";
import React, { useState, useRef } from "react";
import TodoItem from "./TodoItem";

export default function App() {
  const [value, setValue] = useState("");

  const [valueEdit, setValueEdit] = useState("");

  const [todos, setTodos] = useState([{ id: 1, content: "first" }]);

  const [edit, setEdit] = useState([{ id: null, content: "" }]);

  const id = useRef(2);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleChangeEdit = (e) => {
    setValueEdit(e.target.value);
    console.log(valueEdit);
  };

  const handleClickButton = () => {
    setTodos([
      {
        id: id.current,
        content: value
      },
      ...todos
    ]);

    setValue("");
    id.current++;
  };

  const handleClickDelete = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const handleClickModify = (id) => {
    todos.map((todo) => {
      if (id === todo.id) {
        setEdit({ id: todo.id, content: todo.content });
      }
    });
  };

  const handleClickEditButton = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { id: id, content: valueEdit } : item
      )
    );

    setEdit({ id: null, content: "" });
  };

  return (
    <>
      <input type="text" name="name" onChange={handleChange} value={value} />
      <button onClick={handleClickButton}>add todo</button>

      {edit.id && (
        <input
          type="text"
          name="name1"
          onChange={handleChangeEdit}
          placeholder={edit.content}
          value={valueEdit}
        />
      )}

      {edit.id && (
        <button onClick={() => handleClickEditButton(edit.id)}>
          edit todo
        </button>
      )}

      <TodoItem
        todos={todos}
        handleClickDelete={handleClickDelete}
        handleClickModify={handleClickModify}
      />
    </>
  );
}
