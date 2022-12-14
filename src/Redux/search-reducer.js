import { SearchAPI } from "../api/api";

const GET_CHARACTERS = "GET_CHARACTERS";
const GET_LOCATION = "GET_LOCATION";
const GET_EPISODE = "GET_EPISODE";
const GET_DATA = "GET_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    isFetching: true,
    characters: [],
    locations: [],
    episodes: [],
    data: [[]],
}

let SearchReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case GET_LOCATION:
            return {
                ...state,
                locations: action.locations
            };
        case GET_EPISODE:
            return {
                ...state,
                episodes: action.episodes
            };
        case GET_DATA:
        return {
            ...state,
            data: action.data
        };
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setCharacters = (characters) => ({ type: GET_CHARACTERS, characters: characters });
export const setLocations = (locations) => ({ type: GET_LOCATION, locations: locations });
export const setEpisodes = (episodes) => ({ type: GET_EPISODE, episodes: episodes });
export const setData = (data) => ({ type: GET_EPISODE, data });
    
export const requestSearch = (page= 1) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let charactersData = await SearchAPI.getCharacters(page);
    let locationsData = await SearchAPI.getLocations(page);
    let episodesData = await SearchAPI.getEpisodes(page);

    let cycleRequest = async (request, setFunction, url, count) =>  {
        let dataArray = [];
        for(let i = 1; i<= count; i++) {
            let data = await request(i);
        data.results.map((e) => {
            dataArray.push({id: e.id, name: e.name, url: url})
        })
    }
        dispatch(setFunction(dataArray));
    }
    

    cycleRequest(SearchAPI.getLocations, setLocations,  'location', locationsData.info.pages);
    cycleRequest(SearchAPI.getCharacters, setCharacters, 'character', charactersData.info.pages);
    cycleRequest(SearchAPI.getEpisodes, setEpisodes, 'episode', episodesData.info.pages); 

    dispatch(toggleIsFetching(false));
}

export const requestData = (data) => {
    return {
        type: GET_DATA,
        data
        };
}

export default SearchReducer;