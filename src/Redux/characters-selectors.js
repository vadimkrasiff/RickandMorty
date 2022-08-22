export const getCharacters = (state) => {
    return state.characters.characters;
};

export const getTotalPagesCount = (state) => {
    return state.characters.totalPagesCount;
};

export const getTotalCharactersCount = (state) => {
    return state.characters.charactersCount;
};


export const getCurrentPage = (state) => {
    return state.characters.currentPage;
};


export const getIsFetching = (state) => {
    return state.characters.isFetching;
}

export const getNamePage = (state) => {
    return state.characters.namePage
}