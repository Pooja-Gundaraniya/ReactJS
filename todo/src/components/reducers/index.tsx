import  TodoReducer  from "./todoReducer";
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    TodoReducer
})
export type RootState = ReturnType<typeof rootReducer>
