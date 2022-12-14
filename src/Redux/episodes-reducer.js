import { episodeAPI } from "../api/api";

const GET_EPISODES = "GET_EPISODES";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PAGES_COUNT = "SET_TOTAL_PAGES_COUNT";
let initialState = {
    isFetching: true,
    namePage: "episodes&page=",
    totalPagesCount: 0,
    episodes: null
}

let episodesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_EPISODES:
            return {
                ...state,
                episodes: action.episodes
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_PAGES_COUNT:
            return {
                ...state,
                totalPagesCount: action.totalPagesCount
            };
        default:
            return state;
    }
}

export const setEpisodes = (episodes) => ({type: GET_EPISODES, episodes: episodes});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setTotalPagesCount = (totalPagesCount) => ({ type: SET_TOTAL_PAGES_COUNT, totalPagesCount: totalPagesCount });

export const requestEpisodes = (page) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));

        let data = await episodeAPI.getEpisode(page);
        dispatch(setEpisodes(data.results));
        dispatch(setTotalPagesCount(data.info.pages));
        
        dispatch(toggleIsFetching(false));
    }
}

export default episodesReducer;