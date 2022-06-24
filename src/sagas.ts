import createSagaMiddleware from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { petsTypeFetched, PETS_TYPE_FETCH } from "./action";
import { call, put } from "redux-saga/effects";
import { getPetsType } from "./api";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeLatest(PETS_TYPE_FETCH, getPetsTypeSaga);
}

export function* getPetsTypeSaga(): Generator<any, any, any> {
  const data = yield call(getPetsType);
  yield put(petsTypeFetched(data));
}
