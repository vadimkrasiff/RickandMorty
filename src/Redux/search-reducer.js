import { SearchAPI } from "../api/api";

const GET_CHARACTERS = "GET_CHARACTERS";
const GET_LOCATIONS = "GET_LOCATIONS";
const GET_EPISODES = "GET_EPISODES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    isFetching: true,
    characters: null,
    locations: null,
    episodes: null,
}

let HeaderReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.characters
            };
        case GET_LOCATIONS:
            return {
                ...state,
                locations: action.locations
            };
            case GET_EPISODES:
                return {
                    ...state,
                    episodes: action.episodes
                };
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCharacters = (characters) => ({ type: GET_CHARACTERS, characters: characters });
export const setLocations = (locations) => ({ type: GET_LOCATIONS, locations: locations });
export const setEpisodes = (episodes) => ({ type: GET_EPISODES, episodes: episodes });

export const requestHeader = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let charactersData = await SearchAPI.getCharacters();
    let locationsData = await SearchAPI.getLocations();
    let episodesData = await SearchAPI.getEpisodes();
    dispatch(toggleIsFetching(false));
    dispatch(setCharacters(charactersData.results));
    dispatch(setLocations(locationsData.results));
    dispatch(setEpisodes(episodesData.results));
}

export default HeaderReducer;