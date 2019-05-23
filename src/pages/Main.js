import React, { useState, useCallback, useEffect } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";

import {
  addOrUpdateTodoRequest,
  toggleTodoRequest,
  loadTodos
} from "../store/actions/todos";

export default function Main() {
  // hooks de todos
  const [todo, setTodo] = useState({ id: "", name: "", toggle: false });

  // configuração do dispactch e mapstate
  const dispatch = useDispatch();
  const { todosCount, todos } = useMappedState(
    useCallback(
      state => ({
        todosCount: state.todos.todos.length,
        todos: state.todos.todos
      }),
      []
    )
  );

  // useEffect que vai adicionar um Todo
  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  // Função para adicionar novo todo
  function addUpdateTodo(e) {
    e.preventDefault();
    dispatch(
      addOrUpdateTodoRequest({
        id: todo.id,
        name: todo.name,
        toggle: false
      })
    );
    setTodo({ id: "", name: "" });
  }

  function toggleTodo(todo) {
    dispatch(
      toggleTodoRequest({
        ...todo,
        toggle: !todo.toggle
      })
    );
    setTodo({ id: "", name: "", toggle: false });
  }

  return (
    <div>
      <h1>Teste de usabilidade React Hooks e Redux Hooks</h1>
      <h3>Adicione seus ToDos:</h3>
      <form onSubmit={e => addUpdateTodo(e)}>
        <input
          type="text"
          placeholder="To Do"
          value={todo.name}
          onChange={e => setTodo({ ...todo, name: e.target.value })}
        />
        <br />
        <ul>
          {todos.map(todo => (
            <li
              key={todo.id}
              onDoubleClick={() => setTodo({ id: todo.id, name: todo.name })}
            >
              <span>
                <input
                  type="checkbox"
                  checked={todo.toggle}
                  onChange={() => toggleTodo(todo)}
                />
              </span>
              {todo.toggle ? (
                <span>
                  <strike>
                    <i>{todo.name}</i>
                  </strike>
                </span>
              ) : (
                todo.name
              )}
              <span
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })
                }
                style={{ color: "#F00", fontWeight: "bold", fontSize: 18 }}
              >{` X`}</span>
            </li>
          ))}
        </ul>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}
