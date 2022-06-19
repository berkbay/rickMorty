import api from "../../utils/api";

export const getCharacter = () => async (dispacth) => {
    dispacth({type: "GET_CHARACTER_START"});
    try {
        const response = await api.get("/character");
        dispacth({type: "GET_CHARACTER_SUCCESS", payload: response.data} );
    } catch {
        dispacth({type: "GET_CHARACTER_ERROR"})
    }
}
