import { applyMiddleware, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { PETS_TYPE_FETCHED } from "./action";
import _default from "react-redux/es/components/connect";
import { rootSaga, sagaMiddleware } from "./sagas";
import convertArrayToObject from "./arrayToObject";

export type State = {};

export const initialState: State = {};
const reducer: Reducer<State> = (currentState = initialState, action) => {
  switch (action.type) {
    case PETS_TYPE_FETCHED: {
      return convertArrayToObject(action.payload, "cell");
    }
    default: {
      return currentState;
    }
  }
};

const Store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  //     (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(rootSaga);

export default Store;
