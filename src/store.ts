import { createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { PETS_TYPE_FETCH } from "./action";
import _default from "react-redux/es/components/connect";

export type State = {
  
};

export const initialState: State = {
 
};
const reducer: Reducer<State> = (currentState = initialState, action) => {
    console.log(action);
    
 switch (action.type) {
    case PETS_TYPE_FETCH:{
        return {"hii":"hii"}
    }
   default: {
     return currentState;
   }
 }
 
};

const Store = createStore(
  reducer,
  
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
// sagaMiddleware.run(rootSaga);

export default Store;
