export const getTotalLocationsCount = (state) => {
    return state.footer.locationsCount;
};

export const getTotalCharactersCount = (state) => {
    return state.footer.charactersCount;
};

export const getTotalEpisodesCount = (state) => {
    return state.footer.episodesCount;
};

export const getIsFetching = (state) => {
    return state.footer.isFetching;
};