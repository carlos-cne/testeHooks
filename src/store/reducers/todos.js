import Immutable from "seamless-immutable";

const INITIAL_STATE = Immutable({
  todos: []
});

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload.todo] };

    case "TOGGLE_TODO":
      return {
        todos: { ...state, todos: action.payload.todos }
      };

    case "UPDATE_TODO":
      return { ...state, todos: action.payload.todos };

    case "LOAD_TODO":
      return { ...state, todos: action.payload.todos };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };

    default:
      return state;
  }
}
