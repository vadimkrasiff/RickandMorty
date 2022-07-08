import { charactersAPI } from "../api/api";

const GET_CHARACTERS = "GET-CHARACTERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    isFetching: true,
    characters: [
        {"name": "sasa",}
    ],
}

let charactersReducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.characters
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
}

export const setCharacters = (characters) => ({type: GET_CHARACTERS, characters});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const requestCharacters = (number) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await charactersAPI.getCharacters();
        dispatch(toggleIsFetching(false));
        dispatch(setCharacters(data.results));
    }
}

export default charactersReducers;