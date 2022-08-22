import { characterAPI, charactersAPI } from "../api/api";

const SET_CHARACTER = "SET_CHARACTER";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    isFetching: true,
    character: null,
};

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTER:
            return { ...state, character: action.character };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        default:
            return state;
    }
}

export const setCharacter = (character) => ({ type: SET_CHARACTER, character });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const getCharacter = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))

        let response = await characterAPI.getCharacter(id);
        dispatch(setCharacter(response))
        dispatch(toggleIsFetching(false));
    }
}

export default characterReducer;