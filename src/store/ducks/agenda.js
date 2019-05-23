import Immutable from "seamless-immutable";

export const Types = {
  ADD_USER_REQUEST: "addUser/ADD_USER_REQUEST",
  ADD_USER_SUCCESS: "addUser/ADD_USER_SUCCESS",
  ADD_USER_FAILURE: "addUser/ADD_USER_FAILURE"
};

const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  agenda: [
    {
      id: Math.random(),
      name: "Carlos",
      phone: "31994020512"
    }
  ]
});

export default function agenda(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        agenda: [...state.agenda, action.payload.agenda]
      };

    case Types.ADD_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: () => ({
    type: Types.ADD_USER_REQUEST
  }),
  addUserSuccess: agenda => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { agenda }
  }),
  addUserFailure: error => ({
    type: Types.ADD_USER_FAILURE,
    payload: { error }
  })
};
