import axios from "axios";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
})

export const charactersAPI = {
    async getCharacters(currentPage = 1) {
        // try{
            return instance.get(`character?page=${currentPage}`)
            .then(response => {
                return response.data;
            })
        // } catch (err) {
        //     return charactersData;
        // }
    },
    getCharacter (id) {
        return characterAPI.getCharacter(id);
    }
}

export const characterAPI = {
    async getCharacter (id) {
        const response = await instance.get(`character/` + id);
        return response.data;
    }
}

export const locationsAPI = {
    async getLocation (currentPage=1) {
        return instance.get(`location?page=${currentPage}`)
        .then(response => {
            return response.data;
        })
    }
}

export const episodeAPI = {
    async getEpisode (number = 1) {
        return instance.get(`episode?page=${number}`)
        .then(response => {
            return response.data;
        })
    }
}

export const SearchAPI = {
    async getCharacters (page = 1) {
        const response = await instance.get(`character?page=${page}`);
        return response.data;
    },
    async getLocations (page = 1) {
        return instance.get(`location?page=${page}`)
        .then(response => {
            return response.data;
        })
    },
    async getEpisodes (page = 1) {
        return instance.get(`episode?page=${page}`)
        .then(response => {
            return response.data;
        })
    }

}