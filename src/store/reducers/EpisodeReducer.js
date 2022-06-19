const INITIAL_STATE = {
    data: [],
    loading: false,
    error: '',
    episodeData: [],
    episodeLoading: false,
    episodeError: '',
}

export const episodeReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_EPISODES_START":
            return {...state, loading: true, error:"", data: []}
        case "GET_EPISODES_SUCCESS":
            return {...state, loading: false, data:action.payload, error:''}
        case "GET_EPISODES_ERROR":
            return {...state, loading: false, error:"Bölümler yüklenirken bir hata oluştu", data: []}
        case "GET_EPISODE_DETAIL_START":
            return {...state, episodeLoading: true, episodeError:"",episodeData:[]}
        case "GET_EPISODE_DETAIL_SUCCESS":
            return {...state, episodeLoading: false, episodeData:action.payload, episodeError:''}
        case "GET_EPISODE_DETAIL_ERROR":
            return {...state, episodeLoading: false, episodeError:"Bölüm yüklenirken bir hata oluştu", episodeData:[]}
    }

    return state
}
