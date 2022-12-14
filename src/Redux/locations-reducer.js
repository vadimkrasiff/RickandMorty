import { locationsAPI } from "../api/api";

const GET_LOCATIONS = "GET_LOCATIONS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_TOTAL_PAGES_COUNT = "SET_TOTAL_PAGES_COUNT";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initialState = {
    isFetching: true,
    locationsCount: 0,
    namePage: "locations&page=",
    totalPagesCount: 0,
    locations: null,
}

let locationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATIONS:
            return {
                ...state,
                locations: action.locations
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_TOTAL_PAGES_COUNT:
            return { ...state, totalPagesCount: action.count };
        case SET_TOTAL_COUNT:
            return { ...state, locationsCount: action.locationsCount };
        default:
            return state;
    }
}

export const setLocations = (locations) => ({ type: GET_LOCATIONS, locations: locations });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setTotalPagesCount = (totalPagesCount) => ({ type: SET_TOTAL_PAGES_COUNT, count: totalPagesCount });
export const setTotalLocationsCount = (locationsCount) => ({ type: SET_TOTAL_COUNT, locationsCount: locationsCount });

export const requestLocations = (page) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        
        let data = await locationsAPI.getLocation(page);
        
        dispatch(setLocations(data.results));
        dispatch(setTotalPagesCount(data.info.pages));
        dispatch(setTotalLocationsCount(data.info.count));
        dispatch(toggleIsFetching(false));
    }
}

export default locationsReducer;