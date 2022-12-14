export const getLocation = (state) => {
    return state.searh.locations;
};

export const getCharacters = (state) => {
    return state.searh.characters;
};

export const getEpisode = (state) => {
    return state.searh.episodes;
};

export const getData = (state) => {
    return state.searh.data;
};


export const getIsFetching = (state) => {
    return state.searh.isFetching;
};
