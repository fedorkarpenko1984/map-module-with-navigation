import { createStore } from 'redux'
import ordersReducer from "./ordersReducer";

const store = createStore(ordersReducer)

export default store