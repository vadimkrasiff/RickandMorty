export const getLocations = (state) => {
    return state.header.locations;
};

export const getCharacters = (state) => {
    return state.header.characters;
};

export const getEpisodes = (state) => {
    return state.header.episodies;
};

export const getIsFetching = (state) => {
    return state.header.isFetching;
};