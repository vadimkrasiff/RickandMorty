import { charactersAPI } from "../api/api";

const GET_CHARACTERS = "GET-CHARACTERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_TOTAL_PAGES_COUNT = "SET_TOTAL_PAGES_COUNT";

let initialState = {
    isFetching: true,
    namePage: "characters&page=",
    totalPagesCount: 0,
    characters: null,
}

let charactersReducer = (state = initialState, action) => {
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
        case SET_TOTAL_PAGES_COUNT:
            return {...state, totalPagesCount: action.count};
        default:
            return state;
    }
}

export const setCharacters = (characters) => ({type: GET_CHARACTERS, characters});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setTotalPagesCount = (totalPagesCount) => ({type: SET_TOTAL_PAGES_COUNT, count: totalPagesCount});

export const requestCharacters = (page) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await charactersAPI.getCharacters(page);
        dispatch(toggleIsFetching(false));
        dispatch(setCharacters(data.results));
        dispatch(setTotalPagesCount(data.info.pages));
    }
}

export default charactersReducer;