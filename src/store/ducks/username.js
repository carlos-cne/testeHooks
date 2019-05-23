import Immutable from "seamless-immutable";

export const Types = {
  ADD_USER_REQUEST: "username/ADD_USER_REQUEST",
  ADD_USER_SUCCESS: "username/ADD_USER_SUCCESS",
  ADD_USER_FAILURE: "username/ADD_USER_FAILURE"
};

const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  data: []
});

export default function username(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
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
  addUserSuccess: data => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { data }
  }),
  addUserFailure: error => ({
    type: Types.ADD_USER_FAILURE,
    payload: { error }
  })
};
