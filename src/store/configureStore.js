
import {createStore} from "redux";
import RootReducer from "../Reducers/";

export default function CreateStore (){
  return createStore(RootReducer);
}