function TodoItem({ todos, handleClickDelete, handleClickModify }) {
  return todos.map((todo, index) => (
    <>
      <li key={todo.id}>{todo.content}</li>
      <button onClick={() => handleClickDelete(todo.id)}>delete</button>

      <button onClick={() => handleClickModify(todo.id)}>modify</button>
    </>
  ));
}

export default TodoItem;
