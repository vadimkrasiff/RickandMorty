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