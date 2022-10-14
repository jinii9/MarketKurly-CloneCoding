// 여러개인 리듀서 하나로 묶어주는 js
import { combineReducers  } from "redux";
import LoginReducer from "./loginReducer";

const rootReducer = combineReducers({
    LoginReducer,
    // 밑에 계속 리듀서 추가
});

export default rootReducer;