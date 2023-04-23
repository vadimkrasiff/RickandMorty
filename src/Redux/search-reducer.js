import { SearchAPI } from "../api/api";

const GET_CHARACTERS = "GET_CHARACTERS";
const GET_LOCATION = "GET_LOCATION";
const GET_EPISODE = "GET_EPISODE";
const GET_DATA = "GET_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    isFetching: true,
    data: [],
}

let SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case GET_DATA:
        return {
            ...state,
            data: [...state.data,  ...action.data]
        };
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setData = (data) => ({ type: GET_DATA, data });
    
export const requestSearch = (page= 1) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let charactersData = await SearchAPI.getCharacters(page);
    let locationsData = await SearchAPI.getLocations(page);
    let episodesData = await SearchAPI.getEpisodes(page);

    let cycleRequest = async (request, setFunction, url, count) =>  {
        let dataArray = [];
        for(let i = 1; i<= count; i++) {
            let data = await request(i);
        data.results.forEach((e) => {
            dataArray.push({id: e.id, name: e.name, url: url})
        })
    }
        dispatch(setFunction(dataArray));
    }
    

    cycleRequest(SearchAPI.getLocations, setData,  'location', locationsData.info.pages);
    cycleRequest(SearchAPI.getCharacters, setData, 'character', charactersData.info.pages);
    cycleRequest(SearchAPI.getEpisodes, setData, 'episode', episodesData.info.pages); 

    dispatch(toggleIsFetching(false));
}

export const requestData = (data) => {
    return {
        type: GET_DATA,
        data
        };
}

export default SearchReducer;