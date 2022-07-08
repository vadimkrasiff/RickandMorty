import axios from "axios";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
})

export const charactersAPI = {
    async getCharacters() {
        // try{
            return instance.get(`character?page=1`)
            .then(response => {
                return response.data;
            })
        // } catch (err) {
        //     return charactersData;
        // }
    }
}

export const locationAPI = {
    async getLocation (number=1) {
        return instance.get(`location?page=${number}`)
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