import { takeLatest, all } from "redux-saga/effects";

import { Types as UserTypes } from "../ducks/username";

export default function* rootSaga() {
  all([takeLatest(UserTypes.ADD_USER_REQUEST, () => {})]);
}
