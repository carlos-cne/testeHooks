export function addOrUpdateTodoRequest(todo) {
  return (dispatch, getState) => {
    const { todos } = getState().todos;
    const idx = todos.findIndex(item => item.id === todo.id);

    if (idx > -1) {
      todos[idx].name = todo.name;
      localStorage.setItem("@Todos", JSON.stringify(todos));
      dispatch({
        type: "UPDATE_TODO",
        payload: { todos }
      });
    } else {
      todo.id = Math.random();
      localStorage.setItem("@Todos", JSON.stringify(todo));
      dispatch({
        type: "ADD_TODO",
        payload: { todo }
      });
    }
  };
}

export function toggleTodoRequest(todo) {
  return (dispatch, getState) => {
    const { todos } = getState().todos;
    const idx = todos.findIndex(item => item.id === todo.id);

    todos[idx].toggle = todo.toggle;

    localStorage.setItem("@Todos", JSON.stringify(todos));

    dispatch({
      type: "UPDATE_TODO",
      payload: { todos }
    });
  };
}

export function loadTodos() {
  return dispatch => {
    const response = localStorage.getItem("@Todos");
    const todos = [];
    todos.push(JSON.parse(response));
    dispatch({ type: "LOAD_TODO", payload: { todos } });
  };
}
