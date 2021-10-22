import { createStore } from "redux"
import { usernameReducer } from "./usernameReducer"


export let store = createStore(usernameReducer)



