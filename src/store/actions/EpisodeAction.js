import api from "../../utils/api";

export const getEpisodes = () => async (dispacth) => {
    dispacth({type: "GET_EPISODES_START"});
    try {
        const response = await api.get("/episode");
        dispacth({type: "GET_EPISODES_SUCCESS", payload: response.data} );
    } catch {
        dispacth({type: "GET_EPISODES_ERROR"})
    }
}

export const getEpisodeDetail = (number) => async (dispacth) => {
    dispacth({type: "GET_EPISODE_DETAIL_START"});
    try {
        const response = await api.get(`/episode/${number}`);
        dispacth({type: "GET_EPISODE_DETAIL_SUCCESS", payload: response.data} );
    } catch {
        dispacth({type: "GET_EPISODE_DETAIL_ERROR"})
    }
}

