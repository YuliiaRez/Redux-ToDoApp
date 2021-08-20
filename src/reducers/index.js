import { combineReducers } from "redux";
import tasksReducer from "./tasksReducer";

const rootReducer = combineReducers({
  taskState: tasksReducer,
});

export default rootReducer;
