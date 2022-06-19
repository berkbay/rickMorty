const INITIAL_STATE = {
    data: [],
    loading: false,
    error: '',
}

export const episodeReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_EPISODES_START":
            return {...state, loading: true, error:""}
        case "GET_EPISODES_SUCCESS":
            return {...state, loading: false, data:action.payload}
        case "GET_EPISODES_ERROR":
            return {...state, loading: false, error:"Error fetching categories"}
    }

    return state
}
