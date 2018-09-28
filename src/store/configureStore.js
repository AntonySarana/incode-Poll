import { createStore, applyMiddleware } from "redux";
import RootReducer from "../Reducers/";
import thunk from "redux-thunk";

export default function CreateStore() {
  return createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),

  );
}
