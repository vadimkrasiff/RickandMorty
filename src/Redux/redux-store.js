import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import characterReducer from "./character-reducer";
import charactersReducer from "./characters-reducer";
import episodesReducer from "./episodes-reducer";
import FooterReducer from "./footer-reducer";
import locationsReducer from "./locations-reducer";
import SearchReducer from "./search-reducer";


let reducers = combineReducers({
    characters: charactersReducer,
    character: characterReducer,
    locations: locationsReducer,
    footer: FooterReducer,
    episodes: episodesReducer,
    searh: SearchReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;