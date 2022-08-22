export const getLocations = (state) => {
    return state.locations.locations;
};

export const getTotalPagesCount = (state) => {
    return state.locations.totalPagesCount;
};

export const getTotalLocationsCount = (state) => {
    return state.locations.locationsCount;
};

export const getCurrentPage = (state) => {
    return state.locations.currentPage;
};


export const getIsFetching = (state) => {
    return state.locations.isFetching;
}

export const getNamePage = (state) => {
    return state.locations.namePage
}