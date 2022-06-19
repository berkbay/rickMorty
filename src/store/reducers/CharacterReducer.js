const INITIAL_STATE = {
    data: [],
    loading: false,
    error: '',
}

export const characterReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_CHARACTER_START":
            return {...state, loading: true, error:"", data: []}
        case "GET_CHARACTER_SUCCESS":
            return {...state, loading: false, data:action.payload, error:""}
        case "GET_CHARACTER_ERROR":
            return {...state, loading: false, error:"Bölümler yüklenirken bir hata oluştu", data: [] }

    }

    return state
}
