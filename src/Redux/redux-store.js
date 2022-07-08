import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import charactersReducers from "./characters-reducer";


let reducers = combineReducers({
    characters: charactersReducers,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;