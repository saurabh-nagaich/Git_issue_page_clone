import { combineReducers } from "redux"
import countReducer from "./Count/countReducer"

const rootReducer = combineReducers({
    count:countReducer,
})

export default rootReducer