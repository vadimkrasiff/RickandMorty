export const getEpisodes = (state) => {
    return state.episodes.episodes;
};

export const getTotalPagesCount = (state) => {
    return state.episodes.totalPagesCount;
};

export const getTotalEpisodesCount = (state) => {
    return state.episodes.locationsCount;
};

export const getCurrentPage = (state) => {
    return state.episodes.currentPage;
};


export const getIsFetching = (state) => {
    return state.episodes.isFetching;
}

export const getNamePage = (state) => {
    return state.episodes.namePage
}