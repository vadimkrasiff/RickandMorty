import { charactersAPI, episodeAPI, locationsAPI } from "../api/api";

const SET_TOTAL_CHARACTERS_COUNT = "SET_TOTAL_CHARACTERS_COUNT";
const SET_TOTAL_LOCATIONS_COUNT = "SET_TOTAL_LOCATIONS_COUNT";
const SET_TOTAL_EPISODES_COUNT = "SET_TOTAL_EPISODES_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    isFetching: true,
    charactersCount: 0,
    locationsCount: 0,
    episodesCount: 0,
}

let FooterReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_TOTAL_CHARACTERS_COUNT:
            return {
                ...state,
                charactersCount: action.charactersCount
            };
        case SET_TOTAL_LOCATIONS_COUNT:
            return {
                ...state,
                locationsCount: action.locationsCount
            };
            case SET_TOTAL_EPISODES_COUNT:
                return {
                    ...state,
                    episodesCount: action.episodesCount
                };
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setTotalCharactersCount = (charactersCount) => ({ type: SET_TOTAL_CHARACTERS_COUNT, charactersCount: charactersCount });
export const setTotalLocationsCount = (locationsCount) => ({ type: SET_TOTAL_LOCATIONS_COUNT, locationsCount: locationsCount });
export const setTotalEpisodesCount = (episodesCount) => ({ type: SET_TOTAL_EPISODES_COUNT, episodesCount: episodesCount });

export const requestFooter = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let charactersData = await charactersAPI.getCharacters();
    let locationsData = await locationsAPI.getLocation();
    let episodesData = await episodeAPI.getEpisode();
    dispatch(setTotalCharactersCount(charactersData.info.count));
    dispatch(setTotalLocationsCount(locationsData.info.count));
    dispatch(setTotalEpisodesCount(episodesData.info.count));
    
    dispatch(toggleIsFetching(false));
}

export default FooterReducer;