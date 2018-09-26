
import {createStore} from "redux";
import RootReducer from "../Reducers/";

export default function CreateStore (){
  return createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}