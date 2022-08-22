import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import characterReducer from "./character-reducer";
import charactersReducers from "./characters-reducer";
import FooterReducer from "./footer-reducer";
import locationsReducer from "./locations-reducer";


let reducers = combineReducers({
    characters: charactersReducers,
    character: characterReducer,
    locations: locationsReducer,
    footer: FooterReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;