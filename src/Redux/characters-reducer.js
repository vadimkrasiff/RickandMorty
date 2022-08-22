import { charactersAPI } from "../api/api";

const GET_CHARACTERS = "GET-CHARACTERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PAGES_COUNT = "SET_TOTAL_PAGES_COUNT";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initialState = {
    isFetching: true,
    currentPage: 1,
    charactersCount: 0,
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
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_PAGES_COUNT:
            return {...state, totalPagesCount: action.count};
        case SET_TOTAL_COUNT:
            return {...state, charactersCount: action.charactersCount};
        default:
            return state;
    }
}

export const setCharacters = (characters) => ({type: GET_CHARACTERS, characters});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalPagesCount = (totalPagesCount) => ({type: SET_TOTAL_PAGES_COUNT, count: totalPagesCount});
export const setTotalCharactersCount = (charactersCount) => ({ type: SET_TOTAL_COUNT, charactersCount: charactersCount });

export const requestCharacters = (page) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page));

        let data = await charactersAPI.getCharacters(page);
        dispatch(toggleIsFetching(false));
        dispatch(setCharacters(data.results));
        dispatch(setTotalPagesCount(data.info.pages))
        dispatch(setTotalCharactersCount(data.info.count));
    }
}

export default charactersReducer;