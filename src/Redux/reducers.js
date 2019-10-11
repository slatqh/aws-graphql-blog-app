import { combineReducers } from "redux";

import BlogReducer from "../screens/reducer";
import UserReducer from "../screens/Profile/reducer";

const rootReducer = combineReducers({
  user: UserReducer,
  Blog: BlogReducer
});
export default rootReducer;
